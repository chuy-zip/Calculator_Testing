import PropTypes from 'prop-types'
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

CalcButton.propTypes = {
    content: PropTypes.string.isRequired,
    num1: PropTypes.string.isRequired,
    num2: PropTypes.string.isRequired,
}

function CalcButton({content, num1, num2, result}){

    const buttonConfig = {
        'C': { 
          class: 'options', 
          function: () => { console.log('C button clicked'); } 
        },
        '+/-': { 
          class: 'options', 
          function: () => { console.log('+/- button clicked'); } 
        },
        '%': { 
          class: 'options', 
          function: () => { console.log('% button clicked'); } 
        },
        '÷': { 
          class: 'operationButton', 
          function: () => { console.log('÷ button clicked'); } 
        },
        '7': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '7')); } 
        },
        '8': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '8')); } 
        },
        '9': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '9')); } 
        },
        'x': { 
          class: 'operationButton', 
          function: () => { console.log('x button clicked'); } 
        },
        '4': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '4')); } 
        },
        '5': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '5')); } 
        },
        '6': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '6')); } 
        },
        '-': { 
          class: 'operationButton', 
          function: () => { console.log('- button clicked'); } 
        },
        '1': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '1')); } 
        },
        '2': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '2')); } 
        },
        '3': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '3')); } 
        },
        '+': { 
          class: 'operationButton', 
          function: () => { console.log('+ button clicked'); } 
        },
        '0': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '0')); } 
        },
        '.': { 
          class: 'numberButton', 
          function: () => { result(appendNumber(num1, '.')); } 
        },
        '=': { 
          class: 'operationButton', 
          function: () => { console.log('= button clicked'); } 
        },
      };      

    return (
        <button 
            className= {buttonConfig[content].class}
            onClick={ buttonConfig[content].function }> {content} </button>
    )
}

export default CalcButton