import * as Blockly from "blockly/core";
import "blockly/python";

/**
 * 
 * TODO: remove all /n in the return statments
 * 
 * */

Blockly.Python["rotate_eyes"] = function (block) {
  var rgb = block.getFieldValue("rgb");
  var duration = block.getFieldValue("duration");
  return `pep_expr.rotate_eyes(${String(rgb)},${String(duration)})\n`
};

Blockly.Python["fade_eyes"] = function (block) {
  var rgb = block.getFieldValue("rgb");
  var duration = block.getFieldValue("duration");
  return `pep_expr.fade_eyes(${String(rgb)},${String(duration)})\n`
};

Blockly.Python["angry_eyes"] = function (block) {
  return `pep_expr.angry_eyes()\n`;
};

Blockly.Python["sad_eyes"] = function (block) {
  return `pep_expr.sad_eyes()\n`;
};

Blockly.Python["blink_eyes"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `pep_expr.blink_eyes(${String(duration)})\n`;
};

Blockly.Python["squint_eyes"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `pep_expr.squint_eyes(${String(duration)})\n`;
};

Blockly.Python["random_eyes"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `pep_expr.random_eyes(${String(duration)})\n`;
};

Blockly.Python["wink_eye"] = function (block) {
  var eye = block.getFieldValue("eye");
  return `pep_expr.wink_eye(${String(eye)})\n`;
};