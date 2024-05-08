import React from "react";
import Header from "../Header/Header";

import background from "../../images/background.png"
import WorkWiseLogo from "../../images/WorkWiseLogo.svg"
import emailIco from "../../images/emailIco.svg"
import userIco from "../../images/userIco.svg"
import passwordIco from "../../images/passwordIco.svg"

function Login () {
    return(
        <div className="app app_login">
            <div className="login">
                <Header></Header>
                <div className="login__main-container">
                    <img src={WorkWiseLogo} alt="" className="login__logo"/>
                    <div className="login__login-window">
                        <h1 className="login__login-window-title">Вход</h1>
                        <form className="login__inputs-container" autoComplete="off">
                            <div className="login__input-container login__input-container_email">
                                <input type="email" placeholder="Почта" className="login__input"/>
                                <img src={emailIco} alt="" />
                            </div>
                            <div className="login__input-container login__input-container_password">
                                <input type="password" placeholder="Пароль" className="login__input"/>
                                <img src={passwordIco} alt="" />
                            </div>
                        </form>
                        <button className="login__gradient-button">Вход</button>
                        <div className="login__separator"/>
                        <a className="login__login-text" href="/registration">Нет аккаунта? <span className="login__login-link">Регистрация</span> </a>
                    </div>
                </div>
                {/* <img src={background} alt="" className="login__background"/> */}
            </div>
        </div>
    )
}

export default Login