import React, { useState } from "react";

import Header from "../Header/Header";

import background from "../../images/background.png"
import WorkWiseLogo from "../../images/WorkWiseLogo.svg"
import emailIco from "../../images/emailIco.svg"
import userIco from "../../images/userIco.svg"
import passwordIco from "../../images/passwordIco.svg"

function Register ({registerForm, setRegisterForm, submitHandler}) {
    const [passwords, setPasswords] = useState({
        password1: "",
        password2: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setRegisterForm(
            {...registerForm,
            [name]: value}
        )
    }
    const handleSubmit = () => {
        if (checkPasswordIdentity) {
            submitHandler(registerForm.email, registerForm.name, registerForm.password)
        }
        
    }
    console.log(registerForm)
    console.log(passwords)
    const handlePasswordChange = (e) => {
        const {name, value} = e.target
        setRegisterForm({
            ...registerForm,
            password: value
        })
        setPasswords(
            {...passwords,
            [name]: value}
        )
        
    }

    const checkPasswordIdentity = () => {
        if (passwords.password1 === passwords.password2) {
            
            return true
        } else {
            return false
        }
    }


    return(
        <div className="app app_register">
            <div className="register">
                <Header></Header>
                <div className="register__main-container">
                    <img src={WorkWiseLogo} alt="" className="register__logo"/>
                    <div className="register__register-window">
                        <h1 className="register__register-window-title">Регистрация</h1>
                        <form className="register__inputs-container" autoComplete="off">
                            <div className="register__input-container register__input-container_email">
                                <input type="email" placeholder="Почта" className="register__input" name="email" onChange={(e) => handleChange(e)}/>
                                <img src={emailIco} alt="" />
                            </div>
                            <div className="register__input-container register__input-container_username">
                                <input type="text" placeholder="Имя пользователя" className="register__input" name="name" onChange={(e) => handleChange(e)}/>
                                <img src={userIco} alt="" />
                            </div>
                            <div className="register__input-container register__input-container_password">
                                <input type="password" placeholder="Пароль" className="register__input" name="password1" onChange={(e) => handlePasswordChange(e)}/>
                                <img src={passwordIco} alt="" />
                            </div>
                            <div className="register__input-container register__input-container_repeat-password">
                                <input type="password" placeholder="Повторите пароль" className="register__input" name="password2" onChange={(e) => handlePasswordChange(e)}/>
                                <img src={passwordIco} alt="" />
                            </div>
                            
                        </form>
                        <button className="register__gradient-button" onClick={() => handleSubmit()}>Зарегистрироваться</button>
                        <div className="register__separator"/>
                        <a className="register__login-text" href="/login">Уже есть аккаунт? <span className="register__login-link">Вход</span> </a>
                    </div>
                </div>
                {/* <img src={background} alt="" className="register__background"/> */}
            </div>
        </div>
    )
}

export default Register