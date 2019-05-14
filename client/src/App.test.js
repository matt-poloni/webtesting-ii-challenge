import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import App from './App';

describe('<App />', () => {
  it('should render', () => {
    render(<App />);
  });

  it("should display 'Current At Bat'", () => {
    const { getByText } = render(<App />);
    getByText(/current at bat/i);
  });

  describe('Dashboard/Display Integration', () => {
    describe('Ball button', () => {
      it("should increase the 'ball' count when starting below 3", () => {
        const { getByText } = render(<App />);
        const button = getByText(/Ball/);
        fireEvent.click(button);
        getByText(/1 ball/i);
        fireEvent.click(button);
        getByText(/2 balls/i);
        fireEvent.click(button);
        getByText(/3 balls/i);
      })
    })
  })
});
