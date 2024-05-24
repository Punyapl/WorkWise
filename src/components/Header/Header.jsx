import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn }) {
    const navigate = useNavigate()
    return (
        <header className="header">
            <button className="header__home-button" onClick={() => navigate('/')}>WorkWise</button>
            {
                isLoggedIn &&
                <div className="header__buttons-container">
                    <button className="header__link-button">Профиль</button>
                    <button className="header__link-button">История</button>
                    <button className="header__link-button">Выход</button>
                </div>
            }

        </header>
    )
}

export default Header