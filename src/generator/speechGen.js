import * as Blockly from "blockly/core";
import "blockly/python";



Blockly.Python["say"] = function (block) {
    var text = block.getFieldValue("text");
    return `PepperSpeech.talk(${String(text)})`;
};