import PropTypes from 'prop-types'

CalcButton.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

function CalcButton({ content, type}){
    const buttonTypes ={
        'number': 'numberButton',
        'operation': 'operationButton',
        'option': 'options' 
    }
    return (
        <button className= {buttonTypes[type]}> {content} </button>
    )
}

export default CalcButton