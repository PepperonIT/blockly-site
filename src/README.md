# About code-gen
To change which language one want to generate code to, 2 sections in the source code must be edited.

## generetor/
The code in the return strings for each function in the generator files must be in the target language syntax, recommended is to have multiple definitions or if-else statements to handle multiple languages at once depending on some config variable. For now, only Python code generating is supported.

## Blockly/BlockComponent.jsx
Here one must also import the code generators in use, found in the `generator` folder. Also, the `generateCode` function needs to have the correct generator imported from Blockly, this can also be set via config as the code-strings in the generator files. The code snipped below says that the target langage is Python to the Blockly code generator and therefore the program will be translated from Blockly blocks to Python.

```js
const generateCode = () => {
  // Javascript
  // var code = BlocklyJS.workspaceToCode(primaryWorkspace.current);

  // Python
  var code = BlocklyPy.workspaceToCode(primaryWorkspace.current);
  console.log(code); // See that the code is generated, viewable from browser
};
```
