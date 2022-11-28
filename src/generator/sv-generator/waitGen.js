import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["wait"] = function (block) {
  var duration = getDuration(block);
  return `time.sleep(${duration})\n`;
};

function getDuration(block) {
  var duration =
    Blockly.Python.valueToCode(block, "DURATION", Blockly.Python.ORDER_NONE) ||
    "0";
  if (duration > 60) {
    duration = 60;
  } else if (duration < 1) {
    duration = 1;
  }
  return duration;
}
