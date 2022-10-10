import * as Blockly from "blockly/core";
import "blockly/python";


/**
 * gesture
 */


//TODO
 Blockly.Python["move_head"] = function (block) {
    var yaw = "True OR False" //TODO
    var degrees = "Number?? NOT SURE HERE" //TODO 
    var speed = "Int between (0 and 100)" //TODO
    return `Gesture.move_head(${String(yaw)},${String(degrees)},${String(speed)} )\n`;
  };
