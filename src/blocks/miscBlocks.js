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
  ask_google: "Sök efter bild på Google: %1",
  ask_google_tooltip:
    "Fråga Pepper efter en bild på Google och visa den på Peppers skärm",
  ask_wikipedia: "Sök efter Wikipedia artikel: %1",
  ask_wikipedia_tooltip: "Fråga Pepper efter en viss Wikipedia artikel och läs upp den",
  play_rock_paper_scissors: "Spela sten-sax-påse",
  play_rock_paper_scissors_tooltip: "Spela sten-sax-påse med Pepper",
};

/**
 * @English
 */
const EN_BLOCK_STRINGS = {
  wait: "Wait for %1 seconds",
  play_music: "Play music: %1",
  ask_google: "Search for image on Google: %1",
  ask_google_tooltip:
    "Ask Google for an image and show it on Peppers screen",
  ask_wikipedia: "Search for an Wikipedia article: %1",
  ask_wikipedia_tooltip: "Ask Pepper for an Wikipedia article and read it.",
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
   * @ask_google
   * Search on google after a picture resembling the input in this block
   */
  var askGoogle = {
    type: "ask_google",
    message0: BLOCK_STRINGS["ask_google"],
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
    tooltip: BLOCK_STRINGS["ask_google_tooltip"],
    helpUrl: "",
  };

  Blockly.Blocks["ask_google"] = {
    init: function () {
      this.jsonInit(askGoogle);
      this.setStyle("loop_blocks");
      this.setColour(350);
    },
  };

  /**
   * 
   */
  var askWikipedia = {
    type: "ask_wikipedia",
    message0: BLOCK_STRINGS["ask_wikipedia"],
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
    tooltip: BLOCK_STRINGS["ask_wikipedia_tooltip"],
    helpUrl: "",
  };

  Blockly.Blocks["ask_wikipedia"] = {
    init: function () {
      this.jsonInit(askWikipedia);
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
