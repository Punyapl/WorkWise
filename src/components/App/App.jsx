import React, { useEffect, useState } from "react";
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

import * as auth from "../../utils/auth.js"
import currentUserContext from "../../contexts/currentUserContext.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [registrationForm, setRegistrationForm] = useState({
    email: "",
    name: "",
    password: ""
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const [currentUser, setCurrentUser] = useState({
    email: "",
    name: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const email = localStorage.getItem("email")
  const token = localStorage.getItem("token")

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      if ((location.pathname === "/register")) {
        navigate("/login");
      } else {
        navigate(location.pathname)
      }
    }
  }, [token]);
  console.log(loggedIn)
  useEffect(() => {
    if (loggedIn) {
      auth
        .getUser(token)
        .then((res) => {
          console.log(res)
          setCurrentUser(res)
        })
        .catch((err) => console.log(err))
    }
  }, [email, loggedIn, setCurrentUser])

  function registerUser(email, name, password) {
    auth.
      register(email, name, password)
      .then((res) => {
        if (res) {
          console.log("Регистрация прошла успешно!");
          loginUser(email, password);
        }
      })
      .catch((err) => {
        console.error("Ошибка при регистрации:", err);
        if (err instanceof SyntaxError) {
          console.error("Некорректный формат ответа от сервера.");
        } else {
          console.error(err.message || 'Не удалось зарегистрироваться');
        }
      });
  }


  function loginUser(email, password) {
    auth
      .login(email, password)
      .then((data) => {
        console.log(data)
        if (data) {
          setLoggedIn(true)
          navigate("/main")
          console.log("Вход выполнен успешно!")
        }
      })
      .catch((err) => {
        err.json().then((err) => {
          if (err?.message) {
            console.error(err.message);
          } else {
            console.error('Не удалось войти');
          }
        })
          .catch((err) => console.error(err))
      })
      .catch((err) => {
        console.error(err)
        setLoggedIn(false)
      })
  }

  //заглушка для логоффа
  useEffect(() => {
    if (location.pathname === "/logoff") {
      localStorage.clear();
      navigate("/");
      setLoggedIn(false);
      setCurrentUser({ email: "", name: "",});
    }
  }, [location.pathname, navigate])

  console.log(currentUser)

  return (
    <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Promo />} />
          <Route path="/registration" element={<Register registerForm={registrationForm} setRegisterForm={setRegistrationForm} submitHandler={registerUser} />} />
          <Route path="/login" element={<Login loginForm={loginForm} setLoginForm={setLoginForm} submitHandler={loginUser} />} />
          <Route path="/main" element={<Main />} />
          <Route path="/select-test" element={<SelectTest />} />
          <Route path="/select-test/:id" element={<SelectTest />} />
          <Route path="/test/:special/:categories" element={<Test />} />
          <Route path="/results/:id" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </currentUserContext.Provider>

  );
}

export default App;
