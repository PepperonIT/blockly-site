import * as Blockly from "blockly/core";
import "../fields/BlocklyReactField";
import "../fields/DateField";
import "@blockly/field-date";
import "@blockly/field-slider";
import Cookies from "universal-cookie";

const cookies = new Cookies();
var BLOCK_STRINGS = {}; //Defines the text for each block

/**
 * @Swedish
 */
const SV_BLOCK_STRINGS = {
  rotate_eyes: "Rotera ögonen med färgen %1 i tiden %2 sekunder",
  fade_eyes: "Blekna ögonen med färgen %1 i tiden %2 sekunder",
  angry_eyes: "Arga ögon",
  sad_eyes: "Ledsna ögon",
  blink_eyes: "Blinkande ögon i %1 sekunder",
  squint_eyes: "Kisande ögon i %1 sekunder",
  random_eyes: "Slumpmässiga ögon i %1 sekunder",
  wink_eye: "Blinka %1",
  wink_eye_op_left: "vänster öga",
  wink_eye_op_right: "höger öga",
};

/**
 * @English
 */
const EN_BLOCK_STRINGS = {
  rotate_eyes: "Rotate eyes with color %1 for %2 seconds",
  fade_eyes: "Fade the eyes with color %1 for %2 seconds",
  angry_eyes: "Angry eyes",
  sad_eyes: "Sad eyes",
  blink_eyes: "Blink eyes for %1 seconds",
  squint_eyes: "Squinting eyes for %1 seconds",
  random_eyes: "Random eyes for %1 seconds",
  wink_eye: "Wink %1",
  wink_eye_op_left: "left eye",
  wink_eye_op_right: "right eye",
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
 * @expressionBlocks
 */
function UpdateBlocks() {
  /**
   * @rotate_eyes
   * Rotate Peppers eyes with given color covering half of each eye for a duration.
   */
  var rotateEyes = {
    type: "rotate_eyes",
    message0: BLOCK_STRINGS["rotate_eyes"],
    args0: [
      {
        type: "input_value",
        name: "COLOUR",
        colour: "#8080ff",
        check: "Colour",
      },
      {
        type: "input_value",
        name: "DURATION",
        check: "Number",
        min: 0,
        max: 60,
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };

  Blockly.Blocks["rotate_eyes"] = {
    init: function () {
      this.jsonInit(rotateEyes);
      this.setStyle("loop_blocks");
      this.setColour(225);
    },
  };

  /**
   * @fade_eyes
   * Fade Peppers eyes with a colour for a duration.
   */
  var fadeEyes = {
    type: "fade_eyes",
    message0: BLOCK_STRINGS["fade_eyes"],
    args0: [
      {
        type: "input_value",
        name: "COLOUR",
        colour: "#8080ff",
        check: "Colour",
      },
      {
        type: "input_value",
        name: "DURATION",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };

  Blockly.Blocks["fade_eyes"] = {
    init: function () {
      this.jsonInit(fadeEyes);
      this.setStyle("loop_blocks");
      this.setColour(225);
    },
  };

  /**
   * @angry_eyes
   * Give Pepper red eyes for a duration.
   */
  var angryEyes = {
    type: "angry_eyes",
    message0: BLOCK_STRINGS["angry_eyes"],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "Gör Peppers ögon röda.",
    helpUrl: "",
  };

  Blockly.Blocks["angry_eyes"] = {
    init: function () {
      this.jsonInit(angryEyes);
      this.setStyle("loop_blocks");
      this.setColour(225);
    },
  };

  /**
   * @sad_eyes
   * Give Pepper blue eyes for a duration.
   */
  var sadEyes = {
    type: "sad_eyes",
    message0: BLOCK_STRINGS["sad_eyes"],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };

  Blockly.Blocks["sad_eyes"] = {
    init: function () {
      this.jsonInit(sadEyes);
      this.setStyle("loop_blocks");
      this.setColour(225);
    },
  };

  /**
   * @blink_eyes
   * Blink Peppers eyes for duration.
   */
  var blinkEyes = {
    type: "blink_eyes",
    message0: BLOCK_STRINGS["blink_eyes"],
    args0: [
      {
        type: "input_value",
        name: "DURATION",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };

  Blockly.Blocks["blink_eyes"] = {
    init: function () {
      this.jsonInit(blinkEyes);
      this.setStyle("loop_blocks");
      this.setColour(225);
    },
  };

  /**
   * @squint_eyes
   * Squint Peppers eyes for a duration.
   */
  var squintEyes = {
    type: "squint_eyes",
    message0: BLOCK_STRINGS["squint_eyes"],
    args0: [
      {
        type: "input_value",
        name: "DURATION",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };

  Blockly.Blocks["squint_eyes"] = {
    init: function () {
      this.jsonInit(squintEyes);
      this.setStyle("loop_blocks");
      this.setColour(225);
    },
  };

  /**
   * @random_eyes
   * Randomize Peppers eye expressions for a duration.
   */
  var randomEyes = {
    type: "random_eyes",
    message0: BLOCK_STRINGS["random_eyes"],
    args0: [
      {
        type: "input_value",
        name: "DURATION",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };

  Blockly.Blocks["random_eyes"] = {
    init: function () {
      this.jsonInit(randomEyes);
      this.setStyle("loop_blocks");
      this.setColour(225);
    },
  };

  /**
   * @wink_eye
   * Wink one of Peppers eyes.
   */
  var winkEye = {
    type: "wink_eye",
    message0: BLOCK_STRINGS["wink_eye"],
    args0: [
      {
        type: "field_dropdown",
        name: "eye",
        options: [
          [BLOCK_STRINGS["wink_eye_op_left"], "left"],
          [BLOCK_STRINGS["wink_eye_op_right"], "right"],
        ],
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };

  Blockly.Blocks["wink_eye"] = {
    init: function () {
      this.jsonInit(winkEye);
      this.setStyle("loop_blocks");
      this.setColour(225);
    },
  };
}
