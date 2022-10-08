import * as Blockly from "blockly/core";
import "../fields/BlocklyReactField";
import "../fields/DateField";
import "@blockly/field-date";

var rotateEyes = {
    type: "rotate_eyes",
    message0: "Rotate eyes %1",
    args0: [
      {
        type: "field_number",
        name: "rgb",
        value: 0,
        min: 0,
        max: 100
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,  
    tooltip: "",
    helpUrl: ""
  }

Blockly.Blocks["rotate_eyes"] = {
  init: function () {
    this.jsonInit(rotateEyes);
    this.setStyle("loop_blocks");
    this.setColour(0);
  },
};



var fadeEyes = {
    type: "fade_eyes",
    message0: "Fade eyes %1 %2",
    args0: [
      {
        type: "field_number",
        name: "rgb",
        value: 0,
        min: 0,
        max: 100
      },
      {
        type: "field_number",
        name: "duration",
        value: 0,
        min: 0,
        max: 100
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,  
    tooltip: "",
    helpUrl: ""
  }

Blockly.Blocks["fade_eyes"] = {
  init: function () {
    this.jsonInit(fadeEyes);
    this.setStyle("loop_blocks");
    this.setColour(0);
  },
};
