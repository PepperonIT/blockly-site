import * as Blockly from "blockly/core";
import "blockly/python";
/*
*TODO: this code isn't the best code find alt. for it here or in
*movementBlocks.js var moveHead 
*/
Blockly.Python["move_head"] = function (block) {
    var yaw = block.getFieldValue("yaw");
    var degrees = block.getFieldValue("degrees");
    if (yaw === "False"){
        if (degrees < -40.5){
            degrees = -40.5
        }
        else if (degrees > 20.5){
            degrees = 20.5
        }
    }
    var duration = block.getFieldValue("duration")
    return `Gesture.move_head(${String(yaw)}, ${String(degrees)}, ${String(duration)})\n`;
  };