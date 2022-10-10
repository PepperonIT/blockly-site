import * as Blockly from "blockly/core";
import "../fields/BlocklyReactField";
import "../fields/DateField";
import "@blockly/field-date";
import "@blockly/field-date";


var say = {
    type: "say",
    message0: "say (what to say: %1)",
    args0:[
        {
            type: "field_input",
            name: "input_text",
            text: "Hello human!"
          },
      ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };
  
  Blockly.Blocks["say"] = {
    init: function () {
      this.jsonInit(say);
      this.setStyle("loop_blocks");
      this.setColour(210);
    },
  };