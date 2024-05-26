import '@styles/App.css' 
import CalcButton from '@components/CalcButton'
import { isOperator } from '@scripts/calcController'
import PropTypes from 'prop-types';

CalculatorKeyboard.propTypes = {
    opClick: PropTypes.func.isRequired,
    numClick: PropTypes.func.isRequired,
    keys: PropTypes.array.isRequired
}

function CalculatorKeyboard({opClick, numClick, keys}){
    return(
        <div className="keyboard">
                {keys.map(content => (
                    <CalcButton
                        key={content}
                        content={content}
                        onClick={() => {
                            isOperator(content) || content === "=" || content === "C" || content === "DEL" || content === "+/-" || content === "^"
                                ? opClick(content)
                                : numClick(content)
                        }}
                        dataTestid={`button-${content}`} // Add data-testid
                    />
                ))}
            </div>
    )
}

export default CalculatorKeyboard