import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["rotate_eyes"] = function (block) {
  var rgb = block.getFieldValue("rgb");
  return `PepperExpression.rotate_eyes(${String(rgb)})\n`;
};

Blockly.Python["fade_eyes"] = function (block) {
  var rgb = block.getFieldValue("rgb");
  var duration = block.getFieldValue("duration");
  return (
    "PepperExpression.fade_eyes(" +
    String(rgb) +
    "," +
    String(duration) +
    ")" +
    "\n"
  );
};

//TODO
Blockly.Python["close_eyes"] = function (block) {
  return `PepperExpression.close_eyes()\n`;
};

//TODO
Blockly.Python["open_eyes"] = function (block) {
  return `PepperExpression.open_eyes()\n`;
};

//TODO
Blockly.Python["blink_eyes"] = function (block) {
  var duration = "TODO"; //TODO
  return `PepperExpression.blink_eyes(${String(duration)})\n`;
};

//TODO
Blockly.Python["random_eyes"] = function (block) {
  var duration = "TODO"; //TODO
  return `PepperExpression.random_eyes(${String(duration)})\n`;
};
