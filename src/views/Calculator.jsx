import CalcButton from "@components/button"
import { useState } from "react"

function Calculator(){
    const [buttonPressed, setbuttonPressed] = useState(0)
    const [operation, setOperation] = useState("")

    return(
        <div className="calculatorContainer">
            <div className="operationScreen">
                {buttonPressed}
            </div>
            <div className="keyboard">

            </div>
        </div>
    )
}

export default Calculator