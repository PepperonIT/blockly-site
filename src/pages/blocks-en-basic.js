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
 
 import "../blocks/customBlocks";
 import "../blocks/expressionsBlocks";
 import "../blocks/movementBlocks";
 import "../blocks/speechBlocks";
 import "../blocks/waitBlock";
 
 import "../generator/generator";
 import "../generator/expressionsGen";
 import "../generator/movementGen";
 import "../generator/speechGen";
 import "../generator/waitGen";
 import "../generator/shadowFieldGen";


 function BlocksEnBasic() {
  return (
    <div>
        <h1>
        BlocksEnBasic
        </h1>
    </div>
  )
}
 
 export default BlocksEnBasic;
 