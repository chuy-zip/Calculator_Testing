import React, { useState, useEffect } from "react";
import CalcButton from "@components/CalcButton.jsx";
import { lengthIsCorrect, 
    isNegative, 
    isNumber, 
    plusMinus, 
    appendNumber, 
    isOperator, 
    add, 
    subtract, 
    multiply, 
    divide } from '@scripts/calcController.js';

function Calculator() {
    const [firstNumber, setFirstNumber] = useState("0");
    const [secondNumber, setSecondNumber] = useState("0");

    useEffect (() => {

        if(!lengthIsCorrect(firstNumber)){
            setFirstNumber( firstNumber.substring(0, firstNumber.length - 1))
            alert("Total length must be 9 or less. This includes decimal point")
        }

    }, [firstNumber])

    return (
        <div className="calculatorContainer">
            <div className="operationScreen">
                {firstNumber}
            </div>
            <div className="keyboard">
                <CalcButton content={'C'} type={'option'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'+'} type={'operation'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'+/-'} type={'option'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'-'} type={'operation'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'x'} type={'operation'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'÷'} type={'operation'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'7'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'8'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'9'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'4'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'5'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'6'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'1'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'2'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'3'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'.'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'0'} type={'number'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'='} type={'operation'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
            </div>
        </div>
    );
}

export default Calculator;
