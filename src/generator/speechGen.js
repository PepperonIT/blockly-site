import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["say"] = function (block) {
  var text =
    Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_NONE) ||
    "''";
  return `pep_speech.talk(${String(text)})\n`;
};
