import React from "react";
import '../../index.css';

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Register from "../Register/Register";
import Login from "../Login/Login";
import Promo from "../Promo/Promo";
import Main from "../Main/Main";
import SelectTest from "../SelectTest/SelectTest";
import Test from "../Test/Test";
import Results from "../Results/Results";
import Profile from "../Profile/Profile";
import History from "../History/History";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Promo />}/>
        <Route path="/registration" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/select-test" element={<SelectTest/>}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/results" element={<Results />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/history" element={<History />}/>
      </Routes>
    </div>
  );
}

export default App;
