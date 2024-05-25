import React, { useState, useEffect } from "react";
import CalcButton from "@components/CalcButton.jsx";
import {
    lengthIsCorrect,
    isOperator,
    isNegative,
    add,
    subtract,
    multiply,
    divide,
    power,
    deleteLast,
    appendNumber,
    plusMinus
} from '@scripts/calcController.js';
import { isNumber } from "../Scripts/calcController";

function Calculator() {

    const [firstNumber, setFirstNumber] = useState("0");
    const [operation, setOperation] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {

        if (!lengthIsCorrect(firstNumber)) {
            setFirstNumber(deleteLast(firstNumber))
            alert("Total length must be 9 or less. This includes decimal point")

        } else if (!lengthIsCorrect(secondNumber)) {
            setSecondNumber(deleteLast(secondNumber))
            alert("Total length must be 9 or less. This includes decimal point")
        }

        console.log("no1", firstNumber, "op", operation, "no2", secondNumber)

    }, [firstNumber, secondNumber])

    const handleNumberClick = (number) => {
        if (operation === "") {
            setFirstNumber((prev) => appendNumber(prev, number));
        } else {
            setSecondNumber((prev) => appendNumber(prev, number));
        }
    };

    const handleOperationClick = (op) => {
        if (op === "=") {

            if(!(isNumber(firstNumber) && isNumber(secondNumber))){
                alert("An invalid input was found")
                resetCalculator()
                return;
            }

            if (firstNumber && secondNumber && operation) {
                let res;
                switch (operation) {
                    case "+":
                        res = add(firstNumber, secondNumber);
                        break;
                    case "-":
                        res = subtract(firstNumber, secondNumber);
                        break;
                    case "x":
                        res = multiply(firstNumber, secondNumber);
                        break;
                    case "÷":
                        res = divide(firstNumber, secondNumber);
                        break;
                    default:
                        res = firstNumber;
                }

                if (!lengthIsCorrect("" + res)) {
                    alert("The result has more than 9 characters. Try other numbers.");
                    resetCalculator()
                } 
                if (isNegative(res)){
                    alert("An error has occured, The result was negative")
                    resetCalculator()
                }
                else {
                    resetCalculator();
                    setFirstNumber("" + res);
                    setSecondNumber("");
                    setOperation("");
                }
            }
        } else if (op === "C") {
            resetCalculator();
        } else if (op === "DEL") {
            if (operation === "") {
                setFirstNumber((prev) => deleteLast(prev));
            } else {
                setSecondNumber((prev) => deleteLast(prev));
            }
        } else if (op === "+/-") {
            if (operation === "") {
                setFirstNumber((prev) => plusMinus(prev));
            } else {
                setSecondNumber((prev) => plusMinus(prev));
            }
        } else if (op === "^") {
            if (operation === "") {
                setFirstNumber((prev) => "" + power(Number(prev), 2));
            } else {
                setSecondNumber((prev) => "" + power(Number(prev), 2));
            }
        } else {
            setOperation(op);
        }
    };

    const resetCalculator = () => {
        setFirstNumber("0");
        setSecondNumber("");
        setOperation("");
    };

    return (
        <div className="calculatorContainer">
            <div className="operationScreen">
                {secondNumber || operation ? secondNumber : firstNumber}
            </div>
            <div className="keyboard">
                {["C", "+/-", "DEL", "^", "7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "x", "=", "0", ".", "÷"].map(content => (
                    <CalcButton
                        key={content}
                        content={content}
                        onClick={() => {
                            isOperator(content) || content === "=" || content === "C" || content === "DEL" || content === "+/-" || content === "^"
                                ? handleOperationClick(content)
                                : handleNumberClick(content)
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Calculator;
