import * as Blockly from "blockly/core";
import "blockly/python";

/**
 * @head_gesture
 *
 */

Blockly.Python["move_head_left_right"] = function (block) {
  var yaw = "True";
  var degrees = getAngle(block);
  var speed = getSpeed(block);
  return `head_ges.move_head(${yaw}, ${String(degrees)}, ${String(speed)})\n`;
};

Blockly.Python["move_head_up_down"] = function (block) {
  var yaw = "False";
  var degrees = block.getFieldValue("degrees");
  var speed = block.getFieldValue("speed");
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
  var duration = block.getFieldValue("duration");
  return `head_ges.spin_head(${duration})\n`;
};

/**
 * @arm_gesture
 *
 */

Blockly.Python["rotate_left_shoulder_roll"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_left_shoulder_roll(${speed},${angle})\n`;
};

Blockly.Python["rotate_left_shoulder_pitch"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_left_shoulder_pitch(${speed},${angle})\n`;
};

Blockly.Python["rotate_left_elbow_roll"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_left_elbow_roll(${speed},${angle})\n`;
};

Blockly.Python["rotate_right_shoulder_roll"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_right_shoulder_roll(${speed},${angle})\n`;
};

Blockly.Python["rotate_right_shoulder_pitch"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_right_shoulder_pitch(${speed},${angle})\n`;
};

Blockly.Python["rotate_right_elbow_roll"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_right_elbow_roll(${speed},${angle})\n`;
};

/**
 * @translation
 */

Blockly.Python["move_pepper"] = function (block) {
  var x = block.getFieldValue("x");
  var y = block.getFieldValue("y");
  var angle = block.getFieldValue("angle");
  var duration = block.getFieldValue("duration");
  return `pep_move.move(${String(x)}, ${String(y)}, ${String(angle)}, ${String(
    duration
  )})\n`;
};

Blockly.Python["stop_movement"] = function (block) {
  return `pep_move.stop_movement()\n`;
};

/**
 * @dance
 */

Blockly.Python["dance"] = function (block) {
  return `comp_handler.dance()\n`;
};

Blockly.Python["ketchup_dance"] = function (block) {
  return `comp_handler.ketchup_arms()\n`;
};

Blockly.Python["robot_dance"] = function (block) {
  return `comp_handler.robot_arms()\n`;
};

function getAngle(block) {
  var angle =
    Blockly.Python.valueToCode(
      block,
      "DURATION",
      Blockly.Python.ORDER_ATOMIC
    ) || "0";
  if (angle > 119.5) {
    angle = 119.5;
  } else if (angle < -119.5) {
    angle = -119.5;
  }

  if (Blockly.Python.FieldVariable.getValue() > 119.5) {
    angle = 119.5;
  } else if (Blockly.Python.FieldVariable.getValue() < -119.5) {
    angle = -119.5;
  }

  return angle;
}

function getSpeed(block) {
  var speed =
    Blockly.Python.valueToCode(
      block,
      "DURATION",
      Blockly.Python.ORDER_ATOMIC
    ) || "0";
  if (speed > 100) {
    speed = 100;
  } else if (speed < 0) {
    speed = 0;
  }

  if (Blockly.Python.FieldVariable.getValue() > 100) {
    speed = 100;
  } else if (Blockly.Python.FieldVariable.getValue() < 0) {
    speed = 0;
  }
  return speed;
}
