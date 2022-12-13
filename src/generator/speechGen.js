import * as Blockly from "blockly/core";
import "blockly/python";
import Cookies from "universal-cookie";

const cookies = new Cookies();

/**
 *
 * @param {*} block
 * @returns Python code that instructs Pepper to say the contents of @text
 */
Blockly.Python["say"] = function (block) {
  var text =
    Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_ATOMIC) ||
    "''";
  return `pep_speech.talk(${text})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that instructs Pepper to use a given language when speaking.
 */
Blockly.Python["change_pepper_speaking_language"] = function (block) {
  var language = block.getFieldValue("speaking_language");
  cookies.set("pepper_language", language);
  return `pep_controller.change_language("${language}")\n`;
};
