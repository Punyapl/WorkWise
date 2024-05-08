import React from "react";
import '../../index.css';

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Register from "../Register/Register";
import Login from "../Login/Login";
import Promo from "../Promo/Promo";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Promo />}/>
        <Route path="/registration" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
