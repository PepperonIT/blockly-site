import * as Blockly from "blockly/core";

var wait = {
  type: "wait_en",
  message0: "Wait for %1 seconds",
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

Blockly.Blocks["wait_en"] = {
  init: function () {
    this.jsonInit(wait);
    this.setStyle("loop_blocks");
    this.setColour(350);
  },
};

var music = {
  type: "play_music_en",
  message0: "Play music: %1",
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

Blockly.Blocks["play_music_en"] = {
  init: function () {
    this.jsonInit(music);
    this.setStyle("loop_blocks");
    this.setColour(350);
  },
};

var searchPic = {
  type: "search_picture_en",
  message0: "Search for picture: %1",
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
  tooltip: "Search for an image on the Internet",
  helpUrl: "",
};

Blockly.Blocks["search_picture_en"] = {
  init: function () {
    this.jsonInit(searchPic);
    this.setStyle("loop_blocks");
    this.setColour(350);
  },
};
