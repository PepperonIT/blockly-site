import * as Blockly from "blockly/core";
import Cookies from "universal-cookie";

const cookies = new Cookies();
var BLOCK_STRINGS = {}; //Defines the text for each block

/**
 * @Swedish
 */
const SV_BLOCK_STRINGS = {
  say: "Säg %1",
  say_tooltip: "Skriv något i textrutan så säger Pepper det",
  change_pepper_speaking_language: "Byt Peppers språk till %1",
  change_pepper_speaking_language_tooltip: "Byt Peppers talspråk.",
  change_pepper_speaking_language_sv: "Svenska",
  change_pepper_speaking_language_en: "Engelska",
  change_pepper_speaking_volume: "Justera volymen för Pepper %1"
};

/**
 * @English
 */
const EN_BLOCK_STRINGS = {
  say: "Say %1",
  say_tooltip: "Type something in the textbox and Pepper will say it",
  change_pepper_speaking_language: "Change Peppers language to %1",
  change_pepper_speaking_language_tooltip:
    "Change the language of which Pepper uses when speaking.",
  change_pepper_speaking_language_sv: "Swedish",
  change_pepper_speaking_language_en: "English",
  change_pepper_speaking_volume: "Adjust the volume for Pepper %1"
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
 * @speechBlocks
 */
function UpdateBlocks() {
  /**
   * @say
   * Pepper will say the contents of the string input in this block.
   */
  var say = {
    type: "say",
    message0: BLOCK_STRINGS["say"],
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
    tooltip: BLOCK_STRINGS["say_tooltip"],
    helpUrl: "",
  };

  Blockly.Blocks["say"] = {
    init: function () {
      this.jsonInit(say);
      this.setStyle("text_blocks");
      this.setColour(180);
    },
  };

  /**
   * @change_pepper_speaking_language
   * Change Peppers speaking language
   */
  var speaking_language = {
    type: "change_pepper_speaking_language",
    message0: BLOCK_STRINGS["change_pepper_speaking_language"],
    args0: [
      {
        type: "field_dropdown",
        name: "speaking_language",
        options: [
          [BLOCK_STRINGS["change_pepper_speaking_language_sv"], "Swedish"],
          [BLOCK_STRINGS["change_pepper_speaking_language_en"], "English"],
        ],
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: BLOCK_STRINGS["change_pepper_speaking_language_tooltip"],
    helpUrl: "",
  };

  Blockly.Blocks["change_pepper_speaking_language"] = {
    init: function () {
      this.jsonInit(speaking_language);
      this.setStyle("loop_blocks");
      this.setColour(180);
    },
  };



  /**
   * @change_pepper_speaking_volume
   * Change Peppers speaking volume
   */
  var speaking_volume = {
    type: "change_pepper_speaking_volume",
    message0: BLOCK_STRINGS["change_pepper_speaking_volume"],
    args0: [
      {
        type: "field_slider",
        name: "speaking_volume",
        check: "Number",
        min: 20,
        max: 100,
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    helpUrl: "",
  };

  Blockly.Blocks["change_pepper_speaking_volume"] = {
    init: function () {
      this.jsonInit(speaking_volume);
      this.setStyle("loop_blocks");
      this.setColour(180);
    },
  };
}
