export function lengthIsCorrect(number) {
    return number.length <= 9;
}

export function isNegative(num) {
    return num < 0;
}

export function isNumber(str) {
    return /^[+-]?\d+(\.\d+)?$/.test(str);
}

export function plusMinus(num) {
    if (num.charAt(0) === '-') {
        return num.slice(1);
    }
    return '-' + num;
}

export function appendNumber(num1, num2) {
    return num1 + num2;
}

export function isOperator(char) {
    return ['+', '-', 'x', '÷'].includes(char);
}

export function add(num1, num2) {
    return Number(num1) + Number(num2);
}

export function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

export function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

export function divide(num1, num2) {
    if (Number(num2) === 0) {
        alert("Error, division by zero");
        return 0;
    }
    return Number(num1) / Number(num2);
}
