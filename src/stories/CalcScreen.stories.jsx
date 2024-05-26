import OperationScreen from '@components/OperationScreen'

const meta = {
    component: OperationScreen
}

export default meta

{/* I made this stories to test the  input to the Opertaion screen
    The thing is that the user will be shown the first, second and 
    result number depending on very specific conditions
    --If result has a number and there is nothing on num2 an operation 
      just finished and result should be shown
    --If num2 has something and there is an operator, that means that the
      first number has already been inputed and second number is being modified
    --If both conditions aren't met that means we are currently seeing the Default
      and we are modifying number 1
*/}
export const Default = {
    args: {
        num1: "0",
        operation: "",
        num2: "",
        result: ""
    }
}

export const ShowResult = {
    args: {
        num1: "40",
        operation: "",
        num2: "",
        result: "40"
    }
}

export const ShowSecondNumber = {
    args: {
        num1: "12",
        operation: "+",
        num2: "20",
        result: ""
    }
}

{/*On the calculator the program wont allow input longer than 9 characters.
 However just in case I also applied overflow hidden*/}
export const overflow ={
    args: {
        num1: "13333333333333222222222222222222222",
        operation: "",
        num2: "",
        result: ""
    }
}

