import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api.js'

function Results() {

    const param = useParams()
    const [rawResults, setRawResults] = useState({})
    const [rawAnswers, setRawAnswers] = useState({})
    const getSpider = () => {
        api
            .getSpider(param.id)
            .then((res) => {
                setRawResults(res)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const getAnswers = () => {
        api
            .getAnswersStats(param.id)
            .then((res) => {
                setRawAnswers(res)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        if (param.id) {
            getSpider()
            getAnswers()
        }

    }, [])

    console.log(rawAnswers)

    function extractOTFData(data) {
        const otfNames = [];
        const scales = [];

        if (data && data.OTFs && Array.isArray(data.OTFs)) {
            data.OTFs.forEach(otf => {
                otfNames.push(otf.OTF_Name.substring(0, 50) + '...');
                // Переводим масштаб в проценты (от 0 до 100)
                scales.push((otf.Scale / 4) * 100);
            });
        }

        // return { otfNames, scales };
        setOtfNames(otfNames)
        setScales(scales)
    }

    const [otfNames, setOtfNames] = useState([])
    const [scales, setScales] = useState([])

    useEffect(() => {
        if (rawResults) {
            extractOTFData(rawResults)
        }
    }, [rawResults])
    console.log(rawResults)
    const series = [{
        name: 'Процент',
        data: scales,
    }]
    const options = {
        chart: {
            height: 350,
            type: 'radar',
        },
        yaxis: {
            stepSize: 10,
        },
        xaxis: {
            categories: otfNames
        },
        fill: {
            colors: ['#71B7F3']
        }
    }

    const results = {
        V: ['Que1', 'Que2', 'Que3'],
        P: ['Que4', 'Que5'],
        H: ['Que6'],
        N: ['Que7', 'Que8']
    }
    return (
        <div className="app">
            <div className="results">
                <Header isLoggedIn={true}></Header>
                <div className="results__main-container">
                    <div className="results__diagram-container">
                        <h1 className="results__title">{rawResults.Special_Name}</h1>
                        <div className='results__radar-container'>
                            <ReactApexChart options={options} series={series} type="radar" ></ReactApexChart>
                        </div>

                    </div>
                    {
                        Object.keys(rawAnswers).length !==0 ?
                        <div className="results__texts-container">
                            <div className="results__category-title-container">
                                <div className="results__category-title-line results__category-title-line_V" />
                                <h2 className="results__category-title">ВЛАДЕЮ</h2>
                                <div className="results__category-title-line results__category-title-line_V" />
                            </div>

                            <ul className='results__category-list'>
                                {
                                    rawAnswers.one.TD_Names.map((answer) => (
                                        <li className='results__category-list-element results__category-list-element_V'>
                                            {answer}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="results__category-title-container">
                                <div className="results__category-title-line results__category-title-line_P" />
                                <h2 className="results__category-title">ПОНИМАЮ</h2>
                                <div className="results__category-title-line results__category-title-line_P" />
                            </div>
                            <ul className='results__category-list'>
                                {
                                    rawAnswers.two.TD_Names.map((text) => (
                                        <li className='results__category-list-element results__category-list-element_P'>
                                            {text}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="results__category-title-container">
                                <div className="results__category-title-line results__category-title-line_H" />
                                <h2 className="results__category-title">ХОЧУ НАУЧИТЬСЯ</h2>
                                <div className="results__category-title-line results__category-title-line_H" />
                            </div>
                            <ul className='results__category-list'>
                                {
                                    rawAnswers.three.TD_Names.map((text) => (
                                        <li className='results__category-list-element results__category-list-element_H'>
                                            {text}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="results__category-title-container">
                                <div className="results__category-title-line results__category-title-line_N" />
                                <h2 className="results__category-title">НЕ УМЕЮ</h2>
                                <div className="results__category-title-line results__category-title-line_N" />
                            </div>
                            <ul className='results__category-list'>
                                {
                                    rawAnswers.four.TD_Names.map((text) => (
                                        <li className='results__category-list-element results__category-list-element_N'>
                                            {text}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        :
                        <></>
                    }

                </div>
            </div>
        </div>
    )
}

export default Results