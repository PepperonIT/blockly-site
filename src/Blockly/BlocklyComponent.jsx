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

import Blockly from "blockly/core";
import BlocklyPy from "blockly/python";
import locale from "blockly/msg/en";
import "blockly/blocks";
import axios from "axios";

Blockly.setLocale(locale);

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
    axios
      .post("http://localhost:5000", code)
      .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log("Code: ", res.data);
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

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
        primaryWorkspace.current
      );
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  return (
    <React.Fragment>
      <button onClick={generateCode}>Convert</button>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: "none" }} ref={toolbox}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default BlocklyComponent;
