import * as Blockly from "blockly/core";
import "blockly/python";

/**
 * @head_gesture
 *
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
  return `head_ges.move_head(${yaw}, ${String(degrees)}, ${String(speed)})\n`;
};

Blockly.Python["move_head_up_down"] = function (block) {
  var yaw = "False";
  var degrees = getAngle(block);

  if (degrees > 20.5) {
    degrees = 20.5;
  } else if (degrees < -40.5) {
    degrees = -40.5;
  }

  var speed = getSpeed(block);
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
  var duration = getDuration(block);
  return `head_ges.spin_head(${duration})\n`;
};

/**
 * @arm_gesture
 *
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
 * @translation
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
  return `pep_move.move(${String(x)}, ${String(y)}, ${String(
    degrees
  )}, ${String(duration)})\n`;
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
    Blockly.Python.valueToCode(block, "DEGREES", Blockly.Python.ORDER_NONE) ||
    "0";
  return angle;
}

function getSpeed(block) {
  var speed =
    Blockly.Python.valueToCode(block, "SPEED", Blockly.Python.ORDER_NONE) ||
    "0";
  if (speed > 100) {
    speed = 100;
  } else if (speed < 0) {
    speed = 0;
  }
  return speed;
}

function get2DSpeed(block, param) {
  var speed =
    Blockly.Python.valueToCode(block, param, Blockly.Python.ORDER_NONE) || "0";
  if (speed > 100) {
    speed = 100;
  } else if (speed < -100) {
    speed = -100;
  }
  return speed;
}

function getDuration(block) {
  var duration =
    Blockly.Python.valueToCode(block, "DURATION", Blockly.Python.ORDER_NONE) ||
    "0";
  if (duration > 60) {
    duration = 60;
  } else if (duration < 1) {
    duration = 1;
  }
  return duration;
}
