import React, { useState } from 'react'
import Header from '../Header/Header'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function SelectTest() {
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedCode, setSelectedCode] = useState('')
    const options = [
        'Специалист по специальным специолизированным специалистам1', 'Специалист по специальным специолизированным специалистам2', 'Специалист по специальным специолизированным специалистам3'
    ];


    const handleOptionChange = (e) => {
        setSelectedOption(e.value)
        // console.log(e)
    }

    // const handleButtonClick = (e) => {
    //     // console.log(e)
    //     setSelectedCode(e.target.name)
    //     console.log(selectedCode)
        
    //     switch (selectedCode) {
    //         case 'A':
    //             buttonsContainer.className = 'select-test__code-select-bg'
    //             buttonsContainer.classList.add('select-test__code-select_a');
    //             break
    //         case 'B':
    //             buttonsContainer.className = 'select-test__code-select-bg'
    //             buttonsContainer.classList.add('select-test__code-select_b');
    //             break
    //         case 'C':
    //             buttonsContainer.className = 'select-test__code-select-bg'
    //             buttonsContainer.classList.add('select-test__code-select_c');
    //             break
    //         case 'D':
    //             buttonsContainer.className = 'select-test__code-select-bg'
    //             buttonsContainer.classList.add('select-test__code-select_d');
    //             break

    //     }
    // }
    
    const handleAClick = () => {
        const buttonsContainer = document.querySelector('.select-test__code-select-bg-container')
        setSelectedCode('A')
        buttonsContainer.className = 'select-test__code-select-bg-container'
        buttonsContainer.classList.add('select-test__code-select_a');
    }
    const handleBClick = () => {
        const buttonsContainer = document.querySelector('.select-test__code-select-bg-container')
        setSelectedCode('B')
        buttonsContainer.className = 'select-test__code-select-bg-container'
        buttonsContainer.classList.add('select-test__code-select_b');
    }
    const handleCClick = () => {
        const buttonsContainer = document.querySelector('.select-test__code-select-bg-container')
        setSelectedCode('C')
        buttonsContainer.className = 'select-test__code-select-bg-container'
        buttonsContainer.classList.add('select-test__code-select_c');
    }
    const handleDClick = () => {
        const buttonsContainer = document.querySelector('.select-test__code-select-bg-container')
        setSelectedCode('D')
        buttonsContainer.className = 'select-test__code-select-bg-container'
        buttonsContainer.classList.add('select-test__code-select_d');
    }
    return (
        <div className="app app_select-test">
            <div className="select-test">
                <Header isLoggedIn={true}></Header>
                <div className="select-test__main-container">
                    <h1 className="select-test__title">Выберите профессию для тестирования</h1>
                    <Dropdown
                        options={options}
                        onChange={(e) => handleOptionChange(e)}
                        value={selectedOption}
                        placeholder="Выберите профессию"
                        className='select-test__dropdown-container'
                        controlClassName='select-test__dropdown-control'
                        menuClassName='select-test__dropdown-menu'
                        arrowClassName='select-test__dropdown-arrow'
                    />
                    {
                        selectedOption !== '' &&
                        <div className="select-test__code-select-container">
                            <h2 className="select-test__code-select-title">Выберите код обобщенной трудовой функции</h2>
                            <div className="select-test__code-select">
                                <div className="select-test__code-select-bg-container"><div className="select-test__code-select-bg"></div></div>
                                <button className="select-test__code-select-button" name='A' onClick={handleAClick}>А</button>
                                <button className="select-test__code-select-button" name='B' onClick={handleBClick}>B</button>
                                <button className="select-test__code-select-button" name='C' onClick={handleCClick}>C</button>
                                <button className="select-test__code-select-button" name='D' onClick={handleDClick}>D</button>
                            </div>
                            <button className='select-test__start-test-button' disabled={selectedCode === ''}>Начать тестирование</button>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default SelectTest