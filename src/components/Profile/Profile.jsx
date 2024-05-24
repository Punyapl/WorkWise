import React from 'react'
import Header from '../Header/Header'
import separatorLine from "../../images/separatorLine.svg"
import tgIco from "../../images/tgIco.svg"
import vkIco from "../../images/vkIco.svg"
import dcIco from "../../images/dcIco.svg"
import userIco from "../../images/userIco.svg"
import emailIco from "../../images/emailIco.svg"
import dateIco from "../../images/dateIco.svg"
import phoneIco from "../../images/phoneIco.svg"
import cityIco from "../../images/cityIco.svg"
import vuzIco from "../../images/vuzIco.svg"
import gradeIco from "../../images/gradeIco.svg"
import groupIco from "../../images/groupIco.svg"

function Profile() {
    return (
        <div className='app app_profile'>
            <div className='profile'>
                <Header isLoggedIn={true}></Header>
                <div className="profile__layout-container">
                    <div className="profile__profile-info-container profile__info-container">
                        <img src="https://mygardenia.ru/uploads/pers1.jpg" alt="" className='profile__pfp' />
                        <img src={separatorLine} alt="" className='profile__separator-line' />
                        <p className='profile__name'>Борис <br /> Котов</p>
                    </div>
                    <div className='profile__links-container profile__info-container'>
                        <h2 className="profile__links-title">Где можно мне написать</h2>
                        <div className="profile__links-inputs-container">
                            <div className="profile__text-input-container">
                                <label htmlFor="" className="profile__input-label profile__input-label_short">Телеграм</label>
                                <div className="profile__input-container profile__input-contianer_short">
                                    <input type="text" className="profile__input" />
                                    <img src={tgIco} alt="" className="profile__input-icon" />
                                </div>
                            </div>
                            <div className="profile__text-input-container">
                                <label htmlFor="" className="profile__input-label profile__input-label_short">Вконтакте</label>
                                <div className="profile__input-container profile__input-contianer_short">
                                    <input type="text" className="profile__input" />
                                    <img src={vkIco} alt="" className="profile__input-icon" />
                                </div>
                            </div>
                            <div className="profile__text-input-container">
                                <label htmlFor="" className="profile__input-label profile__input-label_short">Дискорд</label>
                                <div className="profile__input-container profile__input-contianer_short">
                                    <input type="text" className="profile__input" />
                                    <img src={dcIco} alt="" className="profile__input-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile__tests-container profile__info-container'>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Имя пользователя</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" />
                                <img src={userIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Почта</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" />
                                <img src={emailIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Дата рождения</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" />
                                <img src={dateIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Телефон</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" />
                                <img src={phoneIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Город</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" />
                                <img src={cityIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">ВУЗ</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" />
                                <img src={vuzIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Курс</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" />
                                <img src={gradeIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Группа</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" />
                                <img src={groupIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__buttons-container">
                            <button className='profile__grad-btn'>Сохранить изменения</button>
                            <button className='profile__grad-btn'>Удалить аккаунт</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile