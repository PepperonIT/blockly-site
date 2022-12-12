import * as Blockly from "blockly/core";
import "blockly/python";
import "@blockly/field-slider";

/**
 *
 * @param {*} block
 * @returns Python code that rotates Peppers eyes
 */
Blockly.Python["rotate_eyes"] = function (block) {
  var rgb =
    Blockly.Python.valueToCode(block, "COLOUR", Blockly.Python.ORDER_ATOMIC) ||
    "";
  rgb = rgb.replaceAll('\'', '');
  var duration = getDuration(block);
  return `pep_expr.rotate_eyes(${rgb},${duration})\n`
};

/**
 *
 * @param {*} block
 * @returns Python code that fades Peppers eyes
 */
Blockly.Python["fade_eyes"] = function (block) {
  var rgb =
    Blockly.Python.valueToCode(block, "COLOUR", Blockly.Python.ORDER_ATOMIC) ||
    "";
  rgb = rgb.replaceAll('\'', '');
  var duration = getDuration(block);
  return `pep_expr.fade_eyes(${rgb},${duration})\n`
};

/**
 *
 * @param {*} block
 * @returns Python code that turns Peppers eyes red
 */
Blockly.Python["angry_eyes"] = function (block) {
  return `pep_expr.angry_eyes()\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that turns Peppers eyes blue
 */
Blockly.Python["sad_eyes"] = function (block) {
  return `pep_expr.sad_eyes()\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that blink Peppers eyes
 */
Blockly.Python["blink_eyes"] = function (block) {
  var duration = getDuration(block);
  return `pep_expr.blink_eyes(${duration})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that squint Peppers eyes
 */
Blockly.Python["squint_eyes"] = function (block) {
  var duration = getDuration(block);
  return `pep_expr.squint_eyes(${duration})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that do randomized eye expression on Pepper
 */
Blockly.Python["random_eyes"] = function (block) {
  var duration = getDuration(block);
  return `pep_expr.random_eyes(${duration})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that winks one of Peppers eyes
 */
Blockly.Python["wink_eye"] = function (block) {
  var eye = block.getFieldValue("eye");
  return `pep_expr.wink_eye(${eye})\n`;
};

/**
 *
 * @param {*} block
 * @returns duration to do a task in an expressionBlock, inside given range
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
