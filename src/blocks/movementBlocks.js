import * as Blockly from "blockly/core";
import "../fields/BlocklyReactField";
import "../fields/DateField";
import "@blockly/field-date";
import "@blockly/field-date";


/**
 * @gesture
 * 
 */



 var moveHead = {
    type: "move_head",
    message0: "Move head (yaw: %1 degrees: %2 speed: %3)",
    args0: [
        {
            type: "field_dropdown",
            name: "yaw",
            options: [
              [
                "True",
                "True"
              ],
              [
                "False",
                "False"
              ]
            ]
          },
          {
            type: "field_slider",
            name: "degrees",
            value: 1,
            min: -119.5,
            max: 119.5,
          },
          {
            type: "field_slider",
            name: "duration",
            value: 0,
            min: 0,
            max: 100,
          },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };
  
  Blockly.Blocks["move_head"] = {
    init: function () {
      this.jsonInit(moveHead);
      this.setStyle("loop_blocks");
      this.setColour(125);
    },
  };




  var resetHead = {
    type: "reset_head",
    message0: "Reset head",
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };
  
  Blockly.Blocks["reset_head"] = {
    init: function () {
      this.jsonInit(resetHead);
      this.setStyle("loop_blocks");
      this.setColour(125);
    },
  };

  var nodHead = {
    type: "nod_head",
    message0: "Nod head",
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };
  
  Blockly.Blocks["nod_head"] = {
    init: function () {
      this.jsonInit(nodHead);
      this.setStyle("loop_blocks");
      this.setColour(125);
    },
  };

  var shakeHead = {
    type: "shake_head",
    message0: "Shake head",
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };
  
  Blockly.Blocks["shake_head"] = {
    init: function () {
      this.jsonInit(shakeHead);
      this.setStyle("loop_blocks");
      this.setColour(125);
    },
  };


  var spinHead = {
    type: "spin_head",
    message0: "Spin head (time:%1 s)",
    args0:[
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
  
  Blockly.Blocks["spin_head"] = {
    init: function () {
      this.jsonInit(spinHead);
      this.setStyle("loop_blocks");
      this.setColour(125);
    },
  };
  



/**
 * @translation
 */


 var movePepper = {
    type: "move_pepper",
    message0: "Move pepper (x: %1 y: %2 angle: %3 time: %4 s)",
    args0: [
        {
            type: "field_number",
            name: "x",
            value: 0,
            min: 0,
            max: 100,
          },
          {
            type: "field_number",
            name: "y",
            value: 0,
            min: 0,
            max: 100,
          },
          {
            type: "field_angle",
            name: "angle",
            angle: 90,
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
  
  Blockly.Blocks["move_pepper"] = {
    init: function () {
      this.jsonInit(movePepper);
      this.setStyle("loop_blocks");
      this.setColour(145);
    },
  };


  var stopMovement = {
    type: "stop_movement",
    message0: "Stop movement",
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: "",
    helpUrl: "",
  };
  
  Blockly.Blocks["stop_movement"] = {
    init: function () {
      this.jsonInit(stopMovement);
      this.setStyle("loop_blocks");
      this.setColour(145);
    },
  };
