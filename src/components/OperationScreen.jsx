import '@styles/App.css' 
import PropTypes from 'prop-types';

OperationScreen.propTypes = {
    num1: PropTypes.string,
    operation: PropTypes.string,
    num2: PropTypes.string,
    result: PropTypes.string
}

function OperationScreen({ num1, operation, num2, result}) {

    return (
        <div className="operationScreen" data-testid="operation-screen">
            {(num2 || operation) ? (result && !num2) ? result : num2 : num1}
        </div>
    )

}

export default OperationScreen