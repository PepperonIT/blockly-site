import BlocksEnBasic from './blocks-en-basic';
import BlocksEnAdvanced from './blocks-en-advanced';
import BlocksSvBasic from './blocks-sv-basic';
import BlocksSvAdvanced from './blocks-sv-advanced.js';
import Cookies from 'universal-cookie';
import { Navigate } from "react-router-dom";




 function BlocksPage() {
    const cookies = new Cookies();

    if(cookies.get('language')==="en" && cookies.get('mode')==="basic"){
      return (
        <>
        <BlocksEnBasic/>  
        </>
      );
    }else if((cookies.get('language')==="en" && cookies.get('mode')==="advanced")){
      return (
        <BlocksEnAdvanced/>
      );
    }else if((cookies.get('language')==="sv" && cookies.get('mode')==="basic")){
      return (
        <BlocksSvBasic/>
      );
    }else if((cookies.get('language')==="sv" && cookies.get('mode')==="advanced")){
      return (
        <BlocksSvAdvanced/>
      );
    }else{
      return <Navigate to="/"/>
    }
}
 
 export default BlocksPage;
 