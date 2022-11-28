import * as Blockly from "blockly/core";

var wait = {
  type: "wait",
  message0: "Vänta: %1 sekunder",
  args0: [
    {
      type: "input_value",
      name: "DURATION",
      check: "Number",
      min: 0,
      max: 60,
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
