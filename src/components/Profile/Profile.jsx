import React, { useContext, useEffect, useState } from 'react'
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

import currentUserContext from '../../contexts/currentUserContext';
import * as api from '../../utils/api.js'

function Profile() {
    const {currentUser, setCurrentUser} = useContext(currentUserContext)
    const token = localStorage.getItem("token")
    const [profileForm, setProfileForm] = useState({
        Birthday:"",
        City:"",
        Course:"",
        Discord:"",
        EDU:"",
        Email:"",
        Group:"",
        Name:"",
        Phone:"",
        Tg:"",
        Vk:""
    })

    useEffect(() => {
        if (currentUser.Email){
            setProfileForm(currentUser)
        }
    },[currentUser])
    console.log(profileForm)

    const handleChange = (e) => {
        const {name, value} = e.target
        setProfileForm(
            {...profileForm,
            [name]: value}
        )
    }

    const handleSubmit = () =>{
        api
            .editUser(token,profileForm)
            .then((data) => {
                console.log(data.message)
                window.location.reload()
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div className='app app_profile'>
            <div className='profile'>
                <Header isLoggedIn={true}></Header>
                <div className="profile__layout-container">
                    <div className="profile__profile-info-container profile__info-container">
                        <img src="https://mygardenia.ru/uploads/pers1.jpg" alt="" className='profile__pfp' />
                        <img src={separatorLine} alt="" className='profile__separator-line' />
                        <p className='profile__name'>{currentUser.Name}</p>
                    </div>
                    <div className='profile__links-container profile__info-container'>
                        <h2 className="profile__links-title">Где можно мне написать</h2>
                        <div className="profile__links-inputs-container">
                            <div className="profile__text-input-container">
                                <label htmlFor="" className="profile__input-label profile__input-label_short">Телеграм</label>
                                <div className="profile__input-container profile__input-contianer_short">
                                    <input type="text" className="profile__input" placeholder={currentUser.Tg} name='Tg' onChange={(e) => handleChange(e)}/>
                                    <img src={tgIco} alt="" className="profile__input-icon" />
                                </div>
                            </div>
                            <div className="profile__text-input-container">
                                <label htmlFor="" className="profile__input-label profile__input-label_short">Вконтакте</label>
                                <div className="profile__input-container profile__input-contianer_short">
                                    <input type="text" className="profile__input" placeholder={currentUser.Vk} name='Vk' onChange={(e) => handleChange(e)}/>
                                    <img src={vkIco} alt="" className="profile__input-icon" />
                                </div>
                            </div>
                            <div className="profile__text-input-container">
                                <label htmlFor="" className="profile__input-label profile__input-label_short">Дискорд</label>
                                <div className="profile__input-container profile__input-contianer_short">
                                    <input type="text" className="profile__input" placeholder={currentUser.Discord} name='Discord' onChange={(e) => handleChange(e)}/>
                                    <img src={dcIco} alt="" className="profile__input-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile__tests-container profile__info-container'>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Имя пользователя</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" placeholder={currentUser.Name} name='Name' onChange={(e) => handleChange(e)}/>
                                <img src={userIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Почта</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" placeholder={currentUser.Email} name='Email' onChange={(e) => handleChange(e)}/>
                                <img src={emailIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Дата рождения</label>
                            <div className="profile__input-container">
                                <input type="date" className="profile__input" placeholder={currentUser.Birthday} name='Birthday' onChange={(e) => handleChange(e)}/>
                                <img src={dateIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Телефон</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" placeholder={currentUser.Phone} name='Phone' onChange={(e) => handleChange(e)}/>
                                <img src={phoneIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Город</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" placeholder={currentUser.City} name='City' onChange={(e) => handleChange(e)}/>
                                <img src={cityIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">ВУЗ</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" placeholder={currentUser.EDU} name='EDU' onChange={(e) => handleChange(e)}/>
                                <img src={vuzIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Курс</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" placeholder={currentUser.Course} name='Course' onChange={(e) => handleChange(e)}/>
                                <img src={gradeIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__text-input-container">
                            <label htmlFor="" className="profile__input-label">Группа</label>
                            <div className="profile__input-container">
                                <input type="text" className="profile__input" placeholder={currentUser.Group} name='Group' onChange={(e) => handleChange(e)}/>
                                <img src={groupIco} alt="" className="profile__input-icon" />
                            </div>
                        </div>
                        <div className="profile__buttons-container">
                            <button className='profile__grad-btn' onClick={() => handleSubmit()}>Сохранить изменения</button>
                            {/* <button className='profile__grad-btn'>Удалить аккаунт</button> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile