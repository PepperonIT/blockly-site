import * as Blockly from "blockly/core";
import "blockly/python";
import Cookies from "universal-cookie";

const cookies = new Cookies();

/**
 *
 * @param {*} block
 * @returns Python code that sleeps a thread for @duration seconds
 */
Blockly.Python["wait"] = function (block) {
  var duration = getDuration(block);
  return `time.sleep(${duration})\n`;
};

/**
 * TODO
 * @param {*} block
 * @returns
 */
Blockly.Python["play_music"] = function (block) {
  var song =
    Blockly.Python.valueToCode(
      block,
      "FIELDNAME",
      Blockly.Python.ORDER_ATOMIC
    ) || "0";
  return `XXXXXXXXXXX(${song})\n`;
};

/**
 * TODO
 * @param {*} block
 * @returns
 */
Blockly.Python["ask_google"] = function (block) {
  var searchString =
    Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_ATOMIC) ||
    "''";
  var language = cookies.get("pepper_language");
  return `pep_controller.change_language("${language}")\nweb_controller.ask_google(${searchString})\n`;
};

/**
 * TODO
 * @param {*} block 
 * @returns 
 */
Blockly.Python["ask_wikipedia"] = function (block) {
  var searchString =
    Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_ATOMIC) ||
    "''";
  var language = cookies.get("pepper_language");
  return `pep_controller.change_language("${language}")\nweb_controller.ask_wikipedia(${searchString})\n`;
};

/**
 * TODO
 * @param {*} block
 * @returns
 */
Blockly.Python["play_rock_paper_scissors"] = function (block) {
  var language = cookies.get("pepper_language");
  return `rps_controller.play_rps("${language}")\n`;
};

/**
 *
 * @param {*} block
 * @returns duration to do a task in a miscBlock, inside given range
 */
function getDuration(block) {
  var duration =
    Blockly.Python.valueToCode(
      block,
      "DURATION",
      Blockly.Python.ORDER_ATOMIC
    ) || "0";
  if (duration > 60) {
    duration = 60;
  } else if (duration < 1) {
    duration = 1;
  }
  return duration;
}
