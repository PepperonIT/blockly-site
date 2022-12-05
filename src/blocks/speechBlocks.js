import * as Blockly from "blockly/core";
import Cookies from "universal-cookie";

const cookies = new Cookies();
var BLOCK_STRINGS = {};

const SV_BLOCK_STRINGS = {
  say: "Säg %1",
  say_tooltip: "Skriv något i textrutan så säger Pepper det",
};

const EN_BLOCK_STRINGS = {
  say: "Say %1",
  say_tooltip: "Type something in the textbox and Pepper will say it",
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

function UpdateBlocks() {
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
}
