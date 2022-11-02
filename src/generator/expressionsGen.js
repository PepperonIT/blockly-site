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
  return `PepperExpression.rotate_eyes(${String(rgb)},${String(duration)})`
};

Blockly.Python["fade_eyes"] = function (block) {
  var rgb = block.getFieldValue("rgb");
  var duration = block.getFieldValue("duration");
  return `PepperExpression.fade_eyes(${String(rgb)},${String(duration)})`
};

Blockly.Python["angry_eyes"] = function (block) {
  return `PepperExpression.angry_eyes()`;
};

Blockly.Python["sad_eyes"] = function (block) {
  return `PepperExpression.sad_eyes()`;
};

Blockly.Python["blink_eyes"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `PepperExpression.blink_eyes(${String(duration)})`;
};

Blockly.Python["squint_eyes"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `PepperExpression.squint_eyes(${String(duration)})`;
};

Blockly.Python["random_eyes"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `PepperExpression.random_eyes(${String(duration)})`;
};

Blockly.Python["wink_eye"] = function (block) {
  var eye = block.getFieldValue("eye");
  return `PepperExpression.wink_eye(${String(eye)})`;
};