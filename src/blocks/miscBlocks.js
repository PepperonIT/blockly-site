import * as Blockly from "blockly/core";
import Cookies from "universal-cookie";

const cookies = new Cookies();
var BLOCK_STRINGS = {}; //Defines the text for each block

/**
 * @Swedish
 */
const SV_BLOCK_STRINGS = {
  wait: "Vänta: %1 sekunder",
  play_music: "Spela musik: %1",
  search_picture: "Sök efter bild: %1",
  search_picture_tooltip:
    "Sök efter en bild på internet och visa på Peppers skärm",
  play_rock_paper_scissors: "Spela sten-sax-påse",
  play_rock_paper_scissors_tooltip: "Spela sten-sax-påse med Pepper",
};

/**
 * @English
 */
const EN_BLOCK_STRINGS = {
  wait: "Wait for %1 seconds",
  play_music: "Play music: %1",
  search_picture: "Search for picture: %1",
  search_picture_tooltip:
    "Search for an image on the Internet and show it on Peppers screen",
  play_rock_paper_scissors: "Play rock paper scissors",
  play_rock_paper_scissors_tooltip: "Play rock paper scissors with Pepper",
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
 * @miscBlocks
 */
function UpdateBlocks() {
  /**
   * @wait
   * Wait for X amount of seconds (i.e. do nothing)
   */
  var wait = {
    type: "wait",
    message0: BLOCK_STRINGS["wait"],
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

  /**
   * @music
   * Play music from file on server.
   */
  var music = {
    type: "play_music",
    message0: BLOCK_STRINGS["play_music"],
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

  /**
   * @search_pic
   * Search on google after a picture resembling the input in this block
   */
  var searchPic = {
    type: "search_picture",
    message0: BLOCK_STRINGS["search_picture"],
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
    tooltip: BLOCK_STRINGS["search_picture_tooltip"],
    helpUrl: "",
  };

  Blockly.Blocks["search_picture"] = {
    init: function () {
      this.jsonInit(searchPic);
      this.setStyle("loop_blocks");
      this.setColour(350);
    },
  };

  /**
   * @RPS
   * Play Rock-Paper-Scissors with Pepper
   */
  var playRPS = {
    type: "play_rock_paper_scissors",
    message0: BLOCK_STRINGS["play_rock_paper_scissors"],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: BLOCK_STRINGS["play_rock_paper_scissors_tooltip"],
    helpUrl: "",
  };

  Blockly.Blocks["play_rock_paper_scissors"] = {
    init: function () {
      this.jsonInit(playRPS);
      this.setStyle("loop_blocks");
      this.setColour(350);
    },
  };
}
