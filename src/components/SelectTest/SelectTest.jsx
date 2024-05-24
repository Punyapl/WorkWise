import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import * as api from '../../utils/api.js'
import { useNavigate, useParams } from 'react-router-dom';

function SelectTest() {
    const param = useParams()
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedCode, setSelectedCode] = useState('')
    const [options, setOptions] = useState([]);
    const [rawOptions, setRawOptions] = useState([]);

    function findSpecialNameById(id, specialArray) {
        const foundSpecial = specialArray.find(special => ''+special.ID_Special === id);
        return foundSpecial.Name;
    }

    const getTestNames = () => {
        api
            .getAllTestsNames()
            .then((res) => {
                setOptions(res.map(item => item.Name));
                setRawOptions(res);
            })
    }

    useEffect(() => {
        getTestNames();
    }, [])

    const handleOptionChange = (e) => {
        setSelectedOption(e.value)
        // console.log(e)
    }

    const getIdByName = (name, data) => {
        const item = data.find(item => item.Name === name);
        return item ? item.ID_Special : null;
    };

    const [TestRequest, setTestRequest] = useState({
        ID_Special: 0,
        OTF_Categories: ""
    })

    console.log(param)

    useEffect(() => {
        setTestRequest({
            ID_Special: getIdByName(selectedOption, rawOptions),
            OTF_Categories: selectedCode
        })
    }, [selectedOption, selectedCode])
    console.log(rawOptions)
    console.log(TestRequest)

    // console.log(findSpecialNameById(param.id, rawOptions))
    useEffect(() => {
        // Если параметр id присутствует в URL и есть список опций
        if (param.id && rawOptions.length > 0) {
            const specialName = findSpecialNameById(param.id, rawOptions);
            console.log(specialName)
            setSelectedOption(specialName); // Устанавливаем выбранную опцию

            // Устанавливаем ID специальности в TestRequest
            setTestRequest(prevState => ({
                ...prevState,
                ID_Special: param.id
            }));
        }
    }, [rawOptions]);
    console.log(selectedOption)
    const handleAClick = () => {
        const buttonsContainer = document.querySelector('.select-test__code-select-bg-container')
        setSelectedCode('A')
        buttonsContainer.className = 'select-test__code-select-bg-container'
        buttonsContainer.classList.add('select-test__code-select_a');
    }
    const handleBClick = () => {
        const buttonsContainer = document.querySelector('.select-test__code-select-bg-container')
        setSelectedCode('A,B')
        buttonsContainer.className = 'select-test__code-select-bg-container'
        buttonsContainer.classList.add('select-test__code-select_b');
    }
    const handleCClick = () => {
        const buttonsContainer = document.querySelector('.select-test__code-select-bg-container')
        setSelectedCode('A,B,C')
        buttonsContainer.className = 'select-test__code-select-bg-container'
        buttonsContainer.classList.add('select-test__code-select_c');
    }
    const handleDClick = () => {
        const buttonsContainer = document.querySelector('.select-test__code-select-bg-container')
        setSelectedCode('A,B,C,D')
        buttonsContainer.className = 'select-test__code-select-bg-container'
        buttonsContainer.classList.add('select-test__code-select_d');
    }

    // useEffect(() => {
    //     if (param.id) {
    //         setSelectedOption(findSpecialNameById(param.id, rawOptions))
    //     }

    // }, [rawOptions])

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
                            <button className='select-test__start-test-button' disabled={selectedCode === ''} onClick={() => navigate(`/test/${TestRequest.ID_Special}/${TestRequest.OTF_Categories}`)}>Начать тестирование</button>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default SelectTest