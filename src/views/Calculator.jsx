import { useState } from "react";
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

    const handleNumberClick = (number) => {
        if (operation === "" && lengthIsCorrect(firstNumber+".")) {
            setFirstNumber((prev) => appendNumber(prev, number));
            
        } else if(operation !== "" && lengthIsCorrect(secondNumber+".")){
            setSecondNumber((prev) => appendNumber(prev, number));
        }
        else {
            alert("Input is already at 9 characters")
        }
    };

    const handleOperationClick = (op) => {
        if (op === "=") {

            if (!(isNumber(firstNumber) && isNumber(secondNumber))) {
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
                    case "^":
                        res = power(firstNumber, secondNumber);
                        break;
                    default:
                        res = firstNumber;
                }

                if (!lengthIsCorrect("" + res)) {
                    resetCalculator()
                    alert("The result has more than 9 characters. Try other numbers.");
                    
                }
                else if (isNegative(res)) {
                    resetCalculator()
                    alert("An error has occured, The result was negative")
                    
                } else {
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
            if ((operation === "" && lengthIsCorrect(firstNumber+".")) || (operation === "" && isNegative(firstNumber)) ) {
                setFirstNumber((prev) => plusMinus(prev));
            } else if(operation !== "" && lengthIsCorrect(firstNumber+".") ||  (operation === "" && isNegative(secondNumber)) ) {
                setSecondNumber((prev) => plusMinus(prev)); 
            } else {
                alert("Input is already at 9 characters")
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
