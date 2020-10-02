import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {

    const [userValue, setUserValue] = useState('');
    const [userValue1, setUserValue1] = useState('');
    const [operator, setOperator] = useState('');

    function getUserOperator(op) {
        setUserValue1(userValue);
        setOperator(op);
        setUserValue('');
    }
    function calculatePercentage() {
        let result = parseFloat(userValue) / 100;
        setUserValue('' + result);
    }
    function handleOperator(op) {
        let result = 0;
        switch (op) {
            case '=':
                switch (operator) {
                    case '+':
                        result = parseFloat(userValue1) + parseFloat(userValue);
                        setUserValue('' + result);
                        break;
                    case '-':
                        result = parseFloat(userValue1) - parseFloat(userValue);
                        setUserValue('' + result);
                        break;
                    case '/':
                        result = parseFloat(userValue1) / parseFloat(userValue);
                        setUserValue('' + result);
                        break;
                    case '*':
                        result = parseFloat(userValue1) * parseFloat(userValue);
                        setUserValue('' + result);
                        break;
                    default:
                        break;
                }
        }
    }
    return (
        <div className="calculator__container">
            {/* header */}
            <input className="calculator__header" value={userValue} readOnly type="text" />
            {/* buttons */}
            <div className="calculator__buttonsContainer">
                <div className="calculator__leftButtons">
                    <button className="calculator__button calculator__specialOperator" onClick={() => setUserValue('')}>AC</button>
                    <button className="calculator__button calculator__specialOperator">+/-</button>
                    <button className="calculator__button calculator__specialOperator" onClick={() => { calculatePercentage() }}>%</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '7')}>7</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '8')}>8</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '9')}>9</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '4')}>4</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '5')}>5</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '6')}>6</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '1')}>1</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '2')}>2</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '3')}>3</button>
                    <button className="calculator__button calculator__zeroButton" onClick={() => setUserValue(userValue + '0')}>0</button>
                    <button className="calculator__button" onClick={() => setUserValue(userValue + '.')}>.</button>
                </div>
                <div className="calculator__rightButtons">
                    <button className="calculator__operation" onClick={() => { getUserOperator('/') }}>/</button>
                    <button className="calculator__operation" onClick={() => { getUserOperator('*') }}>*</button>
                    <button className="calculator__operation" onClick={() => { getUserOperator('-') }}>-</button>
                    <button className="calculator__operation" onClick={() => { getUserOperator('+') }}>+</button>
                    <button className="calculator__operation" onClick={() => { handleOperator('=') }}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;