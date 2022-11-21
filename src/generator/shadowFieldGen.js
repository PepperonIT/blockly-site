import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["number_constraint"] = function (block) {
  var value = block.getFieldValue("NUMBER");
  return `${String(value)}`;
};
