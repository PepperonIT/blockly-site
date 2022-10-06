import React from 'react';
 import './BlocklyComponent.css';
 import {useEffect, useRef} from 'react';

 import Blockly from 'blockly/core';
 import BlocklyJS from 'blockly/javascript';
 import locale from 'blockly/msg/en';
 import 'blockly/blocks';
 
 Blockly.setLocale(locale);
 
 function BlocklyComponent(props) {
    const blocklyDiv = useRef();
    const toolbox = useRef();
    let primaryWorkspace = useRef();
    BlocklyJS.init(primaryWorkspace)

    const generateCode = () => {
        var code = BlocklyJS.workspaceToCode(
          primaryWorkspace.current
        );
        console.log(code);
    }
 
    useEffect(() => {
        const { initialXml, children, ...rest } = props;
            primaryWorkspace.current = Blockly.inject(
                blocklyDiv.current,
                {
                    toolbox: toolbox.current,
                    ...rest
                },
            );

            if (initialXml) {
                Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), primaryWorkspace.current);
            }
    }, [primaryWorkspace, toolbox, blocklyDiv, props]);
 
    return (
    <React.Fragment>
        <button onClick={generateCode}>Convert</button>
        <div ref={blocklyDiv} id="blocklyDiv" />
        <div style={{ display: 'none' }} ref={toolbox}>
            {props.children}
        </div>
    </React.Fragment>);
}
 
export default BlocklyComponent;
 