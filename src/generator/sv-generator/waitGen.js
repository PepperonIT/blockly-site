import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["wait"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `time.sleep(${duration})\n`;
};
