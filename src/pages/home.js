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
            <h1 className='body-h1'>Luleå Makerspace</h1>
            <div className='Container'>
                <div className='FormWrap'>
                    <div className='FormContent'>
                        <form className='Form'>
                            <h1 className='FormH1'>
                                Enter your nickname
                            </h1>
                            <input className='FormInput' type="text" id="nickname" name="nickname" onChange={event => setNickName(event.target.value)} value={nickName} required/>

                            <label className="toggle">
                            <input className="toggle-checkbox" type="checkbox" defaultChecked={false} id="english" name="english" onChange={event => setEnglish(event.target.checked)} value={english}/>
                            <div className="toggle-switch"/>
                            <span className="toggle-label">English</span>
                            </label>

                            <label className="toggle">
                            <input className="toggle-checkbox" type="checkbox" defaultChecked={false} id="advanced" name="advanced" onChange={event => setAdvanced(event.target.checked)} value={advanced}/>
                            <div className="toggle-switch"/>
                            <span className="toggle-label">Advanced</span>
                            </label>
                            <button className='FormButton' onClick={handleSubmit}>Start</button>
                        </form>
                    </div>
                </div>
            </div>            
        </div>
        </>

    )
}
  
export default Home;
