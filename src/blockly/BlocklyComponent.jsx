/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React, { useState } from "react";
import "./BlocklyComponent.css";
import { useEffect, useRef } from "react";
import sv from "blockly/msg/sv";
import en from "blockly/msg/en";
import Blockly from "blockly/core";
import BlocklyPy from "blockly/python";
import "blockly/blocks";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const config = require("../../config/config");
const port = config.server.port;
const host = config.server.host;

// const config = require("config");
// const host = config.get("server").host;
// const port = config.get("server").port;

const exprBlocks = require("../blocks/expressionsBlocks");
const speechBlocks = require("../blocks/speechBlocks");
const miscBlocks = require("../blocks/miscBlocks");
const movementBlocks = require("../blocks/movementBlocks");

var ws; //Global variable required to get workspace to QueueComponent

function BlocklyComponent(props) {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const blocklyDiv = useRef();
  const toolbox = useRef();

  let primaryWorkspace = useRef();
  ws = primaryWorkspace;

  var formText = {};
  const svForm = {
    import: "Ladda upp fil",
    export: "Ladda ned block",
    send: "Skicka koden till Pepper",
    backToHome: "Tillbaka till startsidan",
    pauseQueue: "Pausa Kön",
    unpauseQueue: "Starta Kön",
  };
  const enForm = {
    import: "Import",
    export: "Export",
    send: "Send code to Pepper",
    backToHome: "Back to home",
    pauseQueue: "Pause Queue",
    unpauseQueue: "Unpause Queue",
  };

  if (cookies.get("language") === "en") {
    Blockly.setLocale(en);
    formText = enForm;
    exprBlocks.setEN();
    speechBlocks.setEN();
    miscBlocks.setEN();
    movementBlocks.setEN();
  } else {
    Blockly.setLocale(sv);
    formText = svForm;
    exprBlocks.setSV();
    speechBlocks.setSV();
    miscBlocks.setSV();
    movementBlocks.setSV();
  }

  const generateCode = () => {
    // Python
    var code = BlocklyPy.workspaceToCode(primaryWorkspace.current);
    console.log(code); // See that the code is generated, viewable from browser

    sendCodeString(code);
  };

  const sendCodeString = (code) => {
    // ==========================================
    // SEND TO PYTHON SERVER (LEAVE HERE FOR NOW)
    // ==========================================
    // Get yout IP on Linux by running `ifconfig`

    axios
      .post(`http://${host}:${port}/code`, code, {
        headers: { "Content-Type": "text/plain" },
      })
      .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log("Response: ", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });

    ws = primaryWorkspace.current;

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
        primaryWorkspace.current
      );
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  const saveBlocks = () => {
    var xmlDom = Blockly.Xml.workspaceToDom(primaryWorkspace.current);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    // do whatever you want to this xml

    var filename = "workspace.xml";
    var pom = document.createElement("a");
    var bb = new Blob([xmlText], { type: "text/plain" });

    pom.setAttribute("href", window.URL.createObjectURL(bb));
    pom.setAttribute("download", filename);

    pom.dataset.downloadurl = ["text/plain", pom.download, pom.href].join(":");
    pom.draggable = true;
    pom.classList.add("dragout");

    pom.click();
  };

  const loadBlocks = (file) => {
    // var xml;
    // document.getElementById("buttonid").addEventListener("click", openDialog);
    // function openDialog() {
    //   document.getElementById("fileid").click();
    // }
    // document.getElementById("fileid").addEventListener("change", submitForm);
    // function submitForm() {
    //   xml = document.getElementById("formid").submit();
    // }

    var xml;

    var reader = new FileReader();
    reader.onload = function () {
      xml = reader.result;
      // console.log(xml);

      if (typeof xml != "string" || xml.length < 5) {
        return false;
      }
      try {
        var dom = Blockly.Xml.textToDom(xml);
        Blockly.mainWorkspace.clear();
        Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, dom);
        return true;
      } catch (e) {
        return false;
      }
      // xml is the same block xml you stored
    };
    reader.readAsText(file);
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    // props.handleFile(fileUploaded);
    loadBlocks(fileUploaded);
    hiddenFileInput.current.value = "";
  };



  const codeSentMessage = () => {
    var title;
    var label;
    if (cookies.get("language") === "en") {
      title = "Your code has been queued!"
      label = "very good!"
    } else {
      title = "Din kod har lagts i kön!"
      label = "Vad bra"
    }
    confirmAlert({
      title: title,
      buttons: [
        {
          label: label,
        },
      ],
    });
  };

  const sendCode = () => {
    generateCode();
    codeSentMessage();
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <button onClick={handleClick}>{formText.import}</button>
      <input
        type="file"
        accept="text/xml"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button onClick={saveBlocks}>{formText.export}</button>
      <button onClick={sendCode}>{formText.send}</button>
      <button onClick={goToHome}>{formText.backToHome}</button>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: "none" }} ref={toolbox}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default BlocklyComponent;

export var ws;
