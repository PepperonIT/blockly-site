import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["rotate_eyes"] = function (block) {
  var rgb = block.getFieldValue("rgb");
  return `PepperExpression.rotate_eyes(${String(rgb)})\n`;
};

Blockly.Python["fade_eyes"] = function (block) {
  var rgb = block.getFieldValue("rgb");
  var duration = block.getFieldValue("duration");
  return `PepperExpression.fade_eyes(${String(rgb)},${String(duration)})\n`
};

Blockly.Python["angry_eyes"] = function (block) {
  return `PepperExpression.angry_eyes()\n`;
};

Blockly.Python["sad_eyes"] = function (block) {
  return `PepperExpression.sad_eyes()\n`;
};

Blockly.Python["blink_eyes"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `PepperExpression.blink_eyes(${String(duration)})\n`;
};

Blockly.Python["squint_eyes"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `PepperExpression.squint_eyes(${String(duration)})\n`;
};

Blockly.Python["random_eyes"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `PepperExpression.random_eyes(${String(duration)})\n`;
};
