import * as Blockly from "blockly/core";
import "../fields/BlocklyReactField";
import "../fields/DateField";
import "@blockly/field-date";


var rotateEyes = {
  type: "rotate_eyes",
  message0: "Rotate eyes (color: %1)",
  args0: [
    {
      type: "field_colour",
      name: "rgb",
      colour: "#8080ff",
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
  type: "fade_eyes",
  message0: "Fade eyes (color: %1 time: %2)",
  args0: [
    {
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
    },
    {
      type: "field_number",
      name: "duration",
      value: 0,
      min: 0,
      max: 100,
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


var angryEyes = {
  type: "angry_eyes",
  message0: "Angry eyes",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["angry_eyes"] = {
  init: function () {
    this.jsonInit(angryEyes);
    this.setStyle("loop_blocks");
    this.setColour(225);
  },
};


var sadEyes = {
  type: "sad_eyes",
  message0: "Sad eyes",
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

var blinkEyes = {
  type: "blink_eyes",
  message0: "Blink eyes (time: %1)",
  args0: [
    {
      type: "field_number",
      name: "duration",
      value: 0,
      min: 0,
      max: 100,
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

var squintEyes = {
  type: "squint_eyes",
  message0: "squint eyes (time: %1)",
  args0: [
    {
      type: "field_number",
      name: "duration",
      value: 0,
      min: 0,
      max: 100,
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

var randomEyes = {
  type: "random_eyes",
  message0: "Random eyes (time: %1)",
  args0: [
    {
      type: "field_number",
      name: "duration",
      value: 0,
      min: 0,
      max: 100,
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