import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../src/pages/home";
import "./styles/app.css";
import BlocksPage from "./pages/blocks-page";
import Cookies from "universal-cookie";
const cookies = new Cookies();

cookies.set("server_port", process.env.REACT_APP_SERVER_PORT);
cookies.set("server_ip", process.env.REACT_APP_SERVER_IP);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blockly" element={<BlocksPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
