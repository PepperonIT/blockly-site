import * as Blockly from "blockly/core";
import Cookies from "universal-cookie";

const MoveHeadColour = 40;
const MoveArmsColour = 80;
const MovePepperColour = 140;

const cookies = new Cookies();
var BLOCK_STRINGS = {}; //Defines the text for each block

/**
 * @Swedish
 */
const SV_BLOCK_STRINGS = {
  move_head_left_right: "Rör huvudet (vänster, höger) (grader %1 fart %2)",
  move_head_up_down: "Rör huvudet (upp, ner) (grader %1 fart %2)",
  reset_head: "Återställ huvudet",
  nod_head: "Nicka huvudet",
  shake_head: "Skaka huvudet",
  spin_head: "Snurra huvudet i %1 sekunder",
  rotate_left_shoulder_roll: "Rotera vänster axel (rulla) (fart %1 vinkel %2)",
  rotate_left_shoulder_pitch:
    "Rotera vänster axel (upp och ner) (fart %1 vinkel %2)",
  rotate_left_elbow_roll: "Rotera vänster armbåge (rulla) (fart %1 vinkel %2)",
  rotate_right_shoulder_roll: "Rotera höger axel (rulla) (fart %1 vinkel %2)",
  rotate_right_shoulder_pitch:
    "Rotera höger axel (upp och ner) (fart %1 vinkel %2)",
  rotate_right_elbow_roll: "Rotera höger armbåge (rulla) (fart %1 vinkel %2)",
  move_pepper:
    "Flytta Pepper (bakåt,framåt): %1 (vänster,höger): %2 rotera: %3 tid: %4 s",
  stop_movement: "Stoppa rörelsen",
  dance: "Dansa",
  ketchup_dance: "Ketchupdansen",
  robot_dance: "Robotdansen",
};

/**
 * @English
 */
const EN_BLOCK_STRINGS = {
  move_head_left_right: "Move head (left, right) (degrees %1 speed %2)",
  move_head_up_down: "Move head (up, down) (degrees %1 speed %2)",
  reset_head: "Reset head",
  nod_head: "Nod head",
  shake_head: "Shake head",
  spin_head: "Spin head for %1 seconds",
  rotate_left_shoulder_roll: "Rotate left shoulder (roll) (speed %1 angle %2)",
  rotate_left_shoulder_pitch:
    "Rotate left shoulder (up and down) (speed %1 angle %2)",
  rotate_left_elbow_roll: "Rotate left elbow (roll) (speed %1 angle %2)",
  rotate_right_shoulder_roll: "Rotate right axis (roll) (speed %1 angle %2)",
  rotate_right_shoulder_pitch:
    "Rotate right shoulder (up and down) (speed %1 angle %2)",
  rotate_right_elbow_roll: "Rotate right elbow (roll) (speed %1 angle %2)",
  move_pepper:
    "Move Pepper (backward,forward): %1 (left,right): %2 rotate: %3 for %4 seconds",
  stop_movement: "Stop movement",
  dance: "Dance",
  ketchup_dance: "Ketchup dance",
  robot_dance: "Robot dance",
};

BLOCK_STRINGS = SV_BLOCK_STRINGS;

if (cookies.get("english") === "en" || cookies.get("english") === true) {
  BLOCK_STRINGS = EN_BLOCK_STRINGS;
}

export function setSV() {
  BLOCK_STRINGS = SV_BLOCK_STRINGS;
  UpdateBlocks();
}

export function setEN() {
  BLOCK_STRINGS = EN_BLOCK_STRINGS;
  UpdateBlocks();
}

/**
 * @movementBlocks
 */
function UpdateBlocks() {
  /**
   * @move_head_left_right
   * Move Peppers head left or right with given speed and angle.
   */
  var moveHeadLeftRight = {
    type: "move_head_left_right",
    message0: BLOCK_STRINGS["move_head_left_right"],
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

  /**
   * @move_head_up_down
   * Move Peppers head up or down with given speed and angle.
   */
  var moveHeadUpDown = {
    type: "move_head_up_down",
    message0: BLOCK_STRINGS["move_head_up_down"],
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

  /**
   * @reset_head
   * Reset Peppers head to standard position.
   */
  var resetHead = {
    type: "reset_head",
    message0: BLOCK_STRINGS["reset_head"],
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

  /**
   * @nod_head
   * Nod Peppers head.
   */
  var nodHead = {
    type: "nod_head",
    message0: BLOCK_STRINGS["nod_head"],
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

  /**
   * @shake_head
   * Shake Peppers head
   */
  var shakeHead = {
    type: "shake_head",
    message0: BLOCK_STRINGS["shake_head"],
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

  /**
   * @spin_head
   * Spin Peppers head for a duration.
   */
  var spinHead = {
    type: "spin_head",
    message0: BLOCK_STRINGS["spin_head"],
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
   * @rotate_left_shoulder_roll
   * Rotate Peppers left shoulder's roll to target angle with given speed.
   */

  var rotateLeftShoulderRoll = {
    type: "rotate_left_shoulder_roll",
    message0: BLOCK_STRINGS["rotate_left_shoulder_roll"],
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

  /**
   * @rotate_left_shoulder_pitch
   * Rotates Peppers left shoulder's pitch to target angle with given speed.
   */
  var rotateLeftShoulderPitch = {
    type: "rotate_left_shoulder_pitch",
    message0: BLOCK_STRINGS["rotate_left_shoulder_pitch"],
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

  /**
   * @rotate_left_elbow_roll
   * Rotate Peppers left elbow to target angle at given speed.
   */
  var rotateLeftElbowRoll = {
    type: "rotate_left_elbow_roll",
    message0: BLOCK_STRINGS["rotate_left_elbow_roll"],
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

  /**
   * @rotate_right_shoulder_roll
   * Rotate Peppers right shoulder's roll to target angle with given speed.
   */
  var rotateRightShoulderRoll = {
    type: "rotate_right_shoulder_roll",
    message0: BLOCK_STRINGS["rotate_right_shoulder_roll"],
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

  /**
   * @rotate_right_shoulder_pitch
   * Rotates Peppers right shoulder's pitch to target angle with given speed.
   */
  var rotateRightShoulderPitch = {
    type: "rotate_right_shoulder_pitch",
    message0: BLOCK_STRINGS["rotate_right_shoulder_pitch"],
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

  /**
   * @rotate_right_elbow_roll
   * Rotate Peppers right elbow to target angle at given speed.
   */
  var rotateRightElbowRoll = {
    type: "rotate_right_elbow_roll",
    message0: BLOCK_STRINGS["rotate_right_elbow_roll"],
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
   * @move_pepper
   * Move Pepper around on the ground on both X-axis and Y-axis at given speed with a given rotation angle.
   */

  var movePepper = {
    type: "move_pepper",
    message0: BLOCK_STRINGS["move_pepper"],
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

  /**
   * @stop_movement
   * Stop all Peppers movements and stop all threads running.
   */
  var stopMovement = {
    type: "stop_movement",
    message0: BLOCK_STRINGS["stop_movement"],
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
   * @dance
   * Make Pepper do a simple dancemove for a predefined time.
   */

  var dance = {
    type: "dance",
    message0: BLOCK_STRINGS["dance"],
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

  /**
   * @ketchup_dance
   * Make Pepper do the ketchup dance for a predefined time.
   */
  var ketchupDance = {
    type: "ketchup_dance",
    message0: BLOCK_STRINGS["ketchup_dance"],
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

  /**
   * @robot_dance
   * Make Pepper do the robot dance for a predefined time.
   */
  var robotDance = {
    type: "robot_dance",
    message0: BLOCK_STRINGS["robot_dance"],
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
}
