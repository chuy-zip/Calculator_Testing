import PropTypes from 'prop-types';
import '@styles/App.css' 

CalcButton.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    dataTestid: PropTypes.string.isRequired
};

function CalcButton({ content, onClick, dataTestid }) {
    const buttonConfig = {
        'C': {
            class: 'options'
        },
        '+/-': {
            class: 'options'
        },
        'DEL': {
            class: 'options'
        },
        '^': {
            class: 'operationButton'
        },
        '÷': {
            class: 'operationButton'
        },
        'x': {
            class: 'operationButton'
        },
        '-': {
            class: 'operationButton'
        },
        '+': {
            class: 'operationButton'
        },
        '=': {
            class: 'operationButton'
        },
        '0': {
            class: 'numberButton'
        },
        '1': {
            class: 'numberButton'
        },
        '2': {
            class: 'numberButton'
        },
        '3': {
            class: 'numberButton'
        },
        '4': {
            class: 'numberButton'
        },
        '5': {
            class: 'numberButton'
        },
        '6': {
            class: 'numberButton'
        },
        '7': {
            class: 'numberButton'
        },
        '8': {
            class: 'numberButton'
        },
        '9': {
            class: 'numberButton'
        },
        '.': {
            class: 'numberButton'
        }
    };

    return (
        <button
            className={buttonConfig[content]?.class || 'defaultButton'}
            onClick={onClick}
            data-testid={dataTestid}>{content}
            
        </button>
    );
}

export default CalcButton;
