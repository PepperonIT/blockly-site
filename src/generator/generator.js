// import { pythonGenerator } from "blockly/python";

// pythonGenerator["test_react_field"] = function (block) {
//   return 'print"custom block" \n';
// };

// pythonGenerator["test_react_date_field"] = function (block) {
//   return 'print"' + block.getField("DATE").getText() + '"\n';
// };

import { javascriptGenerator } from "blockly/javascript";

javascriptGenerator["test_react_field"] = function (block) {
  return "console.log('custom block');\n";
};

javascriptGenerator["test_react_date_field"] = function (block) {
  return "console.log(" + block.getField("DATE").getText() + ");\n";
};
