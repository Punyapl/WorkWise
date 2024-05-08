import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
        <header className="header">
            <button className="header__home-button" onClick={() => navigate('/')}>WorkWise</button>
        </header>
    )
}

export default Header