import * as Blockly from "blockly/core";
import "@blockly/field-slider";

/**
 * ShadowBlocks with different constraints for different parent blocks.
 */
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
    style: "math_blocks",
  },
  {
    type: "angle_constraint_2",
    message0: "%1",
    args0: [
      {
        type: "field_slider",
        name: "ANGLE_C",
        min: -40.5,
        max: 20.5,
        check: "Number",
      },
    ],
    output: "Number",
    style: "math_blocks",
  },
  {
    type: "angle_constraint_3",
    message0: "%1",
    args0: [
      {
        type: "field_slider",
        name: "ANGLE_C",
        min: 0.5,
        max: 89.5,
        check: "Number",
      },
    ],
    output: "Number",
    style: "math_blocks",
  },
  {
    type: "angle_constraint_4",
    message0: "%1",
    args0: [
      {
        type: "field_slider",
        name: "ANGLE_C",
        max: -0.5,
        min: -89.5,
        check: "Number",
      },
    ],
    output: "Number",
    style: "math_blocks",
  },
  {
    type: "angle_constraint_5",
    message0: "%1",
    args0: [
      {
        type: "field_slider",
        name: "ANGLE_C",
        max: 100,
        min: -100,
        check: "Number",
      },
    ],
    output: "Number",
    style: "math_blocks",
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
    style: "math_blocks",
  },
  {
    type: "speed_constraint_2",
    message0: "%1",
    args0: [
      {
        type: "field_slider",
        name: "SPEED_C",
        min: -100,
        max: 100,
        check: "Number",
      },
    ],
    output: "Number",
    style: "math_blocks",
  },
]);
