import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import "../styles/homeStyle.css"  

function Home (){
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [nickName, setNickName] = useState('');
    const [english, setEnglish] = useState('');
    const [advanced,setAdvanced] = useState('');


    function refreshPage() {
        window.location.reload(true);
      }
    

    const handleSubmit = event => {
        event.preventDefault(); // 👈️ prevent page refresh

        if (nickName.trim().length===0){
            alert("nickname cannot be empty!")
            refreshPage()
        }else{
            cookies.set('nickname',nickName,{ path: '/' });
            if (english){
                cookies.set('language',"en",{ path: '/' })
            }else{
                cookies.set('language',"sv",{ path: '/' })
            }
            if(advanced){
                cookies.set('mode',"advanced",{ path: '/' })
            }else{
                cookies.set('mode',"basic",{ path: '/' })
            }
            navigate("/blockly")
        }
      };

    return (
        <>

        <div className='body-div'>
            <h1 className='body-h1'>text here</h1>
            <div className='Container'>
                <div className='FormWrap'>
                    <div className='FormContent'>
                        <form className='Form'>
                            <h1 className='FormH1'>
                                Enter your nickname
                            </h1>
                            <input className='FormInput' type="text" id="nickname" name="nickname" onChange={event => setNickName(event.target.value)} value={nickName} required/>

                            <label class="toggle">
                            <input class="toggle-checkbox" type="checkbox" defaultChecked={false} id="english" name="english" onChange={event => setEnglish(event.target.checked)} value={english}/>
                            <div class="toggle-switch"/>
                            <span class="toggle-label">English</span>
                            </label>

                            <label class="toggle">
                            <input class="toggle-checkbox" type="checkbox" efaultChecked={false} id="advanced" name="advanced" onChange={event => setAdvanced(event.target.checked)} value={advanced}/>
                            <div class="toggle-switch"/>
                            <span class="toggle-label">Advanced</span>
                            </label>
                            <button className='FormButton' onClick={handleSubmit}>Click me</button>
                        </form>
                    </div>
                </div>
            </div>            
        </div>
        </>

    )
}
  
export default Home;
