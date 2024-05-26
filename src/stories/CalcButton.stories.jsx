import { fn } from '@storybook/test'
import CalcButton from '@components/CalcButton'

const meta = {
    component: CalcButton
}

export default meta

export const Default = {
    args: {
        content: 'Hi',
        onClick: fn(),
        dataTestid: 'button-hi'
    }
}

{/* Buttons change depending on the content. Notice numers and options are really similar*/}
export const Number = {
    args: {
        content: '1',
        onClick: fn(),
        dataTestid: 'button-1'
    }
}

export const Operation = {
    args: {
        content: '+',
        onClick: fn(),
        dataTestid: 'button-+'
    }
}

export const Option = {
    args: {
        content: '+/-',
        onClick: fn(),
        dataTestid: 'button-+/-'
    }
}