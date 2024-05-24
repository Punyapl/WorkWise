import React, { useState } from 'react'
import Header from '../Header/Header'

function QuestionCard({ text }) {
    const [selectedCode, setSelectedCode] = useState('')
    const handleAClick = () => {
        setSelectedCode('A')
    }
    const handleBClick = () => {
        setSelectedCode('B')
    }
    const handleCClick = () => {
        setSelectedCode('C')
    }
    const handleDClick = () => {
        setSelectedCode('D')
    }
    return (
        <div className="question-card">
            <p className="question-card__text">{text}</p>
            <div className="question-card__answer-select">
                <button className={selectedCode === 'A' ? "question-card__answer-select-button question-card__answer-select_a" : "question-card__answer-select-button"} name='A' onClick={handleAClick}>Не умею</button>
                <button className={selectedCode === 'B' ? "question-card__answer-select-button question-card__answer-select_b" : "question-card__answer-select-button"} name='B' onClick={handleBClick}>Хочу научиться</button>
                <button className={selectedCode === 'C' ? "question-card__answer-select-button question-card__answer-select_c" : "question-card__answer-select-button"} name='C' onClick={handleCClick}>Понимаю</button>
                <button className={selectedCode === 'D' ? "question-card__answer-select-button question-card__answer-select_d" : "question-card__answer-select-button"} name='D' onClick={handleDClick}>Владею</button>
            </div>
        </div>
    )
}

function Test() {
    const questions = ['вопрос 1', "вопрос 2", "вопрос 3", "вопрос 4", "вопрос 5"]
    return (
        <div className="app app_test">
            <div className="test">
                <Header isLoggedIn={true}></Header>
                <div className="test__questions-container">
                    <ul className='test__question-list'>
                        {
                            questions.map((question) => (
                                <li className='test__question-element'>
                                    <QuestionCard text={question} />
                                </li>

                            ))
                        }
                    </ul>
                    <button className="test__end-test-button">Узнать результаты</button>
                </div>
            </div>
        </div>
    )
}

export default Test