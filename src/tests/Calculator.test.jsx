import Calculator from "@views/Calculator";
import { test } from 'vitest'
import { render, screen } from '@testing-library/react'

test('Calculator render correctly' , () => {
    render( <Calculator/>)
    screen.debug()
})