import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["say"] = function (block) {
  var text = block.getField("TEXT");
  //   console.log(block);
  return `pep_speech.talk("${String(text)}")\n`;
};
