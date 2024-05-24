import React from 'react'
import separatorLine from "../../images/separatorLine.svg"
import Header from '../Header/Header'


function HistoryCard() {
    return (
        <div className="history-card">
            <p className="history-card__name">Специалист по дизайну графических пользовательских интерфейсов</p>
            <button className='history-card__start-test-btn'>Пройти заново</button>
        </div>
    )
}

function History() {
    const cards = [1, 2, 3, 4, 5]
    return (
        <div className="app app_history">
            <div className="history">
                <Header isLoggedIn={true}></Header>
                <div className="history__layout-container">
                    <div className="history__main-container history__info-container">
                        <h2 className="history__title">История прохождения тестов</h2>
                        <ul className="history__cards-container">
                            {
                                cards.map((card) => (
                                    <li className='history__card-container'>
                                        <HistoryCard />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="history__profile-info-container history__info-container">
                        <img src="https://mygardenia.ru/uploads/pers1.jpg" alt="" className='history__pfp' />
                        <img src={separatorLine} alt="" className='history__separator-line' />
                        <p className='history__name'>Борис <br /> Котов</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default History