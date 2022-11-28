import * as Blockly from "blockly/core";

var wait = {
  type: "wait_en",
  message0: "wait for %1 seconds",
  args0: [
    {
      type: "field_slider",
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

Blockly.Blocks["wait_en"] = {
  init: function () {
    this.jsonInit(wait);
    this.setStyle("loop_blocks");
    this.setColour(350);
  },
};