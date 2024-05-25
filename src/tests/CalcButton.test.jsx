import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import CalcButton from "@components/CalcButton.jsx";

test('Button render correctly' , () => {
    render(<CalcButton/>)
})

test('Button content renders Correctly', () => {
    const {getByText} = render(<CalcButton content={'+'}/>)
    const element = getByText('+')
    expect(element).toBeInTheDocument()

})