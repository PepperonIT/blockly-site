import * as Blockly from "blockly/core";
import "blockly/python";


/**
 * @head_gesture
 * 
 */

Blockly.Python["move_head_left_right"] = function (block) {
    var yaw = "True";
    var degrees = block.getFieldValue("degrees");
    var speed = block.getFieldValue("speed")
    return `head_ges.move_head(${yaw}, ${String(degrees)}, ${String(speed)})\n`;
  };


Blockly.Python["move_head_up_down"] = function (block) {
    var yaw = "False";
    var degrees = block.getFieldValue("degrees");
    var speed = block.getFieldValue("speed")
    return `head_ges.move_head(${yaw}, ${String(degrees)}, ${String(speed)})\n`;
};

Blockly.Python["reset_head"] = function (block) {
    return `head_ges.reset_head()\n`;
};

Blockly.Python["nod_head"] = function (block) {
    return `head_ges.nod_head()\n`;
};

Blockly.Python["shake_head"] = function (block) {
    return `head_ges.shake_head()\n`;
};

Blockly.Python["spin_head"] = function (block) {
    var duration = block.getFieldValue("duration")
    return `head_ges.spin_head(${duration})\n`;
};

/**
 * @arm_gesture
 * 
 */

 Blockly.Python["rotate_left_shoulder_roll"] = function (block) {
    var speed = block.getFieldValue("speed")
    var angle = block.getFieldValue("angle")
    return `arm_ges.rotate_left_shoulder_roll(${speed},${angle})\n`;
};

Blockly.Python["rotate_left_shoulder_pitch"] = function (block) {
    var speed = block.getFieldValue("speed")
    var angle = block.getFieldValue("angle")
    return `arm_ges.rotate_left_shoulder_pitch(${speed},${angle})\n`;
};

Blockly.Python["rotate_left_elbow_roll"] = function (block) {
    var speed = block.getFieldValue("speed")
    var angle = block.getFieldValue("angle")
    return `arm_ges.rotate_left_elbow_roll(${speed},${angle})\n`;
};

Blockly.Python["rotate_right_shoulder_roll"] = function (block) {
    var speed = block.getFieldValue("speed")
    var angle = block.getFieldValue("angle")
    return `arm_ges.rotate_right_shoulder_roll(${speed},${angle})\n`;
};

Blockly.Python["rotate_right_shoulder_pitch"] = function (block) {
    var speed = block.getFieldValue("speed")
    var angle = block.getFieldValue("angle")
    return `arm_ges.rotate_right_shoulder_pitch(${speed},${angle})\n`;
};

Blockly.Python["rotate_right_elbow_roll"] = function (block) {
    var speed = block.getFieldValue("speed")
    var angle = block.getFieldValue("angle")
    return `arm_ges.rotate_right_elbow_roll(${speed},${angle})\n`;
};





/**
 * @translation
 */

 Blockly.Python["move_pepper"] = function (block) {
    var x = block.getFieldValue("x")/100;
    var y = block.getFieldValue("y")/100;
    var angle = block.getFieldValue("angle")/10;
    var duration = block.getFieldValue("duration")
    return `pep_move.move(${String(x)},${String(y)}, ${String(angle)}, ${String(duration)})\n`;
};

Blockly.Python["stop_movement"] = function (block) {
    return `pep_move.stop_movement()\n`;
};
