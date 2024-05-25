import Calculator from "@views/Calculator";
import { expect, test, vi} from 'vitest'
import { render, screen, fireEvent} from '@testing-library/react'

test('Calculator render correctly' , () => {
    render( <Calculator/>)
})

test('renders calculator with initial state', () => {
    render(<Calculator />);
    const operationScreen = screen.getByTestId('operation-screen');
    expect(operationScreen).toHaveTextContent('0'); 
});

test('handles division by zero', () => {
    // Mock the alert function
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<Calculator />);

    // Simulate user interaction
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));

    // Expect the alert to have been called with the correct message
    expect(alertMock).toHaveBeenCalledWith("Error, division by zero");

    // Restore the original alert function
    alertMock.mockRestore();
});

test("Max number width is 9 characters", () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Calculator />);

    fireEvent.click(screen.getByTestId('button-1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));

    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('6'));

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('9'));

    fireEvent.click(screen.getByText('7'));

    expect(alertMock).toHaveBeenCalledWith("Input is already at 9 characters");

    // Restore the original alert function
    alertMock.mockRestore();
})

test("Calculator handles invalid numbers (45.6. / 6 =)", () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Calculator />);

    fireEvent.click(screen.getByTestId('button-4'));
    fireEvent.click(screen.getByTestId('button-5'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByTestId('button-6'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByTestId('button-6'));
    fireEvent.click(screen.getByText('='));

    expect(alertMock).toHaveBeenCalledWith("An invalid input was found");

    // Restore the original alert function
    alertMock.mockRestore();
})

test("Calculator returns error when answer longer than 9 chars (91^9)", () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Calculator />);

    fireEvent.click(screen.getByTestId('button-9'));
    fireEvent.click(screen.getByTestId('button-1'));
    fireEvent.click(screen.getByText('^'));
    fireEvent.click(screen.getByTestId('button-9'));
    fireEvent.click(screen.getByText('='));

    expect(alertMock).toHaveBeenCalledWith("The result has more than 9 characters. Try other numbers.");

    // Restore the original alert function
    alertMock.mockRestore();
})

test("When pressing +/- Calculator counts '-' as character for the max width", () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Calculator />);

    fireEvent.click(screen.getByTestId('button-9'));
    fireEvent.click(screen.getByTestId('button-1'));
    fireEvent.click(screen.getByTestId('button-9'));
    fireEvent.click(screen.getByTestId('button-1'));

    fireEvent.click(screen.getByTestId('button-9'));
    fireEvent.click(screen.getByTestId('button-1'));
    fireEvent.click(screen.getByTestId('button-9'));
    fireEvent.click(screen.getByTestId('button-1'));
    fireEvent.click(screen.getByText('+/-'));

    fireEvent.click(screen.getByTestId('button-9'));


    expect(alertMock).toHaveBeenCalledWith("Input is already at 9 characters");

    // Restore the original alert function
    alertMock.mockRestore();
})

test("Calculator returns error when answer is negative (1-9=)", () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Calculator />);

    fireEvent.click(screen.getByTestId('button-1'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByTestId('button-9'));
    fireEvent.click(screen.getByText('='));

    expect(alertMock).toHaveBeenCalledWith("An error has occurred, The result was negative");

    // Restore the original alert function
    alertMock.mockRestore();
})

test("Calculator returns error when answer is too long (periodic division 22/7=)", () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Calculator />);

    fireEvent.click(screen.getByTestId('button-2'));
    fireEvent.click(screen.getByTestId('button-2'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByTestId('button-7'));
    fireEvent.click(screen.getByText('='));

    expect(alertMock).toHaveBeenCalledWith("The result has more than 9 characters. Try other numbers.");

    // Restore the original alert function
    alertMock.mockRestore();
})