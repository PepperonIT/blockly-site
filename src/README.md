# About code-gen
To change which langiage one want to generate code to, 2 files must be edited.

## generetor/generator.js
Here one must import the code generator to use for custom made blocks in the project. All custom made blcoks must also have their syntax written. For instance

```js
Blockly.Python["test_react_field"] = function (block) {
  return 'print("custom block")\n';
};
```

if we want to print "custom block" in Python3. More details in `generator.js`.

## Blockly/BlockComponent.jsx
Here one must also import the code generator to use, the same as in `generator.js` otherwise it will crash. the constant 

```js
const generateCode = () => {
  // Javascript
  // var code = BlocklyJS.workspaceToCode(primaryWorkspace.current);

  // Python
  var code = BlocklyPy.workspaceToCode(primaryWorkspace.current);
  console.log(code); // See that the code is generated, viewable from browser
};
```

defines which code generator to use. In the example above, Python is used. The comment above it is for Javascript, easy to swap between already imported code generators.