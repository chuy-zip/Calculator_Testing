import React, { useState, useEffect } from "react";
import CalcButton from "@components/CalcButton.jsx";
import {
    lengthIsCorrect,
    isNegative,
    isNumber,
    plusMinus,
    appendNumber,
    isOperator,
    add,
    subtract,
    multiply,
    divide
} from '@scripts/calcController.js';

function Calculator() {
    const [firstNumber, setFirstNumber] = useState("0");
    const [secondNumber, setSecondNumber] = useState("0");

    useEffect(() => {

        if (!lengthIsCorrect(firstNumber)) {
            setFirstNumber(firstNumber.substring(0, firstNumber.length - 1))
            alert("Total length must be 9 or less. This includes decimal point")
        }

    }, [firstNumber])

    return (
        <div className="calculatorContainer">
            <div className="operationScreen">
                {firstNumber}
            </div>
            <div className="keyboard">

                <CalcButton content={'C'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'+/-'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'DEL'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'^'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />

                <CalcButton content={'7'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'8'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'9'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'+'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />

                <CalcButton content={'4'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'5'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'6'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'-'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />


                <CalcButton content={'1'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'2'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'3'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'x'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />

                <CalcButton content={'='} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'0'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'.'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />
                <CalcButton content={'÷'} result={setFirstNumber} num1={firstNumber} num2={secondNumber} />


            </div>
        </div>
    );
}

export default Calculator;
