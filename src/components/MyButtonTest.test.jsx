import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import MyButton from './MyButton';

describe('MyButton tests', () => {
	test('first render test', () => {
		render(<MyButton />);
		const btn = screen.getByTestId('btn');
		screen.debug();
		expect(btn).toBeInTheDocument();
		expect(screen.queryByTestId('awesomeIcon')).not.toBeInTheDocument();
	});

	test('awesome icon appears after user clicks on button within 3 sec', () => {
		render(<MyButton />);
		jest.useFakeTimers();
		fireEvent.click(screen.getByTestId('btn'));
		act(() => {
			jest.advanceTimersByTime(3000);
		});
		expect(screen.getByTestId('awesomeIcon')).toBeInTheDocument();
		screen.debug();
		jest.useRealTimers();
	});
});
