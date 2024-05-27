import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import separatorLine from "../../images/separatorLine.svg"
import ProgressBar from "@ramonak/react-progress-bar";

import currentUserContext from '../../contexts/currentUserContext';
import * as api from "../../utils/api.js"
import { useNavigate } from 'react-router-dom';

function NewsCard({ img, title, subtitle }) {
  return (
    <div className="news-card">
      <img src={img} alt="" className='news-card__image' />
      <div className='news-card__text-container'>
        <p className="news-card__title">{title}</p>
        <p className="news-card__subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

function TestCard({ name, id, type }) {
  // console.log(type, id)
  const navigate = useNavigate()
  return (
    <div className="test-card" onClick={() => id ? navigate(type === "his" ? `/results/${id}` : `/select-test/${id}`) : null}>
      {name}
    </div>
  )
}

function Main() {
  const navigate = useNavigate()
  const { currentUser, setCurrentUser } = useContext(currentUserContext)
  const token = localStorage.getItem("token")
  const [lastResults, setLastResults] = useState({
    Name: "",
    N: 0,
    H: 0,
    Z: 0,
    V: 0
  })
  const getLastTestResults = () => {
    api
      .getLastTestResults(token)
      .then((res) => {
        console.log(res)
        setLastResults({ Name: res.Special_Name, N: Math.round(res.Scores_Percentages.A), H: Math.round(res.Scores_Percentages.B), Z: Math.round(res.Scores_Percentages.C), V: Math.round(res.Scores_Percentages.D) })
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

  const [popularTests, setPopularTests] = useState([])
  const getPopular = () => {
    api
      .getPopularTests()
      .then((res) => {
        setPopularTests(res)
      })
  }

  useEffect(() => {
    getPopular()
  }, [])

  const News = [
    {
      img: "https://psychbook.ru/assets/i/ai/4/4/4/i/3013220.jpg",
      title: "Сайт открылся!",
      subtitle: "ура..."
    },
    {
      img: "https://avatars.dzeninfra.ru/get-zen_doc/3723909/pub_60532fc853791e021b941431_6054ca9816795163808d5d71/scale_1200",
      title: "Как перестать волноваться перед экзаменами",
      subtitle: "студенты советуют отчислится"
    },
    {
      img: "https://sun9-71.userapi.com/impg/v-b1lMaq5jSet8lAXK5ddOV0Z5-fqEJpEGVWBw/6nhxiPhrL54.jpg?size=590x604&quality=95&sign=25e83d567fd64d3f910c94fd5a75004d&type=album",
      title: "Не кормите голубей",
      subtitle: "студенты подбирают хлеб"
    },

  ]

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
            <p className='main__stats-subtitle'>{lastResults.Name}</p>
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
              {
                News.map((card, index) => (
                  <div className='history__card-container' key={index}>
                    <NewsCard title={card.title} subtitle={card.subtitle} img={card.img}/>
                  </div>
                ))
              }
            </div>

            <h2 className="main__category-title">Популярные тесты</h2>
            <div className='main__category-container'>
              {
                popularTests.slice(0, 3).map((card, index) => (
                  <div className='history__card-container' key={index}>
                    <TestCard name={card.Special_Name} id={card.Special_ID} type={'reg'} />
                  </div>
                ))
              }

            </div>

            <h2 className="main__category-title">Последние пройденные тесты</h2>
            <div className='main__category-container'>
              {
                rawHistory.slice(0, 4).map((card, index) => (
                  <div className='history__card-container' key={index}>
                    <TestCard name={card.Special_Name} id={card.ID_Pass} type={'his'} />
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