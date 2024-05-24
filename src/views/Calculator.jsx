import CalcButton from "@components/CalcButton.jsx"
import { useState } from "react"

function Calculator() {
    const [buttonPressed, setbuttonPressed] = useState(0)
    const [operation, setOperation] = useState("")

    return (
        <div className="calculatorContainer">
            <div className="operationScreen">
                {buttonPressed}
            </div>
            <div className="keyboard">
                <CalcButton content={'C'} type={'option'}/>
                <CalcButton content={'+/-'} type={'option'}/>
                <CalcButton content={'%'} type={'option'}/>
                <CalcButton content={'÷'} type={'operation'}/>

                <CalcButton content={'7'} type={'number'}/>
                <CalcButton content={'8'} type={'number'}/>
                <CalcButton content={'9'} type={'number'}/>
                <CalcButton content={'x'} type={'operation'}/>

                <CalcButton content={'4'} type={'number'}/>
                <CalcButton content={'5'} type={'number'}/>
                <CalcButton content={'6'} type={'number'}/>
                <CalcButton content={'-'} type={'operation'}/>

                <CalcButton content={'1'} type={'number'}/>
                <CalcButton content={'2'} type={'number'}/>
                <CalcButton content={'3'} type={'number'}/>
                <CalcButton content={'+'} type={'operation'}/>

                <CalcButton content={'0'} type={'number'}/>
                <CalcButton content={'.'} type={'number'}/>
                <CalcButton content={'='} type={'number'}/>
                <CalcButton content={'='} type={'operation'}/>

            </div>
        </div>
    )
}

export default Calculator