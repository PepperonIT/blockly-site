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
 import "../styles/blockly.css"
 
 // import logo from "./logo.svg";
 
 import BlocklyComponent, {
   Block,
   Value,
   Field,
   Shadow,
   Category,
   Mutation,
 } from "../blockly";
 
 // require "@blockly/field-date";
 // import "@blockly/field-slider";
 
 import "../fields/shadowFields";
 
 import "../blocks/sv-blocks/customBlocks";
 import "../blocks/sv-blocks/expressionsBlocks";
 import "../blocks/sv-blocks/movementBlocks";
 import "../blocks/sv-blocks/speechBlocks";
 import "../blocks/sv-blocks/waitBlock";
 
 import "../generator/sv-generator/generator";
 import "../generator/sv-generator/expressionsGen";
 import "../generator/sv-generator/movementGen";
 import "../generator/sv-generator/speechGen";
 import "../generator/sv-generator/waitGen";
 import "../generator/sv-generator/shadowFieldGen";


 function BlocksSvAdvanced() {
  return (
    <div className="Blocks">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="boxes">
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
            {/**
             *
             */}
            <Category name="Uttryck" colour="#5B6DA5">
              <Block type="rotate_eyes">
                <Value name="COLOUR">
                  <Shadow type="colour_picker">
                    <Field name="COLOUR">#8080ff</Field>
                  </Shadow>
                </Value>
                <Value name="DURATION">
                  <Shadow type="number_constraint"></Shadow>
                </Value>
              </Block>
              <Block type="fade_eyes">
                <Value name="COLOUR">
                  <Shadow type="colour_picker">
                    <Field name="COLOUR">#8080ff</Field>
                  </Shadow>
                </Value>
                <Value name="DURATION">
                  <Shadow type="number_constraint"></Shadow>
                </Value>
              </Block>
              <Block type="angry_eyes" />
              <Block type="sad_eyes" />
              <Block type="blink_eyes">
                <Value name="DURATION">
                  <Shadow type="number_constraint"></Shadow>
                </Value>
              </Block>
              <Block type="squint_eyes">
                <Value name="DURATION">
                  <Shadow type="number_constraint"></Shadow>
                </Value>
              </Block>
              <Block type="random_eyes">
                <Value name="DURATION">
                  <Shadow type="number_constraint"></Shadow>
                </Value>
              </Block>
              <Block type="wink_eye" />
            </Category>
            {/**
             *
             */}
            <Category name="Armgester" colour="#8CA55B">
              <Block type="rotate_left_shoulder_roll" />
              <Block type="rotate_left_shoulder_pitch" />
              <Block type="rotate_left_elbow_roll" />
              <Block type="rotate_right_shoulder_roll" />
              <Block type="rotate_right_shoulder_pitch" />
              <Block type="rotate_right_elbow_roll" />
            </Category>
            {/**
             *
             */}
            <Category name="Huvudgester" colour="#A58C5B">
              <Block type="move_head_left_right">
                <Value name="DEGREES">
                  <Shadow type="angle_constraint_1"></Shadow>
                </Value>
                <Value name="SPEED">
                  <Shadow type="speed_constraint"></Shadow>
                </Value>
              </Block>
              <Block type="move_head_up_down" />
              <Block type="reset_head" />
              <Block type="nod_head" />
              <Block type="shake_head" />
              <Block type="spin_head" />
            </Category>
            {/**
             *
             */}
            <Category name="Rörelser" colour="#5BA574">
              <Block type="move_pepper" />
              <Block type="stop_movement" />
              <Block type="dance" />
              <Block type="ketchup_dance" />
              <Block type="robot_dance" />
            </Category>
            <Category name="Tala" colour="#5BA5A5">
              <Block type="say">
                <Value name="TEXT">
                  <Shadow type="text">
                    <Field name="TEXT">Hej, mitt namn är Pepper!</Field>
                  </Shadow>
                </Value>
              </Block>
            </Category>
            {/**
             *
             */}
            <Category name="Logik" categorystyle="logic_category">
              <Block type="controls_if"></Block>
              <Block type="logic_compare"></Block>
              <Block type="logic_operation"></Block>
              <Block type="logic_negate"></Block>
              <Block type="logic_boolean"></Block>
              <Block type="logic_null"></Block>
              <Block type="logic_ternary"></Block>
            </Category>
            {/**
             *
             */}
            <Category name="Loopar" categorystyle="loop_category">
              <Block type="controls_repeat_ext">
                <Value name="TIMES">
                  <Shadow type="math_number">
                    <Field name="NUM">10</Field>
                  </Shadow>
                </Value>
              </Block>
              {/* <Block type="controls_repeat" disabled="true"></Block> */}
              <Block type="controls_whileUntil"></Block>
              <Block type="controls_for">
                <Value name="FROM">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
                <Value name="TO">
                  <Shadow type="math_number">
                    <Field name="NUM">10</Field>
                  </Shadow>
                </Value>
                <Value name="BY">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="controls_forEach"></Block>
              <Block type="controls_flow_statements"></Block>
            </Category>
            {/**
             *
             */}
            <Category name="Matematik" categorystyle="math_category">
              <Block type="math_number" gap="32">
                <Field name="NUM">123</Field>
              </Block>
              <Block type="math_arithmetic">
                <Value name="A">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
                <Value name="B">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_single">
                <Value name="NUM">
                  <Shadow type="math_number">
                    <Field name="NUM">9</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_trig">
                <Value name="NUM">
                  <Shadow type="math_number">
                    <Field name="NUM">45</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_constant"></Block>
              <Block type="math_number_property">
                <Value name="NUMBER_TO_CHECK">
                  <Shadow type="math_number">
                    <Field name="NUM">0</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_round">
                <Value name="NUM">
                  <Shadow type="math_number">
                    <Field name="NUM">3.1</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_on_list"></Block>
              <Block type="math_modulo">
                <Value name="DIVIDEND">
                  <Shadow type="math_number">
                    <Field name="NUM">64</Field>
                  </Shadow>
                </Value>
                <Value name="DIVISOR">
                  <Shadow type="math_number">
                    <Field name="NUM">10</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_constrain">
                <Value name="VALUE">
                  <Shadow type="math_number">
                    <Field name="NUM">50</Field>
                  </Shadow>
                </Value>
                <Value name="LOW">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
                <Value name="HIGH">
                  <Shadow type="math_number">
                    <Field name="NUM">100</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_random_int">
                <Value name="FROM">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
                <Value name="TO">
                  <Shadow type="math_number">
                    <Field name="NUM">100</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_random_float"></Block>
              <Block type="math_atan2">
                <Value name="X">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
                <Value name="Y">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
              </Block>
            </Category>
            {/**
             *
             */}
            <Category name="Text" categorystyle="text_category">
              <Block type="text"></Block>
              <Block type="text_multiline"></Block>
              <Block type="text_join"></Block>
              <Block type="text_append">
                <Value name="TEXT">
                  <Shadow type="text"></Shadow>
                </Value>
              </Block>
              <Block type="text_length">
                <Value name="VALUE">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_isEmpty">
                <Value name="VALUE">
                  <Shadow type="text">
                    <Field name="TEXT"></Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_indexOf">
                <Value name="VALUE">
                  <Block type="variables_get">
                    <Field name="VAR">text</Field>
                  </Block>
                </Value>
                <Value name="FIND">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_charAt">
                <Value name="VALUE">
                  <Block type="variables_get">
                    <Field name="VAR">text</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="text_getSubstring">
                <Value name="STRING">
                  <Block type="variables_get">
                    <Field name="VAR">text</Field>
                  </Block>
                </Value>
              </Block>

              <Block type="text_changeCase">
                <Value name="TEXT">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_trim">
                <Value name="TEXT">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_count">
                <Value name="SUB">
                  <Shadow type="text"></Shadow>
                </Value>
                <Value name="TEXT">
                  <Shadow type="text"></Shadow>
                </Value>
              </Block>
              <Block type="text_replace">
                <Value name="FROM">
                  <Shadow type="text"></Shadow>
                </Value>
                <Value name="TO">
                  <Shadow type="text"></Shadow>
                </Value>
                <Value name="TEXT">
                  <Shadow type="text"></Shadow>
                </Value>
              </Block>
              <Block type="text_reverse">
                <Value name="TEXT">
                  <Shadow type="text"></Shadow>
                </Value>
              </Block>
              {/* <label text="Input/Output:" web-class="ioLabel"></label> */}
              <Block type="text_print" disabled="true">
                <Value name="TEXT">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_prompt_ext">
                <Value name="TEXT">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
            </Category>
            {/**
             *
             */}
            <Category name="Listor" categorystyle="list_category">
              <Block type="lists_create_with">
                <Mutation items="0"></Mutation>
              </Block>
              <Block type="lists_create_with"></Block>
              <Block type="lists_repeat">
                <Value name="NUM">
                  <Shadow type="math_number">
                    <Field name="NUM">5</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="lists_length"></Block>
              <Block type="lists_isEmpty"></Block>
              <Block type="lists_indexOf">
                <Value name="Value">
                  <Block type="variables_get">
                    <Field name="VAR">list</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="lists_getIndex">
                <Value name="Value">
                  <Block type="variables_get">
                    <Field name="VAR">list</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="lists_setIndex">
                <Value name="LIST">
                  <Block type="variables_get">
                    <Field name="VAR">list</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="lists_getSublist">
                <Value name="LIST">
                  <Block type="variables_get">
                    <Field name="VAR">list</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="lists_split">
                <Value name="DELIM">
                  <Shadow type="text">
                    <Field name="TEXT">,</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="lists_sort"></Block>
              <Block type="lists_reverse"></Block>
            </Category>
            {/**
             *
             */}
            <Category name="Färger" categorystyle="colour_category">
              <Block type="colour_picker"></Block>
              <Block type="colour_random"></Block>
              <Block type="colour_rgb">
                <Value name="RED">
                  <Shadow type="math_number">
                    <Field name="NUM">100</Field>
                  </Shadow>
                </Value>
                <Value name="GREEN">
                  <Shadow type="math_number">
                    <Field name="NUM">50</Field>
                  </Shadow>
                </Value>
                <Value name="BLUE">
                  <Shadow type="math_number">
                    <Field name="NUM">0</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="colour_blend">
                <Value name="COLOUR1">
                  <Shadow type="colour_picker">
                    <Field name="COLOUR">#ff0000</Field>
                  </Shadow>
                </Value>
                <Value name="COLOUR2">
                  <Shadow type="colour_picker">
                    <Field name="COLOUR">#3333ff</Field>
                  </Shadow>
                </Value>
                <Value name="RATIO">
                  <Shadow type="math_number">
                    <Field name="NUM">0.5</Field>
                  </Shadow>
                </Value>
              </Block>
            </Category>
            {/**
             *
             */}
            <Category
              name="Variabler"
              categorystyle="variable_category"
              custom="VARIABLE"
            >
              {/* <Block type="variables_get_int"></Block>
            <Block type="variables_set_int"></Block> */}
              {/* <button text="A button" callbackKey="intVar"></button> */}
            </Category>

            {/* <Category name="Vars" custom="VARS">
            <button text="A button" callbackKey="intVar"></button>
          </Category> */}

            {/**
             *
             */}
            <Category
              name="Funktioner"
              categorystyle="procedure_category"
              custom="PROCEDURE"
            ></Category>
            {/**
             *
             */}
            <Category name="Annat" colour="#A55B67">
              <Block type="wait"></Block>
            </Category>
          </BlocklyComponent>
          <div className="Queue-div">
            <ul>
              <li>prgm 7</li>
              <li>prgm 6</li>
              <li>prgm 5</li>
              <li>prgm 4</li>
              <li>prgm 3</li>
              <li>prgm 2</li>
              <li>prgm 1</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
 
  
 }
 
 export default BlocksSvAdvanced;
 