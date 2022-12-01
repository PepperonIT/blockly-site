import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["wait_en"] = function (block) {
  var duration = getDuration(block);
  return `time.sleep(${duration})\n`;
};

Blockly.Python["play_music_en"] = function (block) {
  var item =
    Blockly.Python.valueToCode(
      block,
      "FIELDNAME",
      Blockly.Python.ORDER_ATOMIC
    ) || "0";
  return `XXXXXXXXXXX(${item})\n`;
};

Blockly.Python["search_picture_en"] = function (block) {
  var searchString =
    Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_NONE) ||
    "''";
  return `XXXXXXXXXXX(${searchString})\n`;
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
