import * as Blockly from "blockly/core";
import "blockly/python";

/**
 *
 * @param {*} block
 * @returns Python code that moves Peppers head left/right
 */
Blockly.Python["move_head_left_right"] = function (block) {
  var yaw = "True";
  var degrees = getAngle(block);

  if (degrees > 119.5) {
    degrees = 119.5;
  } else if (degrees < -119.5) {
    degrees = -119.5;
  }

  var speed = getSpeed(block);
  return `head_ges.move_head(${yaw}, ${degrees}, ${speed})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that moves Peppers head up/down
 */
Blockly.Python["move_head_up_down"] = function (block) {
  var yaw = "False";
  var degrees = getAngle(block);

  if (degrees > 20.5) {
    degrees = 20.5;
  } else if (degrees < -40.5) {
    degrees = -40.5;
  }

  var speed = getSpeed(block);
  return `head_ges.move_head(${yaw}, ${degrees}, ${speed})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that returns Peppers head into default position
 */
Blockly.Python["reset_head"] = function (block) {
  return `head_ges.reset_head()\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that instructs Pepper to nod her head
 */
Blockly.Python["nod_head"] = function (block) {
  return `head_ges.nod_head()\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that instructs Pepper to shake her head
 */
Blockly.Python["shake_head"] = function (block) {
  return `head_ges.shake_head()\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that instructs Pepper to spin her head
 */
Blockly.Python["spin_head"] = function (block) {
  var duration = getDuration(block);
  return `head_ges.spin_head(${duration})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that rotates Peppers left shoulder's roll
 */
Blockly.Python["rotate_left_shoulder_roll"] = function (block) {
  var degrees = getAngle(block);

  if (degrees > 119.5) {
    degrees = 119.5;
  } else if (degrees < -119.5) {
    degrees = -119.5;
  }

  var speed = getSpeed(block);
  return `arm_ges.rotate_left_shoulder_roll(${speed},${degrees})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that rotates Peppers left shoulder's pitch
 */
Blockly.Python["rotate_left_shoulder_pitch"] = function (block) {
  var degrees = getAngle(block);

  if (degrees > 89.5) {
    degrees = 89.5;
  } else if (degrees < 0.5) {
    degrees = 0.5;
  }

  var speed = getSpeed(block);
  return `arm_ges.rotate_left_shoulder_pitch(${speed},${degrees})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that rotates Peppers left elbow
 */
Blockly.Python["rotate_left_elbow_roll"] = function (block) {
  var degrees = getAngle(block);

  if (degrees > -0.5) {
    degrees = -0.5;
  } else if (degrees < -89.5) {
    degrees = -89.5;
  }

  var speed = getSpeed(block);
  return `arm_ges.rotate_left_elbow_roll(${speed},${degrees})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that rotates Peppers right shoulder's roll
 */
Blockly.Python["rotate_right_shoulder_roll"] = function (block) {
  var degrees = getAngle(block);

  if (degrees > -0.5) {
    degrees = -0.5;
  } else if (degrees < -89.5) {
    degrees = -89.5;
  }

  var speed = getSpeed(block);
  return `arm_ges.rotate_right_shoulder_roll(${speed},${degrees})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that rotates Peppers roght shoulder's pitch
 */
Blockly.Python["rotate_right_shoulder_pitch"] = function (block) {
  var degrees = getAngle(block);

  if (degrees > 119.5) {
    degrees = 119.5;
  } else if (degrees < -119.5) {
    degrees = -119.5;
  }

  var speed = getSpeed(block);
  return `arm_ges.rotate_right_shoulder_pitch(${speed},${degrees})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that rotates Peppers right elbow
 */
Blockly.Python["rotate_right_elbow_roll"] = function (block) {
  var degrees = getAngle(block);

  if (degrees > 89.5) {
    degrees = 89.5;
  } else if (degrees < 0.5) {
    degrees = 0.5;
  }

  var speed = getSpeed(block);
  return `arm_ges.rotate_right_elbow_roll(${speed},${degrees})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that moves Pepper in a given direction with given speed and rotation
 */
Blockly.Python["move_pepper"] = function (block) {
  var x = get2DSpeed(block, "X");
  var y = get2DSpeed(block, "Y");

  var degrees = getAngle(block);

  if (degrees > 100) {
    degrees = 100;
  } else if (degrees < -100) {
    degrees = -100;
  }

  var duration = getDuration(block);
  return `pep_move.move(${x}, ${y}, ${degrees}, ${duration})\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that stops all movement and threads running
 */
Blockly.Python["stop_movement"] = function (block) {
  return `pep_move.stop_movement()\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that make Pepper dance
 */
Blockly.Python["dance"] = function (block) {
  return `comp_handler.dance()\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that make Pepper do the ketchup dance
 */
Blockly.Python["ketchup_dance"] = function (block) {
  return `comp_handler.ketchup_arms()\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that make Pepper do the robot dance
 */
Blockly.Python["robot_dance"] = function (block) {
  return `comp_handler.robot_arms()\n`;
};

/**
 *
 * @param {*} block
 * @returns Python code that make Pepper do the macarena dance
 */
Blockly.Python["macarena_dance"] = function (block) {
  return `comp_handler.macarena_dance()\n`;
};

/**
 *
 * @param {*} block
 * @returns The angle of either the input from a Block, Field or variable
 */
function getAngle(block) {
  var angle =
    Blockly.Python.valueToCode(block, "DEGREES", Blockly.Python.ORDER_ATOMIC) ||
    "0";
  return angle;
}

/**
 *
 * @param {*} block
 * @returns The speed of either the input from a Block, Field or variable
 */
function getSpeed(block) {
  var speed =
    Blockly.Python.valueToCode(block, "SPEED", Blockly.Python.ORDER_ATOMIC) ||
    "0";
  if (speed > 100) {
    speed = 100;
  } else if (speed < 0) {
    speed = 0;
  }
  return speed;
}

/**
 *
 * @param {*} block
 * @returns The speed of either the input from a Block, Field or variable,
 * can be negative for both directions
 */
function get2DSpeed(block, param) {
  var speed =
    Blockly.Python.valueToCode(block, param, Blockly.Python.ORDER_ATOMIC) || "0";
  if (speed > 100) {
    speed = 100;
  } else if (speed < -100) {
    speed = -100;
  }
  return speed;
}

/**
 *
 * @param {*} block
 * @returns The duration of either the input from a Block, Field or variable
 */
function getDuration(block) {
  var duration =
    Blockly.Python.valueToCode(block, "DURATION", Blockly.Python.ORDER_ATOMIC) ||
    "0";
  if (duration > 60) {
    duration = 60;
  } else if (duration < 1) {
    duration = 1;
  }
  return duration;
}
