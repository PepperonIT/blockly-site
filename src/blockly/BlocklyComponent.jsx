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
 * Edited by Nour Bahtite, Casper Lundberg and Simon Lundberg
 */

import React from "react";
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
  const name = cookies.get("nickname");
  const port = cookies.get("server_port");
  const ip = cookies.get("server_ip");

  var formText = {};
  const svForm = {
    import: "Ladda upp fil",
    export: "Ladda ned block",
    send: "Skicka koden till Pepper",
    backToHome: "Tillbaka till startsidan",
    pauseQueue: "Pausa Kön",
    unpauseQueue: "Starta Kön",
    codeSentSuccess: "Din kod har lagts till i kön!",
    codeSentSuccessConfirm: "Vad bra!",
    codeSentFail: "Din kod lades INTE till i kön på grund av ett fel",
    codeSentFailConfirm: "Ok",
  };
  const enForm = {
    import: "Import",
    export: "Export",
    send: "Send code to Pepper",
    backToHome: "Back to home",
    pauseQueue: "Pause Queue",
    unpauseQueue: "Unpause Queue",
    codeSentSuccess: "Your code has been queued!",
    codeSentSuccessConfirm: "Very good!",
    codeSentFail: "Your code was NOT sent due to an error",
    codeSentFailConfirm: "Ok",
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
    if (cookies.get("language") === "en" || cookies.get("english") === true) {
      cookies.set("pepper_language", "English");
    } else if (
      cookies.get("language") === "sv" ||
      cookies.get("english") === false
    ) {
      cookies.set("pepper_language", "Swedish");
    }

    // Generate Python code
    var code = BlocklyPy.workspaceToCode(primaryWorkspace.current);
    console.log(code); // See that the code is generated, viewable from browser
    // Send the code to server
    sendCodeString(code);
  };

  const sendCodeString = (code) => {
    // =====================
    // SEND TO PYTHON SERVER
    // =====================

    axios
      .post(`http://${ip}:${port}/code?name=${name}`, code, {
        headers: { "Content-Type": "text/plain" },
      })
      .then((res) => {
        codeSentMessage(res.data.success);
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
    var xml;

    var reader = new FileReader();
    reader.onload = function () {
      xml = reader.result;

      if (typeof xml != "string" || xml.length < 5) {
        return false;
      }
      try {
        var dom = Blockly.Xml.textToDom(xml);
        Blockly.mainWorkspace.clear();
        Blockly.Xml.domToWorkspace(dom, Blockly.mainWorkspace);
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
    loadBlocks(fileUploaded);
    hiddenFileInput.current.value = "";
  };

  const codeSentMessage = (success) => {
    var title = null;
    var label = null;

    if (success) {
      title = formText.codeSentSuccess;
      label = formText.codeSentSuccessConfirm;
    } else {
      title = formText.codeSentFail;
      label = formText.codeSentFailConfirm;
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
