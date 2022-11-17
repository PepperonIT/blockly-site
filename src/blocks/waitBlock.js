import * as Blockly from "blockly/core";
import "../fields/BlocklyReactField";
import "../fields/DateField";
import "@blockly/field-date";

var wait = {
  type: "wait",
  message0: "vänta: %1 sekunder",
  args0: [
    {
      type: "field_input",
      name: "duration",
      value: 1,
      min: 1,
      max: 100,
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["wait"] = {
  init: function () {
    this.jsonInit(wait);
    this.setStyle("loop_blocks");
    this.setColour(350);
  },
};
