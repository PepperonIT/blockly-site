import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "../styles/homeStyle.css";
const exprBlocks = require("../blocks/expressionsBlocks");
const speechBlocks = require("../blocks/speechBlocks");
const miscBlocks = require("../blocks/miscBlocks");
const movementBlocks = require("../blocks/movementBlocks");

let adminNickname = process.env.REACT_APP_ADMIN_NICKNAME; // admin nickname
let adminPassword = process.env.REACT_APP_ADMIN_PW; //admin password

function Home() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [nickName, setNickName] = useState("");
  const [english, setEnglish] = useState("");
  const [advanced, setAdvanced] = useState("");

  var formText = []; // The text shown in the form

  // Swedish variant
  const svForm = [
    "Ange smeknamn",
    "Engelska",
    "Avancerad programmering",
    "Starta",
  ];

  // English variant
  const enForm = [
    "Enter your nickname",
    "English",
    "Advanced programming",
    "Start",
  ];

  formText = svForm;

  function changeLanguage() {
    if (english) {
      formText = enForm;
      exprBlocks.setEN();
      speechBlocks.setEN();
      miscBlocks.setEN();
      movementBlocks.setEN();
    } else {
      formText = svForm;
      exprBlocks.setSV();
      speechBlocks.setSV();
      miscBlocks.setSV();
      movementBlocks.setSV();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // 👈️ prevent page refresh

    if (nickName.trim().length === 0) {
      alert("Nickname cannot be empty!");
    } else {
      if (nickName.trim() === adminNickname && adminNickname != null) {
        let password = prompt("Please enter password: ");
        if (password === adminPassword) {
          cookies.set("nickname", "admin", { path: "/" });
          if (english) {
            cookies.set("language", "en", { path: "/" });
            cookies.set("pepper_language", "English");
          } else {
            cookies.set("language", "sv", { path: "/" });
            cookies.set("pepper_language", "Swedish");
          }
          if (advanced) {
            cookies.set("mode", "advanced", { path: "/" });
          } else {
            cookies.set("mode", "basic", { path: "/" });
          }
          navigate("/blockly");
        } else {
          alert("wrong password");
        }
      } else {
        cookies.set("nickname", nickName, { path: "/" });
        if (english) {
          cookies.set("language", "en", { path: "/" });
          cookies.set("pepper_language", "English");
        } else {
          cookies.set("language", "sv", { path: "/" });
          cookies.set("pepper_language", "Swedish");
        }
        if (advanced) {
          cookies.set("mode", "advanced", { path: "/" });
        } else {
          cookies.set("mode", "basic", { path: "/" });
        }
        navigate("/blockly");
      }
    }
  };

  return (
    <>
      {changeLanguage()}
      <div className="body-div">
        <h1 className="body-h1">Luleå Makerspace</h1>
        <div className="Container">
          <div className="FormWrap">
            <div className="FormContent">
              <form className="Form" onSubmit={handleSubmit}>
                <h1 className="FormH1" id="nicknameH1">
                  {formText[0]}
                </h1>
                <input
                  className="FormInput"
                  type="text"
                  id="nickname"
                  name="nickname"
                  onChange={(event) => setNickName(event.target.value)}
                  value={nickName}
                  required
                />
                <label className="toggle">
                  <input
                    className="toggle-checkbox"
                    type="checkbox"
                    defaultChecked={false}
                    id="english"
                    name="english"
                    onChange={(event) => setEnglish(event.target.checked)}
                    value={formText[1]}
                  />
                  <div className="toggle-switch" />
                  <span className="toggle-label">{formText[1]}</span>
                </label>
                <label className="toggle">
                  <input
                    className="toggle-checkbox"
                    type="checkbox"
                    defaultChecked={false}
                    id="advanced"
                    name="advanced"
                    onChange={(event) => setAdvanced(event.target.checked)}
                    value={formText[2]}
                  />
                  <div className="toggle-switch" />
                  <span className="toggle-label">{formText[2]}</span>
                </label>
                <button
                  className="FormButton"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {formText[3]}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
