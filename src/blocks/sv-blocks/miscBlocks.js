import * as Blockly from "blockly/core";

var wait = {
  type: "wait",
  message0: "Vänta: %1 sekunder",
  args0: [
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

Blockly.Blocks["wait"] = {
  init: function () {
    this.jsonInit(wait);
    this.setStyle("loop_blocks");
    this.setColour(350);
  },
};

var music = {
  type: "play_music",
  message0: "Spela musik: %1",
  args0: [
    {
      type: "field_dropdown",
      name: "FIELDNAME",
      options: [
        ["first item", "ITEM1"],
        ["second item", "ITEM2"],
      ],
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["play_music"] = {
  init: function () {
    this.jsonInit(music);
    this.setStyle("loop_blocks");
    this.setColour(350);
  },
};

var searchPic = {
  type: "search_picture",
  message0: "Sök efter bild: %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: "Sök efter en bild på internet",
  helpUrl: "",
};

Blockly.Blocks["search_picture"] = {
  init: function () {
    this.jsonInit(searchPic);
    this.setStyle("loop_blocks");
    this.setColour(350);
  },
};
