import * as Blockly from "blockly/core";
import "../../fields/BlocklyReactField";
import "../../fields/DateField"
import "@blockly/field-date";

const MoveHeadColour = 40;
const MoveArmsColour = 80;
const MovePepperColour = 140;

/**
 * @head_gesture
 *
 */

var moveHeadLeftRight = {
  type: "move_head_left_right",
  message0: "Rör huvudet (vänster, höger) (grader %1 fart %2)",
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

Blockly.Blocks["move_head_left_right"] = {
  init: function () {
    this.jsonInit(moveHeadLeftRight);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var moveHeadUpDown = {
  type: "move_head_up_down",
  message0: "Rör huvudet (upp, ner) (grader %1 fart %2)",
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

Blockly.Blocks["move_head_up_down"] = {
  init: function () {
    this.jsonInit(moveHeadUpDown);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var resetHead = {
  type: "reset_head",
  message0: "Återställ huvudet",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["reset_head"] = {
  init: function () {
    this.jsonInit(resetHead);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var nodHead = {
  type: "nod_head",
  message0: "Nicka huvudet",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["nod_head"] = {
  init: function () {
    this.jsonInit(nodHead);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var shakeHead = {
  type: "shake_head",
  message0: "Skaka huvudet",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["shake_head"] = {
  init: function () {
    this.jsonInit(shakeHead);
    this.setStyle("loop_blocks");
    this.setColour(MoveHeadColour);
  },
};

var spinHead = {
  type: "spin_head",
  message0: "Snurra huvudet (tid:%1 s)",
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

Blockly.Blocks["spin_head"] = {
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
  type: "rotate_left_shoulder_roll",
  message0: "Rotera vänster axel (rulla) (fart %1 vinkel %2)",
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

Blockly.Blocks["rotate_left_shoulder_roll"] = {
  init: function () {
    this.jsonInit(rotateLeftShoulderRoll);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateLeftShoulderPitch = {
  type: "rotate_left_shoulder_pitch",
  message0: "Rotera vänster axel (upp och ner) (fart %1 vinkel %2)",
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

Blockly.Blocks["rotate_left_shoulder_pitch"] = {
  init: function () {
    this.jsonInit(rotateLeftShoulderPitch);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateLeftElbowRoll = {
  type: "rotate_left_elbow_roll",
  message0: "rotera vänster armbåge (rulla) (fart %1 vinkel %2)",
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

Blockly.Blocks["rotate_left_elbow_roll"] = {
  init: function () {
    this.jsonInit(rotateLeftElbowRoll);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateRightShoulderRoll = {
  type: "rotate_right_shoulder_roll",
  message0: "Rotera höger axel (rulla) (fart %1 vinkel %2)",
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

Blockly.Blocks["rotate_right_shoulder_roll"] = {
  init: function () {
    this.jsonInit(rotateRightShoulderRoll);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateRightShoulderPitch = {
  type: "rotate_right_shoulder_pitch",
  message0: "Rotera höger axel (upp och ner) (fart %1 vinkel %2)",
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

Blockly.Blocks["rotate_right_shoulder_pitch"] = {
  init: function () {
    this.jsonInit(rotateRightShoulderPitch);
    this.setStyle("loop_blocks");
    this.setColour(MoveArmsColour);
  },
};

var rotateRightElbowRoll = {
  type: "rotate_right_elbow_roll",
  message0: "Rotera höger armbåge (rulla) (fart %1 vinkel %2)",
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

Blockly.Blocks["rotate_right_elbow_roll"] = {
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
  type: "move_pepper",
  message0:
    "Flytta Pepper (bakåt,framåt): %1 (vänster,höger): %2 rotera: %3 tid: %4 s",
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

Blockly.Blocks["move_pepper"] = {
  init: function () {
    this.jsonInit(movePepper);
    this.setStyle("loop_blocks");
    this.setColour(MovePepperColour);
  },
};

var stopMovement = {
  type: "stop_movement",
  message0: "Stoppa rörelsen",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["stop_movement"] = {
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
  type: "dance",
  message0: "dansa",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["dance"] = {
  init: function () {
    this.jsonInit(dance);
    this.setStyle("loop_blocks");
    this.setColour(MovePepperColour);
  },
};

var ketchupDance = {
  type: "ketchup_dance",
  message0: "ketchupdansen",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["ketchup_dance"] = {
  init: function () {
    this.jsonInit(ketchupDance);
    this.setStyle("loop_blocks");
    this.setColour(MovePepperColour);
  },
};

var robotDance = {
  type: "robot_dance",
  message0: "Robotdans",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["robot_dance"] = {
  init: function () {
    this.jsonInit(robotDance);
    this.setStyle("loop_blocks");
    this.setColour(MovePepperColour);
  },
};