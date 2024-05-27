import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import separatorLine from "../../images/separatorLine.svg"
import ProgressBar from "@ramonak/react-progress-bar";

import currentUserContext from '../../contexts/currentUserContext';
import * as api from "../../utils/api.js"
import { useNavigate } from 'react-router-dom';

function NewsCard() {
  return (
    <div className="news-card">
      <img src="https://u2.9111s.ru/uploads/202302/27/b9ca5c0fcd4b42794c0f9a3f04ebac89.png" alt="" className='news-card__image' />
      <div className='news-card__text-container'>
        <p className="news-card__title">News Title</p>
        <p className="news-card__subtitle">News Subtitle</p>
      </div>
    </div>
  )
}

function TestCard({ name, id }) {
  const navigate = useNavigate()
  return (
    <div className="test-card" onClick={() => id ? navigate(`/results/${id}`) : null}>
      {name ? name : "Специалист по специальным специолизированным специалистам"}
    </div>
  )
}

function Main() {
  const navigate = useNavigate()
  const { currentUser, setCurrentUser } = useContext(currentUserContext)
  const token = localStorage.getItem("token")
  const [lastResults, setLastResults] = useState({
    N: 0,
    H: 0,
    Z: 0,
    V: 0
  })
  const getLastTestResults = () => {
    api
      .getLastTestResults(token)
      .then((res) => {
        setLastResults({ N: Math.round(res.A), H: Math.round(res.B), Z: Math.round(res.C), V: Math.round(res.D) })
      })
      .catch((err) => {
        console.error(err)
      })
  }
  console.log(lastResults)
  useEffect(() => {
    getLastTestResults()
  }, [])


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
  }, [])
  console.log(rawHistory)

  return (
    <div className='app app_main'>
      <div className="main">
        <Header isLoggedIn={true}></Header>
        <div className="main__layout-container">
          <div className="main__profile-info-container main__info-container">
            <img src="https://mygardenia.ru/uploads/pers1.jpg" alt="" className='main__pfp' />
            <img src={separatorLine} alt="" className='main__separator-line' />
            <p className='main__name'>{currentUser.Name}</p>
          </div>
          <div className='main__stats-container main__info-container'>
            <p className="main__stats-title">Результат последнего прохождения</p>
            <p className='main__stats-subtitle'>Специалист по специальным специолизированным специалистам</p>
            <div className="main__stats-categories-container">
              <div className='main__stats-category-container'>
                <p className="main__stats-category-title">Не умею</p>
                <ProgressBar
                  completed={lastResults.N}
                  bgColor="linear-gradient(169deg, #70f 0%, #ab1e96 100%)"
                  width="490px"
                  labelAlignment="outside"
                  baseBgColor="transparent"
                  labelColor="white"
                  labelSize="16px"
                />
              </div>
              <div className='main__stats-category-container'>
                <p className="main__stats-category-title">Хочу научиться</p>
                <ProgressBar
                  completed={lastResults.H}
                  bgColor="linear-gradient(169deg, #70f 0%, #ab1e96 100%)"
                  width="490px"
                  labelAlignment="outside"
                  baseBgColor="transparent"
                  labelColor="white"
                  labelSize="16px"
                />
              </div>
              <div className='main__stats-category-container'>
                <p className="main__stats-category-title">Знаю</p>
                <ProgressBar
                  completed={lastResults.Z}
                  bgColor="linear-gradient(169deg, #70f 0%, #ab1e96 100%)"
                  width="490px"
                  labelAlignment="outside"
                  baseBgColor="transparent"
                  labelColor="white"
                  labelSize="16px"
                />
              </div>
              <div className='main__stats-category-container'>
                <p className="main__stats-category-title">Владею</p>
                <ProgressBar
                  completed={lastResults.V}
                  bgColor="linear-gradient(169deg, #70f 0%, #ab1e96 100%)"
                  width="490px"
                  labelAlignment="outside"
                  baseBgColor="transparent"
                  labelColor="white"
                  labelSize="16px"
                />
              </div>
            </div>

          </div>
          <div className='main__tests-container main__info-container'>
            <h2 className="main__category-title">Новости</h2>
            <div className='main__category-container'>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>

            <h2 className="main__category-title">Популярные тесты</h2>
            <div className='main__category-container'>
              <TestCard />
              <TestCard />
              <TestCard />

            </div>

            <h2 className="main__category-title">Последние пройденные тесты</h2>
            <div className='main__category-container'>
              {
                rawHistory.slice(0,4).map((card, index) => (
                  <div className='history__card-container' key={index}>
                    <TestCard name={card.Special_Name} id={card.ID_Pass} />
                  </div>
                ))
              }
            </div>
            <button className='main__start-test-btn' onClick={() => navigate('/select-test')}>Начать тестирование</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main