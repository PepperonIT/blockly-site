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
  var language = cookies.get("pepper_language");
  return `pep_controller.change_language("${language}")\npep_speech.talk(${text})\n`;
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


/**
 *
 * @param {*} block
 * @returns Python code that instructs Pepper to use a given volume when speaking.
 */
Blockly.Python["change_pepper_speaking_volume"] = function (block) {
  var volume = block.getFieldValue("speaking_volume");
  return `pep_controller.set_volume(${volume})\n`;
};
