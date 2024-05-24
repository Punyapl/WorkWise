import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { useNavigate, useParams } from 'react-router-dom'
import * as api from '../../utils/api.js'

function QuestionCard({ text, questionID, onAnswerSelect }) {
    const [selectedCode, setSelectedCode] = useState('')
    const handleAClick = () => {
        setSelectedCode(1);
        onAnswerSelect(questionID, 1);
    };
    const handleBClick = () => {
        setSelectedCode(2);
        onAnswerSelect(questionID, 2);
    };
    const handleCClick = () => {
        setSelectedCode(3);
        onAnswerSelect(questionID, 3);
    };
    const handleDClick = () => {
        setSelectedCode(4);
        onAnswerSelect(questionID, 4);
    };


    return (
        <div className="question-card">
            <p className="question-card__text">{text}</p>
            <div className="question-card__answer-select">
                <button className={selectedCode === 1 ? "question-card__answer-select-button question-card__answer-select_a" : "question-card__answer-select-button"} name="1" onClick={handleAClick}>Не умею</button>
                <button className={selectedCode === 2 ? "question-card__answer-select-button question-card__answer-select_b" : "question-card__answer-select-button"} name="2" onClick={handleBClick}>Хочу научиться</button>
                <button className={selectedCode === 3 ? "question-card__answer-select-button question-card__answer-select_c" : "question-card__answer-select-button"} name="3" onClick={handleCClick}>Понимаю</button>
                <button className={selectedCode === 4 ? "question-card__answer-select-button question-card__answer-select_d" : "question-card__answer-select-button"} name="4" onClick={handleDClick}>Владею</button>
            </div>
        </div>
    )
}

const QuestionsComponent = ({ rawQuestions, onAnswerSelect }) => {
    const [questions, setQuestions] = useState([]);

    const extractQuestions = (data) => {
        // Начинаем с пустого массива, который будет заполняться вопросами
        let questions = [];

        // Функция для рекурсивного обхода массива
        const extractFromOTFs = (otfs) => {
            otfs.forEach(otf => {
                otf.TFs.forEach(tf => {
                    tf.TDs.forEach(td => {
                        questions.push({
                            TD_ID: td.TD_ID,
                            TD_Name: td.TD_Name
                        });
                    });
                });
            });
        };

        // Вызываем функцию для начального массива OTFs
        extractFromOTFs(data.OTFs);

        return questions;
    };
  
    useEffect(() => {
        if (rawQuestions && Object.keys(rawQuestions).length !== 0) {
          setQuestions(extractQuestions(rawQuestions));
        }
      }, [rawQuestions]);
  
    // Отобразить массив вопросов
    const renderQuestions = () => {
      return questions.map((question, index) => (
        <li className='test__question-element' key={index}>
            <QuestionCard text={question.TD_Name} questionID={question.TD_ID} onAnswerSelect={onAnswerSelect}/>
          {/* <p>{question.TD_ID}: {question.TD_Name}</p> */}
        </li>
      ));
    };
  
    return (
      <div>
        <ul className='test__question-list'>
            {renderQuestions()}
        </ul>
        
      </div>
    );
  };

function Test() {
    const navigate = useNavigate()
    const param = useParams()
    const token = localStorage.getItem("token")
    const [TestRequest, setTestRequest] = useState({
        ID_Special: param.special,
        OTF_Categories: param.categories
    })

    const [rawQuestions, setRawQuestions] = useState({})
    const [answers, setAnswers] = useState([]);

    console.log(answers)

    const getQuestions = () => {
        api
            .getTestQuestions(TestRequest.ID_Special, TestRequest.OTF_Categories)
            .then((res) => {
                setRawQuestions(res)
                
            }).catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        getQuestions()
        
    }, [TestRequest])
    console.log(rawQuestions)

    const handleAnswerSelect = (questionID, answer) => {
        // Добавляем выбранный ответ в состояние answers
        const updatedAnswers = [...answers];
        updatedAnswers.push({ ID_TD: questionID, Answer: answer });
        setAnswers(updatedAnswers);
    };

 

    const submitAnswersHandler = () => {
        api
            .submitAnswers(token, rawQuestions.ID_Special, answers)
            .then((res) => {
                console.log(res.message)
                navigate(`/results/${res.ID_Pass}`)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div className="app app_test">
            <div className="test">
                <Header isLoggedIn={true}></Header>
                <div className="test__questions-container">
                    <QuestionsComponent rawQuestions={rawQuestions} onAnswerSelect={handleAnswerSelect}/>
                    <button className="test__end-test-button" onClick={() => submitAnswersHandler()}>Узнать результаты</button>
                </div>
            </div>
        </div>
    )
}

export default Test