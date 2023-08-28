import ApiErrorMessage from '@components/ApiErrorMessage/ApiErrorMessage';
import {fireEvent, render, screen} from '@testing-library/react-native';

describe('ApiErrorMessage component', () => {
  it('should render with default props', () => {
    render(<ApiErrorMessage />);

    expect(screen.getByText('Error')).toBeOnTheScreen();
    expect(screen.getByText('Unknown Error')).toBeOnTheScreen();
  });

  it('Should render with a given errro message', () => {
    render(<ApiErrorMessage message="Error Message" title="Custom Error" />);

    expect(screen.getByText('Custom Error')).toBeOnTheScreen();
    expect(screen.getByText('Error Message')).toBeOnTheScreen();
  });

  it('should call callback when button is pressed', () => {
    const mockedFn = jest.fn();
    render(<ApiErrorMessage onRetry={mockedFn} />);

    fireEvent.press(screen.getByText('Retry'));

    expect(mockedFn).toHaveBeenCalled();
  });
});
