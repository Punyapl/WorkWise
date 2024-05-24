import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn }) {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    return (
        <header className="header">
            <button className="header__home-button" onClick={() => navigate(token?'/main' :'/')}>WorkWise</button>
            {
                token &&
                <div className="header__buttons-container">
                    <button className="header__link-button" onClick={() => navigate('/profile')}>Профиль</button>
                    <button className="header__link-button" onClick={() => navigate('/history')}>История</button>
                    <button className="header__link-button" onClick={() => navigate('/logoff')}>Выход</button>
                </div>
            }

        </header>
    )
}

export default Header