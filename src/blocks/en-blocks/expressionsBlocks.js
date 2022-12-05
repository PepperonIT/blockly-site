import * as Blockly from "blockly/core";
import "../../fields/BlocklyReactField";
import "../../fields/DateField";
import "@blockly/field-date";
import "@blockly/field-slider";

/**
 * some kind of docs can be a good idea, in case someone will work after us on this project
 *
 */
var rotateEyes = {
  type: "rotate_eyes_en",
  message0: "Rotate eyes with color %1 for %2 seconds",
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
  // output: ["Colour", "Number"],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["rotate_eyes_en"] = {
  init: function () {
    this.jsonInit(rotateEyes);
    this.setStyle("loop_blocks");
    this.setColour(225);
  },
};

/*
 * To put specifec colors you can do it by the following code 
 *     {
      type: "field_colour",
      name: "rgb",
      colour: "#8080ff",
      colourOptions:
      ['#ff4040', '#ff8080', '#ffc0c0',
       '#4040ff', '#8080ff', '#c0c0ff'],
    colourTitles:
      ['dark pink', 'pink', 'light pink',
       'dark blue', 'blue', 'light blue'],
    "columns": 3
    }
 */

var fadeEyes = {
  type: "fade_eyes_en",
  message0: "Fade the eyes with color %1 for %2 seconds",
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

Blockly.Blocks["fade_eyes_en"] = {
  init: function () {
    this.jsonInit(fadeEyes);
    this.setStyle("loop_blocks");
    this.setColour(225);
  },
};

var angryEyes = {
  type: "angry_eyes_en",
  message0: "Angry eyes",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "Makes Pepper's eyes red.",
  helpUrl: "",
};

Blockly.Blocks["angry_eyes_en"] = {
  init: function () {
    this.jsonInit(angryEyes);
    this.setStyle("loop_blocks");
    this.setColour(225);
  },
};

var sadEyes = {
  type: "sad_eyes_en",
  message0: "Sad eyes",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["sad_eyes_en"] = {
  init: function () {
    this.jsonInit(sadEyes);
    this.setStyle("loop_blocks");
    this.setColour(225);
  },
};

var blinkEyes = {
  type: "blink_eyes_en",
  message0: "Blink eyes for %1 seconds",
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

Blockly.Blocks["blink_eyes_en"] = {
  init: function () {
    this.jsonInit(blinkEyes);
    this.setStyle("loop_blocks");
    this.setColour(225);
  },
};

var squintEyes = {
  type: "squint_eyes_en",
  message0: "Squinting eyes for %1 seconds",
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

Blockly.Blocks["squint_eyes_en"] = {
  init: function () {
    this.jsonInit(squintEyes);
    this.setStyle("loop_blocks");
    this.setColour(225);
  },
};

var randomEyes = {
  type: "random_eyes_en",
  message0: "Random eyes for %1 seconds",
  args0: [
    {
      type: "input_value",
      name: "DURATION",
      check: "Number",
    },
  ],
  // output: "Number",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["random_eyes_en"] = {
  init: function () {
    this.jsonInit(randomEyes);
    this.setStyle("loop_blocks");
    this.setColour(225);
    // this.setOutput(true, "Number");
  },
};

var winkEye = {
  type: "wink_eye_en",
  message0: "Wink eye %1",
  args0: [
    {
      type: "field_dropdown",
      name: "eye",
      options: [
        ["left eye", "left"],
        ["right eye", "right"],
      ],
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["wink_eye_en"] = {
  init: function () {
    this.jsonInit(winkEye);
    this.setStyle("loop_blocks");
    this.setColour(225);
  },
};
