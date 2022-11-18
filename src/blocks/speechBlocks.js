import * as Blockly from "blockly/core";

var say = {
  type: "say",
  message0: "säg: %1",
  args0: [
    {
      type: "field_input",
      name: "text",
      text: "Hej, mitt namn är Pepper!",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "Skriv något i textrutan så säger Pepper det.",
  helpUrl: "",
};

Blockly.Blocks["say"] = {
  init: function () {
    this.jsonInit(say);
    this.setStyle("loop_blocks");
    this.setColour(180);
  },
};
