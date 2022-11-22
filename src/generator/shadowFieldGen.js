import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["number_constraint"] = function (block) {
  let code = Number(block.getFieldValue("NUMBER_C"));
  let order;
  if (code === Infinity) {
    code = 'float("inf")';
    order = Blockly.Python.ORDER_FUNCTION_CALL;
  } else if (code === -Infinity) {
    code = '-float("inf")';
    order = Blockly.Python.ORDER_UNARY_SIGN;
  } else {
    order =
      code < 0 ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC;
  }
  return [code, order];
};

Blockly.Python["angle_constraint_1"] = function (block) {
  let code = Number(block.getFieldValue("ANGLE_C"));
  let order;
  if (code === Infinity) {
    code = 'float("inf")';
    order = Blockly.Python.ORDER_FUNCTION_CALL;
  } else if (code === -Infinity) {
    code = '-float("inf")';
    order = Blockly.Python.ORDER_UNARY_SIGN;
  } else {
    order =
      code < 0 ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC;
  }
  return [code, order];
};
Blockly.Python["speed_constraint"] = function (block) {
  let code = Number(block.getFieldValue("SPEED_C"));
  let order;
  if (code === Infinity) {
    code = 'float("inf")';
    order = Blockly.Python.ORDER_FUNCTION_CALL;
  } else if (code === -Infinity) {
    code = '-float("inf")';
    order = Blockly.Python.ORDER_UNARY_SIGN;
  } else {
    order =
      code < 0 ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC;
  }
  return [code, order];
};
