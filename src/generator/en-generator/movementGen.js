import * as Blockly from "blockly/core";
import "blockly/python";

/**
 * @head_gesture
 *
 */

Blockly.Python["move_head_left_right_en"] = function (block) {
  var yaw = "True";
  var degrees = getAngle(block);
  var speed = getSpeed(block);
  return `head_ges.move_head(${yaw}, ${String(degrees)}, ${String(speed)})\n`;
};

Blockly.Python["move_head_up_down_en"] = function (block) {
  var yaw = "False";
  var degrees = block.getFieldValue("degrees");
  var speed = block.getFieldValue("speed");
  return `head_ges.move_head(${yaw}, ${String(degrees)}, ${String(speed)})\n`;
};

Blockly.Python["reset_head_en"] = function (block) {
  return `head_ges.reset_head()\n`;
};

Blockly.Python["nod_head_en"] = function (block) {
  return `head_ges.nod_head()\n`;
};

Blockly.Python["shake_head_en"] = function (block) {
  return `head_ges.shake_head()\n`;
};

Blockly.Python["spin_head_en"] = function (block) {
  var duration = block.getFieldValue("duration");
  return `head_ges.spin_head(${duration})\n`;
};

/**
 * @arm_gesture
 *
 */

Blockly.Python["rotate_left_shoulder_roll_en"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_left_shoulder_roll(${speed},${angle})\n`;
};

Blockly.Python["rotate_left_shoulder_pitch_en"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_left_shoulder_pitch(${speed},${angle})\n`;
};

Blockly.Python["rotate_left_elbow_roll_en"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_left_elbow_roll(${speed},${angle})\n`;
};

Blockly.Python["rotate_right_shoulder_roll_en"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_right_shoulder_roll(${speed},${angle})\n`;
};

Blockly.Python["rotate_right_shoulder_pitch_en"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_right_shoulder_pitch(${speed},${angle})\n`;
};

Blockly.Python["rotate_right_elbow_roll_en"] = function (block) {
  var speed = block.getFieldValue("speed");
  var angle = block.getFieldValue("angle");
  return `arm_ges.rotate_right_elbow_roll(${speed},${angle})\n`;
};

/**
 * @translation
 */

Blockly.Python["move_pepper_en"] = function (block) {
  var x = block.getFieldValue("x");
  var y = block.getFieldValue("y");
  var angle = block.getFieldValue("angle");
  var duration = block.getFieldValue("duration");
  return `pep_move.move(${String(x)}, ${String(y)}, ${String(angle)}, ${String(
    duration
  )})\n`;
};

Blockly.Python["stop_movement_en"] = function (block) {
  return `pep_move.stop_movement()\n`;
};

/**
 * @dance
 */

Blockly.Python["dance_en"] = function (block) {
  return `comp_handler.dance()\n`;
};

Blockly.Python["ketchup_dance_en"] = function (block) {
  return `comp_handler.ketchup_arms()\n`;
};

Blockly.Python["robot_dance_en"] = function (block) {
  return `comp_handler.robot_arms()\n`;
};

function getAngle(block) {
  var angle =
    Blockly.Python.valueToCode(
      block,
      "DEGREES",
      Blockly.Python.ORDER_ATOMIC
    ) || "0";
  if (angle > 119.5) {
    angle = 119.5;
  } else if (angle < -119.5) {
    angle = -119.5;
  }

  if (angle > 119.5) {
    angle = 119.5;
  } else if (angle < -119.5) {
    angle = -119.5;
  }

  return angle;
}

function getSpeed(block) {
  var speed =
    Blockly.Python.valueToCode(
      block,
      "SPEED",
      Blockly.Python.ORDER_ATOMIC
    ) || "0";
  if (speed > 100) {
    speed = 100;
  } else if (speed < 0) {
    speed = 0;
  }

  if (speed > 100) {
    speed = 100;
  } else if (speed < 0) {
    speed = 0;
  }
  return speed;
}
