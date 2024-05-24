import React, { useContext, useEffect, useState } from 'react'
import separatorLine from "../../images/separatorLine.svg"
import Header from '../Header/Header'
import currentUserContext from '../../contexts/currentUserContext';
import * as api from '../../utils/api.js'
import { useNavigate } from 'react-router-dom';

function HistoryCard({name, id}) {
    const navigate = useNavigate()
    return (
        <div className="history-card">
            <p className="history-card__name" onClick={() => navigate(`/results/${id}`)}>{name}</p>
            <button className='history-card__start-test-btn' onClick={() => navigate(`/select-test/${id}`)}>Пройти заново</button>
        </div>
    )
}

function History() {
    const {currentUser, setCurrentUser} = useContext(currentUserContext)
    const token = localStorage.getItem("token")

    const cards = [1, 2, 3, 4, 5]
    const [rawHistory, setRawHistory] = useState([])
    const getHistory = () => {
        api
            .getHistory(token)
            .then((res) => {
                setRawHistory(res)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        getHistory()
    },[])
    console.log(rawHistory)

    return (
        <div className="app app_history">
            <div className="history">
                <Header isLoggedIn={true}></Header>
                <div className="history__layout-container">
                    <div className="history__main-container history__info-container">
                        <h2 className="history__title">История прохождения тестов</h2>
                        <ul className="history__cards-container">
                            {
                                rawHistory.map((card, index) => (
                                    <li className='history__card-container' key={index}>
                                        <HistoryCard name={card.Special_Name} id={card.ID_Pass}/>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="history__profile-info-container history__info-container">
                        <img src="https://mygardenia.ru/uploads/pers1.jpg" alt="" className='history__pfp' />
                        <img src={separatorLine} alt="" className='history__separator-line' />
                        <p className='history__name'>{currentUser.Name}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default History