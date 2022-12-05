import * as Blockly from "blockly/core";

var say = {
  type: "say_en",
  message0: "Say %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "Type something in the text box and Pepper will say it.",
  helpUrl: "",
};

Blockly.Blocks["say_en"] = {
  init: function () {
    this.jsonInit(say);
    this.setStyle("loop_blocks");
    this.setColour(180);
  },
};
