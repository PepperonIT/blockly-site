import * as Blockly from "blockly/core";
import "@blockly/field-slider";

Blockly.defineBlocksWithJsonArray([
  {
    type: "number_constraint",
    message0: "%1",
    args0: [
      {
        type: "field_slider",
        name: "NUMBER_C",
        min: 1,
        max: 60,
        check: "Number",
      },
    ],
    output: "Number",
    style: "math_blocks",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "angle_constraint_1",
    message0: "%1",
    args0: [
      {
        type: "field_slider",
        name: "ANGLE_C",
        min: -119.5,
        max: 119.5,
        check: "Number",
      },
    ],
    output: "Number",
    colour: 225,
  },
  {
    type: "speed_constraint",
    message0: "%1",
    args0: [
      {
        type: "field_slider",
        name: "SPEED_C",
        min: 0,
        max: 100,
        check: "Number",
      },
    ],
    output: "Number",
    colour: 225,
  },
]);
