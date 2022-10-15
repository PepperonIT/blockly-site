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
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from "react";
import "./App.css";

// import logo from "./logo.svg";

import BlocklyComponent, {
  Block,
  Value,
  Field,
  Shadow,
  Category,
} from "./blockly";

import "./blocks/customblocks";
import "./blocks/expressionsBlocks";
import "./blocks/movementBlocks";
import "./blocks/speechBlocks";
import "./generator/generator";
import "./generator/expressionsGen";
import "./generator/movementGen";
import "./generator/speechGen";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BlocklyComponent
          readOnly={false}
          trashcan={true}
          media={"media/"}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
</xml>
      `}
        >
          <Category name="Expressions">
            <Block type="rotate_eyes" />
            <Block type="fade_eyes" />
            <Block type="angry_eyes" />
            <Block type="sad_eyes" />
            <Block type="blink_eyes" />
            <Block type="squint_eyes" />
            <Block type="random_eyes" />
          </Category>
          <Category name="Movement">
            <Category name="Gesture">
              <Block type="move_head" />
              <Block type="reset_head" />
              <Block type="nod_head" />
              <Block type="shake_head" />
              <Block type="spin_head" />
            </Category>

            <Category name="Translation">
              <Block type="move_pepper" />
              <Block type="stop_movement" />
            </Category>
          </Category>
          <Category name="Speech">
            <Block type="say" />
          </Category>

          <Category name="tests">
            <Block type="math_number">
              <Field name="NUM">0</Field>
            </Block>
            <Block type="test_react_field" />
            <Block type="test_react_date_field" />
            <Block type="controls_ifelse" />
            <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="logic_operation" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
            <Block type="logic_null" disabled="true" />
            <Block type="logic_ternary" />
            <Block type="text_charAt">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
            </Block>
          </Category>
        </BlocklyComponent>
      </header>
    </div>
  );
}

export default App;
