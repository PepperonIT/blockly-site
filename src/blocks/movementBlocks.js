import * as Blockly from "blockly/core";
import "../fields/BlocklyReactField";
import "../fields/DateField";
import "@blockly/field-date";
import "@blockly/field-date";


/**
 * @gesture
 * 
 */



 var moveHeadLeftRight = {
    type: "move_head_left_right",
    message0: "Rör huvudet (vänster, höger) (grader %1 fart %2)",
    args0: [
          {
            type: "field_slider",
            name: "degrees",
            value: 0,
            min: -119.5,
            max: 119.5,
          },
          {
            type: "field_slider",
            name: "speed",
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
  
  Blockly.Blocks["move_head_left_right"] = {
    init: function () {
      this.jsonInit(moveHeadLeftRight);
      this.setStyle("loop_blocks");
      this.setColour(125);
    },
  };

  var moveHeadUpDown = {
    type: "move_head_up_down",
    message0: "Rör huvudet (upp, ner) (grader %1 fart %2)",
    args0: [
          {
            type: "field_slider",
            name: "degrees",
            value: 0,
            min: -40.5,
            max: 20.5,
          },
          {
            type: "field_slider",
            name: "speed",
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
  
  Blockly.Blocks["move_head_up_down"] = {
    init: function () {
      this.jsonInit(moveHeadUpDown);
      this.setStyle("loop_blocks");
      this.setColour(125);
    },
  };





  var resetHead = {
    type: "reset_head",
    message0: "Återställ huvudet",
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
    message0: "Nicka huvudet",
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
    message0: "Skaka huvudet",
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
    message0: "Snurra huvudet (tid:%1 s)",
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
    message0: "Flytta peppar ((bakåt,framåt): %1 (vänster,höger): %2 rotera: %3 tid: %4 s)",
    args0: [
        {
            type: "field_slider",
            name: "x",
            value: 0,
            min: -35,
            max: 35,
          },
          {
            type: "field_slider",
            name: "y",
            value: 0,
            min: -35,
            max: 35,
          },
          {
            type: "field_slider",
            name: "angle",
            value: 0,
            min: -10,
            max: 10,
          },
          {
            type: "field_slider",
            name: "duration",
            value: 0,
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
    message0: "Stoppa rörelsen",
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
