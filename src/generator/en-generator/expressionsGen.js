import * as Blockly from "blockly/core";
import "blockly/python";
import "@blockly/field-slider";

// const { NameType } = goog.require("Blockly.Names");

/**
 *
 * TODO: remove all /n in the return statments
 *
 * */

Blockly.Python["rotate_eyes_en"] = function (block) {
  var rgb =
    Blockly.Python.valueToCode(block, "COLOUR", Blockly.Python.ORDER_ATOMIC) ||
    "''";

  var duration = getDuration(block);

  return `${checkDuration(duration)}\npep_expr.rotate_eyes(${String(
    rgb
  )},${String(duration)})\n`;
};

Blockly.Python["fade_eyes_en"] = function (block) {
  var rgb =
    Blockly.Python.valueToCode(block, "COLOUR", Blockly.Python.ORDER_ATOMIC) ||
    "''";
  var duration = getDuration(block);
  return `${checkDuration(duration)}\npep_expr.fade_eyes(${String(
    rgb
  )},${String(duration)})\n`;
};

Blockly.Python["angry_eyes_en"] = function (block) {
  return `pep_expr.angry_eyes()\n`;
};

Blockly.Python["sad_eyes_en"] = function (block) {
  return `pep_expr.sad_eyes()\n`;
};

Blockly.Python["blink_eyes_en"] = function (block) {
  var duration = getDuration(block);
  return `${checkDuration(duration)}\npep_expr.blink_eyes(${String(
    duration
  )})\n`;
};

Blockly.Python["squint_eyes_en"] = function (block) {
  var duration = getDuration(block);
  return `${checkDuration(duration)}\npep_expr.squint_eyes(${String(
    duration
  )})\n`;
};

Blockly.Python["random_eyes_en"] = function (block) {
  var duration = getDuration(block);
  return `${checkDuration(duration)}\npep_expr.random_eyes(${String(
    duration
  )})\n`;
};

Blockly.Python["wink_eye_en"] = function (block) {
  var eye = block.getFieldValue("eye");
  return `pep_expr.wink_eye(${String(eye)})\n`;
};

function getDuration(block) {
  var duration =
    Blockly.Python.valueToCode(
      block,
      "DURATION",
      Blockly.Python.ORDER_ATOMIC
    ) || "0";
  if (duration > 60) {
    duration = 60;
  } else if (duration < 1) {
    duration = 1;
  }
  return duration;
}

function checkDuration(duration) {
  var code = `if ${duration} > 60:\n  ${duration} = 60\nelif ${duration} < 1:\n ${duration} = 1`;
  return code;
}
