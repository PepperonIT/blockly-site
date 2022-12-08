import * as Blockly from "blockly/core";
import "blockly/python";

/**
 *
 * @param {*} block
 * @returns Python code that instructs Pepper to say the contents of @text
 */
Blockly.Python["say"] = function (block) {
  var text =
    Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_NONE) ||
    "''";
  return `pep_speech.talk(${text})\n`;
};
