import { fn } from '@storybook/test'
import CalcKeyboard from '@components/CalculatorKeyboard'

const meta = {
    component: CalcKeyboard
}

export default meta

export const Default = {
    args: {
        numClick: fn(),
        opClick: fn(),
        keys: ["C", "+/-", "DEL", "^", "7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "x", "=", "0", ".", "÷"]
    }
}

export const showDifferentButtons = {
    args: {
        numClick: fn(),
        opClick: fn(),
        keys: ["1", "+/-", "x"]
    }
}

export const lessButtons = {
    args: {
        numClick: fn(),
        opClick: fn(),
        keys: ["C", "+/-", "DEL", "^", "7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "x"]
    }
}


