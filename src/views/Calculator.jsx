import CalcButton from "@components/CalcButton.jsx"
import { useState } from "react"

function Calculator() {
    const [firstNumber, setfirstNumber] = useState(0)
    const [secondNumber, setsecondNumber] = useState(0)

    return (
        <div className="calculatorContainer">
            <div className="operationScreen">
                {firstNumber}
            </div>
            <div className="keyboard">
                  
                <CalcButton content={'C'} type={'option'} result={setfirstNumber}/>
                <CalcButton content={'+'} type={'operation'} result={setfirstNumber}/>
                <CalcButton content={'+/-'} type={'option'} result={setfirstNumber}/>

                <CalcButton content={'-'} type={'operation'} result={setfirstNumber}/>
                <CalcButton content={'x'} type={'operation'} result={setfirstNumber}/>
                <CalcButton content={'÷'} type={'operation'} result={setfirstNumber}/>

                <CalcButton content={'7'} type={'number'} result={setfirstNumber}/>
                <CalcButton content={'8'} type={'number'} result={setfirstNumber}/>
                <CalcButton content={'9'} type={'number'} result={setfirstNumber}/>
                

                <CalcButton content={'4'} type={'number'} result={setfirstNumber}/>
                <CalcButton content={'5'} type={'number'} result={setfirstNumber}/>
                <CalcButton content={'6'} type={'number'} result={setfirstNumber}/>
                

                <CalcButton content={'1'} type={'number'} result={setfirstNumber}/>
                <CalcButton content={'2'} type={'number'}result={setfirstNumber}/>
                <CalcButton content={'3'} type={'number'} result={setfirstNumber}/>

                <CalcButton content={'.'} type={'number'} result={setfirstNumber}/>
                <CalcButton content={'0'} type={'number'} result={setfirstNumber}/>
                <CalcButton content={'='} type={'operation'} result={setfirstNumber}/>
                
            </div>
        </div>
    )
}

export default Calculator