import * as Blockly from "blockly/core";
import "../../fields/BlocklyReactField";
import "../../fields/DateField";
import "@blockly/field-date";

const MoveHeadColour = 40;
const MoveArmsColour = 80;
const MovePepperColour = 140;

/**
 * @head_gesture
 *
 */

var moveHeadLeftRight = {
  type: "move_head_left_right_en",
  message0: "Move head (left, right) (degrees %1 speed %2)",
  args0: [
    {
      type: "input_value",
      name: "DEGREES",
      check: "Number",
    },
    {
      type: "input_value",
      name: "SPEED",
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["move_head_left_right_en"] = {
  init: function () {
    this.jsonInit(moveHeadLeftRight);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var moveHeadUpDown = {
  type: "move_head_up_down_en",
  message0: "Move head (up, down) (degrees %1 speed %2)",
  args0: [
    {
      type: "input_value",
      name: "DEGREES",
      check: "Number",
    },
    {
      type: "input_value",
      name: "SPEED",
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["move_head_up_down_en"] = {
  init: function () {
    this.jsonInit(moveHeadUpDown);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var resetHead = {
  type: "reset_head_en",
  message0: "Reset head",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["reset_head_en"] = {
  init: function () {
    this.jsonInit(resetHead);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var nodHead = {
  type: "nod_head_en",
  message0: "Nod head",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["nod_head_en"] = {
  init: function () {
    this.jsonInit(nodHead);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var shakeHead = {
  type: "shake_head_en",
  message0: "Shake head",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["shake_head_en"] = {
  init: function () {
    this.jsonInit(shakeHead);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var spinHead = {
  type: "spin_head_en",
  message0: "Spin head for %1 seconds",
  args0: [
    {
      type: "input_value",
      name: "DURATION",
      value: 1,
      min: 1,
      max: 60,
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["spin_head_en"] = {
  init: function () {
    this.jsonInit(spinHead);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

/**
 * @arm_gesture
 *
 */

var rotateLeftShoulderRoll = {
  type: "rotate_left_shoulder_roll_en",
  message0: "Rotate left shoulder (roll) (speed %1 angle %2)",
  args0: [
    {
      type: "input_value",
      name: "SPEED",
      value: 0,
      min: 0,
      max: 100,
      check: "Number",
    },
    {
      type: "input_value",
      name: "DEGREES",
      value: 0.5,
      min: 0.5,
      max: 89.5,
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["rotate_left_shoulder_roll_en"] = {
  init: function () {
    this.jsonInit(rotateLeftShoulderRoll);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateLeftShoulderPitch = {
  type: "rotate_left_shoulder_pitch_en",
  message0: "Rotate left shoulder (up and down) (speed %1 angle %2)",
  args0: [
    {
      type: "input_value",
      name: "SPEED",
      value: 0,
      min: 0,
      max: 100,
      check: "Number",
    },
    {
      type: "input_value",
      name: "DEGREES",
      value: 1,
      min: -119.5,
      max: 119.5,
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["rotate_left_shoulder_pitch_en"] = {
  init: function () {
    this.jsonInit(rotateLeftShoulderPitch);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateLeftElbowRoll = {
  type: "rotate_left_elbow_roll_en",
  message0: "Rotate left elbow (roll) (speed %1 angle %2)",
  args0: [
    {
      type: "input_value",
      name: "SPEED",
      value: 0,
      min: 0,
      max: 100,
      check: "Number",
    },
    {
      type: "input_value",
      name: "DEGREES",
      value: 1,
      max: -0.5,
      min: -89.5,
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["rotate_left_elbow_roll_en"] = {
  init: function () {
    this.jsonInit(rotateLeftElbowRoll);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateRightShoulderRoll = {
  type: "rotate_right_shoulder_roll_en",
  message0: "Rotate right axis (roll) (speed %1 angle %2)",
  args0: [
    {
      type: "input_value",
      name: "SPEED",
      value: 0,
      min: 0,
      max: 100,
      check: "Number",
    },
    {
      type: "input_value",
      name: "DEGREES",
      value: 1,
      max: -0.5,
      min: -89.5,
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["rotate_right_shoulder_roll_en"] = {
  init: function () {
    this.jsonInit(rotateRightShoulderRoll);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateRightShoulderPitch = {
  type: "rotate_right_shoulder_pitch_en",
  message0: "Rotate right shoulder (up and down) (speed %1 angle %2)",
  args0: [
    {
      type: "input_value",
      name: "SPEED",
      value: 0,
      min: 0,
      max: 100,
      check: "Number",
    },
    {
      type: "input_value",
      name: "DEGREES",
      value: 1,
      min: -119.5,
      max: 119.5,
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["rotate_right_shoulder_pitch_en"] = {
  init: function () {
    this.jsonInit(rotateRightShoulderPitch);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateRightElbowRoll = {
  type: "rotate_right_elbow_roll_en",
  message0: "Rotate right elbow (roll) (speed %1 angle %2)",
  args0: [
    {
      type: "input_value",
      name: "SPEED",
      value: 0,
      min: 0,
      max: 100,
      check: "Number",
    },
    {
      type: "input_value",
      name: "DEGREES",
      value: 0.5,
      min: 0.5,
      max: 89.5,
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["rotate_right_elbow_roll_en"] = {
  init: function () {
    this.jsonInit(rotateRightElbowRoll);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

/**
 * @translation
 */

var movePepper = {
  type: "move_pepper_en",
  message0:
    "Move Pepper (backward,forward): %1 (left,right): %2 rotate: %3 for %4 seconds",
  args0: [
    {
      type: "input_value",
      name: "X",
      value: 0,
      min: -100,
      max: 100,
      check: "Number",
    },
    {
      type: "input_value",
      name: "Y",
      value: 0,
      min: -100,
      max: 100,
      check: "Number",
    },
    {
      type: "input_value",
      name: "DEGREES",
      value: 0,
      min: -100,
      max: 100,
      check: "Number",
    },
    {
      type: "input_value",
      name: "DURATION",
      value: 0,
      min: 1,
      max: 60,
      check: "Number",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["move_pepper_en"] = {
  init: function () {
    this.jsonInit(movePepper);
    this.setStyle("loop_blocks");
    this.setColour(MovePepperColour);
  },
};

var stopMovement = {
  type: "stop_movement_en",
  message0: "Stop movement",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["stop_movement_en"] = {
  init: function () {
    this.jsonInit(stopMovement);
    this.setStyle("loop_blocks");
    this.setColour(MovePepperColour);
  },
};

/**
 * @ dance
 */

var dance = {
  type: "dance_en",
  message0: "Dance",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["dance_en"] = {
  init: function () {
    this.jsonInit(dance);
    this.setStyle("loop_blocks");
    this.setColour(MovePepperColour);
  },
};

var ketchupDance = {
  type: "ketchup_dance_en",
  message0: "Ketchup dance",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["ketchup_dance_en"] = {
  init: function () {
    this.jsonInit(ketchupDance);
    this.setStyle("loop_blocks");
    this.setColour(MovePepperColour);
  },
};

var robotDance = {
  type: "robot_dance_en",
  message0: "Robot dance",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["robot_dance_en"] = {
  init: function () {
    this.jsonInit(robotDance);
    this.setStyle("loop_blocks");
    this.setColour(MovePepperColour);
  },
};
