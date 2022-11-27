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

Blockly.Python["variables_get_int"] = function (block) {
  // Variable getter.
  const code = Blockly.Python.nameDB_.getName(
    block.getFieldValue("VAR"),
    Blockly.Names.VARIABLE
  );
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["variables_set_int"] = function (block) {
  // Variable setter.
  const argument0 =
    Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE) ||
    "0";
  const varName = Blockly.Python.nameDB_.getName(
    block.getFieldValue("VAR"),
    Blockly.Names.VARIABLE
  );
  return varName + " = " + argument0 + "\n";
};
