import * as Blockly from "blockly/core";
import "blockly/python";

/**
 * 
 * TODO: remove all /n in the return statments
 * 
 * */


/**
 * @gesture
 * 
 */

Blockly.Python["move_head_left_right"] = function (block) {
    var yaw = "True";
    var degrees = block.getFieldValue("degrees");
    var speed = block.getFieldValue("speed")
    return `Gesture.move_head(${yaw}, ${String(degrees)}, ${String(speed)})\n`;
  };


Blockly.Python["move_head_up_down"] = function (block) {
    var yaw = "False";
    var degrees = block.getFieldValue("degrees");
    var speed = block.getFieldValue("speed")
    return `Gesture.move_head(${yaw}, ${String(degrees)}, ${String(speed)})\n`;
};

Blockly.Python["reset_head"] = function (block) {
    return `Gesture.reset_head()\n`;
};

Blockly.Python["nod_head"] = function (block) {
    return `Gesture.nod_head()\n`;
};

Blockly.Python["shake_head"] = function (block) {
    return `Gesture.shake_head()\n`;
};

Blockly.Python["spin_head"] = function (block) {
    var duration = block.getFieldValue("duration")
    return `Gesture.spin_head(${duration})\n`;
};

/**
 * @translation
 */

 Blockly.Python["move_pepper"] = function (block) {
    var x = block.getFieldValue("x")/100;
    var y = block.getFieldValue("y")/100;
    var angle = block.getFieldValue("angle")/10;
    var duration = block.getFieldValue("duration")
    return `Gesture.move(${String(x)},${String(y)}, ${String(angle)}, ${String(duration)})\n`;
};

Blockly.Python["stop_movement"] = function (block) {
    return `Gesture.stop_movement()\n`;
};
