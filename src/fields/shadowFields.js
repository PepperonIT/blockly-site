import * as Blockly from "blockly/core";
import "@blockly/field-slider";

Blockly.defineBlocksWithJsonArray([
  {
    type: "number_constraint",
    message0: "%1",
    args0: [
      {
        type: "field_slider",
        name: "NUMBER",
        min: 1,
        max: 60,
        check: "Number",
      },
    ],
    output: "Number",
    colour: 225,
  },
]);
