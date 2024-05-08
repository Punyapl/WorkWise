import React from "react";

import Header from "../Header/Header";

import background from "../../images/background.png"
import WorkWiseLogo from "../../images/WorkWiseLogo.svg"
import emailIco from "../../images/emailIco.svg"
import userIco from "../../images/userIco.svg"
import passwordIco from "../../images/passwordIco.svg"

function Register () {
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
                                <input type="email" placeholder="Почта" className="register__input"/>
                                <img src={emailIco} alt="" />
                            </div>
                            <div className="register__input-container register__input-container_username">
                                <input type="text" placeholder="Имя пользователя" className="register__input"/>
                                <img src={userIco} alt="" />
                            </div>
                            <div className="register__input-container register__input-container_password">
                                <input type="password" placeholder="Пароль" className="register__input"/>
                                <img src={passwordIco} alt="" />
                            </div>
                            <div className="register__input-container register__input-container_repeat-password">
                                <input type="password" placeholder="Повторите пароль" className="register__input"/>
                                <img src={passwordIco} alt="" />
                            </div>
                            
                        </form>
                        <button className="register__gradient-button">Зарегистрироваться</button>
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