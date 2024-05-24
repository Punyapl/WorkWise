import React from 'react'
import Header from '../Header/Header'
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";

function Results() {

    const series = [{
        name: 'Процент',
        data: [80, 50, 30, 40, 100, 80, 25, 100, 50, 20],
    }]
    const options = {
        chart: {
            height: 350,
            type: 'radar',
        },
        yaxis: {
            stepSize: 25,
        },
        xaxis: {
            categories: ['Вопрос 1', 'Вопрос 2', 'Вопрос 3', 'Вопрос 4', 'Вопрос 5', 'Вопрос N', 'Вопрос N', 'Вопрос N', 'Вопрос N', 'Вопрос N']
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
                        <h1 className="results__title">Специалист по автоматизации информационно-аналитической деятельности</h1>
                        <div className='results__radar-container'>
                            <ReactApexChart options={options} series={series} type="radar" height={350}></ReactApexChart>
                        </div>

                    </div>
                    <div className="results__texts-container">
                        <div className="results__category-title-container">
                            <div className="results__category-title-line results__category-title-line_V"/>
                            <h2 className="results__category-title">ВЛАДЕЮ</h2>
                            <div className="results__category-title-line results__category-title-line_V"/>
                        </div>
                        
                        <ul className='results__category-list'>
                            {
                                results.V.map((text) => (
                                    <li className='results__category-list-element results__category-list-element_V'>
                                        {text}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="results__category-title-container">
                            <div className="results__category-title-line results__category-title-line_P"/>
                            <h2 className="results__category-title">ПОНИМАЮ</h2>
                            <div className="results__category-title-line results__category-title-line_P"/>
                        </div>
                        <ul className='results__category-list'>
                            {
                                results.P.map((text) => (
                                    <li className='results__category-list-element results__category-list-element_P'>
                                        {text}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="results__category-title-container">
                            <div className="results__category-title-line results__category-title-line_H"/>
                            <h2 className="results__category-title">ХОЧУ НАУЧИТЬСЯ</h2>
                            <div className="results__category-title-line results__category-title-line_H"/>
                        </div>
                        <ul className='results__category-list'>
                            {
                                results.H.map((text) => (
                                    <li className='results__category-list-element results__category-list-element_H'>
                                        {text}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="results__category-title-container">
                            <div className="results__category-title-line results__category-title-line_N"/>
                            <h2 className="results__category-title">НЕ УМЕЮ</h2>
                            <div className="results__category-title-line results__category-title-line_N"/>
                        </div>
                        <ul className='results__category-list'>
                            {
                                results.N.map((text) => (
                                    <li className='results__category-list-element results__category-list-element_N'>
                                        {text}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results