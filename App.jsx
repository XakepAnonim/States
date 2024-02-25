import React, {useEffect, useState} from 'react';
import './App.css'

function App() {
    const [name, setName] = useState('Vasya');
    const [surname, setSurname] = useState('Pupkin');
    const [age, setAge] = useState(25);
    const [isBanned, setIsBanned] = useState(false);
    const [updName, setUpdName] = useState('')
    const [updSurname, setUpdSurname] = useState('')
    const [intInput, setIntInput] = useState('')
    const [birthYear, setBirthYear] = useState(null);
    const [fahrenheit, setFahrenheit] = useState('');
    const [celsius, setCelsius] = useState('');
    const [inputs, setInputs] = useState([0, 0, 0, 0, 0]);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [res, setRes] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [sum, setSum] = useState(0);
    const [divisors, setDivisors] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [message, setMessage] = useState('');
    const [htmlChecked, setHtmlChecked] = useState(false);
    const [cssChecked, setCssChecked] = useState(false);
    const [jsChecked, setJsChecked] = useState(false);
    const [isAdult, setIsAdult] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];
    const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
    const ageGroups = [
        { value: '', label: 'Выберите возрастную группу' },
        { value: '0-12', label: '0-12 лет' },
        { value: '13-17', label: '13-17 лет' },
        { value: '18-25', label: '18-25 лет' },
        { value: '25+', label: 'Старше 25 лет' },
    ];
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');


    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setDate1(currentDate);
        setDate2(currentDate);
    }, []);

    function handleBanned() {
        setIsBanned(!isBanned);
    }

    function handlePlusAge() {
        setAge(age + 1);
    }

    function handleMinusAge() {
        setAge(age - 1);
    }

    function handleName(event) {
        setUpdName(event.target.value)
    }

    function handleSurname(event) {
        setUpdSurname(event.target.value)
    }

    function handleLength(event) {
        setIntInput(event.target.value)
    }

    function handleAgeChange(event) {
        const newAge = event.target.value;
        setAge(newAge);

        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - parseInt(newAge, 10);
        setBirthYear(birthYear);
    }

    function handleInputChange(event) {
        const inputValue = event.target.value;
        setFahrenheit(inputValue);

        const convertedCelsius = (parseFloat(inputValue) - 32) * 5 / 9;

        setCelsius(convertedCelsius.toFixed(2));
    }

    function handleInputs(i, val) {
        const newInputs = [...inputs];
        newInputs[i] = parseFloat(val) || 0;
        setInputs(newInputs);
    }

    function calcInputs() {
        const sum = inputs.reduce((acc, num) => acc + num, 0);
        const average = sum / inputs.length;
        return isNaN(average) ? 0 : average.toFixed(2);
    }

    function handleSum() {
        const sum = (Number(num1) === 2 && Number(num2) === 2) ? 5 : Number(num1) + Number(num2);
        setResult(`Сумма: ${sum}`);
    }

    function handleProduct() {
        const product = (Number(num1) === 2 && Number(num2) === 2) ? 5 : Number(num1) * Number(num2);
        setResult(`Произведение: ${product}`);
    }

    function handleCalcDate() {
        const firstDate = new Date(date1);
        const secondDate = new Date(date2);

        if (!isNaN(firstDate.getTime()) && !isNaN(secondDate.getTime())) {
            const timeDif = Math.abs(secondDate.getTime() - firstDate.getTime());
            const daysDif = Math.ceil(timeDif / (1000 * 3600 * 24));
            setRes(`Разница: ${daysDif} дней`);
        } else {
            setRes('Некорректные даты');
        }
    }

    function handleSum2(e) {
        setInputValue(e.target.value);
    }

    function calculateSum() {
        const digits = inputValue.split('').map(Number);
        const totalSum = digits.reduce((acc, digit) => acc + digit, 0);
        setSum(totalSum);
    }

    function handleDivs(e) {
        setInputValue2(e.target.value);
    }

    function calcDivisors() {
        const number = parseInt(inputValue2, 10);
        if (!isNaN(number)) {
            const divisors = getDivisors(number);
            const product = divisors.reduce((acc, divisor) => acc * divisor, 1);
            setDivisors(product);
        }
    }

    const getDivisors = (num) => {
        const divisors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

    function handleButton() {
        if (isChecked) {
            setMessage(`Привет, ${name}!`);
        } else {
            setMessage(`Пока ${name}!`);
        }
    }

    function handleCheckbox(event) {
        setIsChecked(event.target.checked);
    }

    function handleCheckbox1() {
        setIsAdult(!isAdult);
    }

    function handleCheckbox2() {
        setIsChecked1(!isChecked1);
    }

    function handleCity(event) {
        setSelectedCity(event.target.value);
    }

    function handleAgeGroup(event) {
        setSelectedAgeGroup(event.target.value);
    }

    function handleRadio(event) {
        setSelectedOption(event.target.value);
    }

    function handleRadio1(event) {
        setSelectedLanguage(event.target.value);
    }


    return (
        <>
            <div>
                <p>{name}</p>
                <p>{surname}</p>
                <p>{age}</p>
            </div>

            <div>
                <input type="text" value={updName}
                       onChange={handleName}/>
                <button onClick={() => setName(updName)}>Изменить
                    Имя
                </button>
                <input type="text" value={updSurname}
                       onChange={handleSurname}/>
                <button
                    onClick={() => setSurname(updSurname)}>Изменить
                    Фамилию
                </button>
            </div>

            <div>
                <p>{isBanned ? 'Забанен' : 'Не забанен'}</p>
                <button onClick={handleBanned}>
                    {isBanned ? 'Разбанить пользователя' : 'Забанить пользователя'}
                </button>
            </div>

            <div>
                <button onClick={handlePlusAge}>Увеличить возраст
                </button>
                <button onClick={handleMinusAge}>Уменьшить возраст
                </button>
            </div>

            <div>
                <input type="text" value={intInput}
                       onChange={handleLength}/>
                <p>{intInput.length}</p>
            </div>

            <label htmlFor="ageInput">Введите возраст: </label>
            <input
                type="number"
                id="ageInput"
                value={age}
                onChange={handleAgeChange}
            />

            {birthYear !== null && (
                <p>Год рождения: {birthYear}</p>
            )}

            <div>
                <label htmlFor="FtoC">°F: </label>
                <input
                    type="text"
                    id="FtoC"
                    value={fahrenheit}
                    onChange={handleInputChange}
                />
                <p>{celsius}°C</p>
            </div>

            <div>
                {inputs.map((value, index) => (
                    <input
                        key={index}
                        type="number"
                        value={value}
                        onChange={(event) => handleInputs(index, event.target.value)}
                    />
                ))}
                <p>Среднее арифметическое: {calcInputs()}</p>
            </div>

            <div>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
                <button onClick={handleSum}>Найти сумму</button>
                <button onClick={handleProduct}>Найти произведение
                </button>
                <p>{result}</p>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="гггг-мм-дд"
                    value={date1}
                    onChange={(e) => setDate1(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="гггг-мм-дд"
                    value={date2}
                    onChange={(e) => setDate2(e.target.value)}
                />
                <button onClick={handleCalcDate}>Рассчитать разницу
                </button>
                <p>{res}</p>
            </div>

            <div>
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleSum2}
                    onBlur={calculateSum}
                />
                <p>Сумма цифр: {sum}</p>
            </div>
            <input
                type="number"
                value={inputValue2}
                onChange={handleDivs}
                onBlur={calcDivisors}
            />
            <p>Произведение делителей: {divisors}</p>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckbox}/> Чекбокс
                </label>
                <button onClick={handleButton}>Нажми</button>
                <p>{message}</p>
            </div>

            <div>
                <label>
                    <input type="checkbox" checked={htmlChecked}
                           onChange={() => setHtmlChecked(!htmlChecked)}/>
                    HTML
                </label>
                <label>
                    <input type="checkbox" checked={cssChecked}
                           onChange={() => setCssChecked(!cssChecked)}/>
                    CSS
                </label>
                <label>
                    <input type="checkbox" checked={jsChecked}
                           onChange={() => setJsChecked(!jsChecked)}/>
                    JavaScript
                </label>

                {htmlChecked && <p>Вы знаете HTML</p>}
                {cssChecked && <p>Вы знаете CSS</p>}
                {jsChecked && <p>Вы знаете JavaScript</p>}
            </div>

            <div>
                <label>
                    <input type="checkbox" checked={isAdult}
                           onChange={handleCheckbox1}/>
                    18 лет
                </label>

                {isAdult && (
                    <div>
                        <p>Тебе 18</p>
                    </div>
                )}
            </div>

            <div>
                <label>
                    <input type="checkbox" checked={isChecked}
                           onChange={handleCheckbox2}/>
                    Показать абзац
                </label>

                {isChecked && (
                    <p>
                        Абзац
                    </p>
                )}
            </div>

            <div>
                Выберите город:
                <select value={selectedCity}
                        onChange={handleCity}>
                    <option value="">Выберите город</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                {selectedCity &&
                    <p>Город: {selectedCity}</p>}
            </div>

            <div>
                <label>
                    Выберите возрастную группу:
                    <select value={selectedAgeGroup}
                            onChange={handleAgeGroup}>
                        {ageGroups.map((group, index) => (
                            <option key={index} value={group.value}>
                                {group.label}
                            </option>
                        ))}
                    </select>
                </label>

                {selectedAgeGroup && <p>Вы выбрали возрастную
                    группу: {selectedAgeGroup}</p>}
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        name="option"
                        value="1"
                        checked={selectedOption === '1'}
                        onChange={handleRadio}
                    />
                    1
                </label>

                <label>
                    <input
                        type="radio"
                        name="option"
                        value="2"
                        checked={selectedOption === '2'}
                        onChange={handleRadio}
                    />
                    2
                </label>

                <label>
                    <input
                        type="radio"
                        name="option"
                        value="3"
                        checked={selectedOption === '3'}
                        onChange={handleRadio}
                    />
                    3
                </label>

                <p>Выбрана: {selectedOption}</p>
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        name="language"
                        value="JavaScript"
                        checked={selectedLanguage === 'JavaScript'}
                        onChange={handleRadio1}
                    />
                    JavaScript
                </label>

                <label>
                    <input
                        type="radio"
                        name="language"
                        value="Python"
                        checked={selectedLanguage === 'Python'}
                        onChange={handleRadio1}
                    />
                    Python
                </label>

                <label>
                    <input
                        type="radio"
                        name="language"
                        value="Java"
                        checked={selectedLanguage === 'Java'}
                        onChange={handleRadio1}
                    />
                    Java
                </label>

                <p>
                    Ваш любимый язык
                    программирования: {selectedLanguage}
                    {selectedLanguage === 'JavaScript' &&
                        <span>. Отличный язык! Поздравляю!</span>}
                </p>
            </div>
        </>
    )
}

export default App;
