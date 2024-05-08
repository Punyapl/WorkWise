import React from "react";

import Header from "../Header/Header";

import background from "../../images/background.png"
import WorkWiseLogo from "../../images/WorkWiseLogo.svg"
import promoImage from "../../images/promoImage.png"
import { useNavigate } from "react-router-dom";

function Promo() {
    const navigate = useNavigate()
    return (
        <div className="app app_promo">
            <div className="promo">
                <Header></Header>
                <div className="promo__main-container">
                    <div className="promo__promo-container">
                        <div className="promo__promo-info-container">
                            <div className="promo__text-container">
                                <img src={WorkWiseLogo} alt="" className="promo__logo" />
                                <h1 className="promo__title">Ваша путеводная звезда в мир карьеры</h1>
                                <h2 className="promo__subtitle">Сервис, который поможет вам определить свою будущую карьеру. </h2>
                                <button className="promo__gradient-button" onClick={() => navigate('/registration')}>Начать свой путь</button>
                            </div>
                            <div className="promo__image-container" >
                                <img src={promoImage} alt="" className="promo__image" />
                            </div>
                        </div>


                    </div>
                </div>
                {/* <img src={background} alt="" className="promo__background"/> */}
            </div>
        </div>
    )
}

export default Promo