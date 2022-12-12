import * as Blockly from "blockly/core";
import "blockly/python";

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
Blockly.Python["search_picture"] = function (block) {
  var searchString =
    Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_ATOMIC) ||
    "''";
  return `XXXXXXXXXXX(${searchString})\n`;
};

/**
 * TODO
 * @param {*} block
 * @returns
 */
Blockly.Python["play_rock_paper_scissors"] = function (block) {
  return `XXXXXXXXXXX()\n`;
};

/**
 *
 * @param {*} block
 * @returns duration to do a task in a miscBlock, inside given range
 */
function getDuration(block) {
  var duration =
    Blockly.Python.valueToCode(block, "DURATION", Blockly.Python.ORDER_ATOMIC) ||
    "0";
  if (duration > 60) {
    duration = 60;
  } else if (duration < 1) {
    duration = 1;
  }
  return duration;
}
