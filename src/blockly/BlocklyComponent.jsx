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

import React from "react";
import "./BlocklyComponent.css";
import { useEffect, useRef } from "react";
import sv from "blockly/msg/sv";
import en from "blockly/msg/en";
import Blockly from "blockly/core";
import BlocklyPy from "blockly/python";
import "blockly/blocks";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

Blockly.setLocale(sv);

function BlocklyComponent(props) {
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();

  const generateCode = () => {
    // Python
    var code = BlocklyPy.workspaceToCode(primaryWorkspace.current);
    console.log(code); // See that the code is generated, viewable from browser

    // ==========================================
    // SEND TO PYTHON SERVER (LEAVE HERE FOR NOW)
    // ==========================================
    // Get yout IP on Linux by running `ifconfig`
    const myIP = "130.240.156.237"; // Only use localhost if site is running on dev-machine ONLY. Otherwise use full IP! Remeber to open ports!

    axios
      .post(`http://${myIP}:5000/code`, code, {
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

  // const setLanguage = async (newLan) => {
  //   var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  //   var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  //   localStorage.setItem("blockly.xml", xmlText);

  //   primaryWorkspace.current.dispose();

  //   if (newLan === "sv") {
  //     Blockly.setLocale(sv);
  //   } else {
  //     Blockly.setLocale(en);
  //   }
  //   // window.location.reload();

  //   var xmlTextTemp = localStorage.getItem("blockly.xml");

  //   await new Promise((r) => setTimeout(r, 2000));

  //   var { initialXml, children, ...rest } = props;
  //   primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
  //     toolbox: toolbox.current,
  //     ...rest,
  //   });

  //   initialXml = xmlTextTemp;

  //   if (initialXml) {
  //     Blockly.mainWorkspace.clear();
  //     xmlDom = Blockly.Xml.textToDom(initialXml);
  //     Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
  //   }
  // };

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });

    // Returns an arry of XML nodes.
    // var coloursFlyoutCallback = function (workspace) {
    //   // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
    //   var colourList = primaryWorkspace.current.getAllVariables();
    //   var blockList = [];
    //   for (var i = 0; i < colourList.length; i++) {
    //     var block = document.createElement("block");
    //     block.setAttribute("type", "field_variable");
    //     var field = document.createElement("field");
    //     field.setAttribute("name", "VARS");
    //     field.innerText = colourList[i];
    //     block.appendChild(field);
    //     blockList.push(block);
    //   }
    //   return blockList;
    // };

    // // Associates the function with the string 'VARS'
    // primaryWorkspace.current.registerToolboxCategoryCallback(
    //   "VARS",
    //   coloursFlyoutCallback
    // );

    // primaryWorkspace.current.registerButtonCallback(
    //   "intVar",
    //   function (button) {
    //     Blockly.Variables.createVariable(
    //       button.getTargetWorkspace(),
    //       null,
    //       "Number"
    //     );
    //   }
    // );

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
        primaryWorkspace.current
      );
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  const codeSentMessage = () => {
    confirmAlert({
      title: 'Din kod har lagts i kön!',
      buttons: [
        {
          label: 'Vad bra',
        },
      ],
    });
  };

  const sendCode = () => {
    generateCode();
    codeSentMessage();
  }

  return (
    <React.Fragment>
      {/* <button onClick={setLanguage("sv")}>Byt språk</button> */}
      <button onClick={sendCode}>Skicka koden till Pepper</button>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: "none" }} ref={toolbox}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default BlocklyComponent;
