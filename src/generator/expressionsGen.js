import * as Blockly from "blockly/core";
import "blockly/python";
import "@blockly/field-slider";

/**
 *
 * TODO: remove all /n in the return statments
 *
 * */

Blockly.Python["rotate_eyes"] = function (block) {
  var rgb =
    Blockly.Python.valueToCode(block, "COLOUR", Blockly.Python.ORDER_ATOMIC) ||
    "''";
  var duration = Blockly.Python.statementToCode(block, "DURATION");
  return `pep_expr.rotate_eyes(${String(rgb)},${String(duration)})\n`;
};

Blockly.Python["fade_eyes"] = function (block) {
  var rgb =
    Blockly.Python.valueToCode(block, "COLOUR", Blockly.Python.ORDER_ATOMIC) ||
    "''";
  var duration = Blockly.Python.statementToCode(block, "DURATION");
  return `pep_expr.fade_eyes(${String(rgb)},${String(duration)})\n`;
};

Blockly.Python["angry_eyes"] = function (block) {
  return `pep_expr.angry_eyes()\n`;
};

Blockly.Python["sad_eyes"] = function (block) {
  return `pep_expr.sad_eyes()\n`;
};

Blockly.Python["blink_eyes"] = function (block) {
  var duration = Blockly.Python.statementToCode(block, "DURATION");
  return `pep_expr.blink_eyes(${String(duration)})\n`;
};

Blockly.Python["squint_eyes"] = function (block) {
  var duration = Blockly.Python.statementToCode(block, "DURATION");
  return `pep_expr.squint_eyes(${String(duration)})\n`;
};

Blockly.Python["random_eyes"] = function (block) {
  var duration = Blockly.Python.statementToCode(block, "DURATION");
  return `pep_expr.random_eyes(${String(duration)})\n`;
};

Blockly.Python["wink_eye"] = function (block) {
  var eye = block.getFieldValue("eye");
  return `pep_expr.wink_eye(${String(eye)})\n`;
};
