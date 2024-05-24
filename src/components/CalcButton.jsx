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
          function: () => { console.log('7 button clicked'); } 
        },
        '8': { 
          class: 'numberButton', 
          function: () => { console.log('8 button clicked'); } 
        },
        '9': { 
          class: 'numberButton', 
          function: () => { console.log('9 button clicked'); } 
        },
        'x': { 
          class: 'operationButton', 
          function: () => { console.log('x button clicked'); } 
        },
        '4': { 
          class: 'numberButton', 
          function: () => { console.log('4 button clicked'); } 
        },
        '5': { 
          class: 'numberButton', 
          function: () => { console.log('5 button clicked'); } 
        },
        '6': { 
          class: 'numberButton', 
          function: () => { console.log('6 button clicked'); } 
        },
        '-': { 
          class: 'operationButton', 
          function: () => { console.log('- button clicked'); } 
        },
        '1': { 
          class: 'numberButton', 
          function: () => { console.log('1 button clicked'); } 
        },
        '2': { 
          class: 'numberButton', 
          function: () => { console.log('2 button clicked'); } 
        },
        '3': { 
          class: 'numberButton', 
          function: () => { console.log('3 button clicked'); } 
        },
        '+': { 
          class: 'operationButton', 
          function: () => { console.log('+ button clicked'); } 
        },
        '0': { 
          class: 'numberButton', 
          function: () => { console.log('0 button clicked'); } 
        },
        '.': { 
          class: 'numberButton', 
          function: () => { console.log('. button clicked'); } 
        },
        '=': { 
          class: 'operationButton', 
          function: () => { console.log('= button clicked'); } 
        },
      };      

    return (
        <button 
            className= {buttonConfig[content].class}
            onClick={buttonConfig[content].function}> {content} </button>
    )
}

export default CalcButton