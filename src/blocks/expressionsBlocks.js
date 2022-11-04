import * as Blockly from "blockly/core";
import "../fields/BlocklyReactField";
import "../fields/DateField";
import "@blockly/field-date";
import '@blockly/field-slider';


/**
 * some kind of docs can be a good idea, in case someone will work after us on this project
 * 
 */
var rotateEyes = {
  type: "rotate_eyes",
  message0: "Rotera ögonen (färg: %1 tid: %2 s)",
  args0: [
    {
      type: "field_colour",
      name: "rgb",
      colour: "#8080ff",
    },
    {
      type: "field_slider",
      name: "duration",
      value: 1,
      min: 1,
      max: 90,
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
  message0: "Blekna ögonen (färg: %1 tid: %2 s)",
  args0: [
    {
      type: "field_colour",
      name: "rgb",
      colour: "#8080ff"
    },
    {
      type: "field_slider",
      name: "duration",
      value: 1,
      min: 1,
      max: 90,
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
  message0: "Arga ögon",
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
  message0: "Ledsna ögon",
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
  message0: "blinka ögon (tid: %1 s)",
  args0: [
    {
      type: "field_slider",
      name: "duration",
      value: 1,
      min: 1,
      max: 90,
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
  message0: "kisande ögon (tid: %1 s)",
  args0: [
    {
      type: "field_slider",
      name: "duration",
      value: 1,
      min: 1,
      max: 90,
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
  message0: "Slumpmässiga ögon (tid: %1 s)",
  args0: [
    {
      type: "field_slider",
      name: "duration",
      value: 1,
      min: 1,
      max: 90,
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


var winkEye = {
  type: "wink_eye",
  message0: "blinka ögat (%1)",
  args0: [
    {
      type: "field_dropdown",
      name: "eye",
      options: [
        [
          "vänster öga",
          "left"
        ],
        [
          "höger öga",
          "right"
        ]
      ]
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