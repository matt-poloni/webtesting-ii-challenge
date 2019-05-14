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

      it("should reset the 'ball' count when already at 3", () => {
        const { getByText } = render(<App />);
        const button = getByText(/Ball/);
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        getByText(/3 balls/i);
        fireEvent.click(button);
        getByText(/0 balls/i);
      })
    })

    describe('Strike button', () => {
      it("should increase the 'strike' count when starting below 2", () => {
        const { getByText } = render(<App />);
        const button = getByText(/Strike/);
        fireEvent.click(button);
        getByText(/1 strike/i);
        fireEvent.click(button);
        getByText(/2 strikes/i);
      })

      it("should reset the 'strike' count when already at 2", () => {
        const { getByText } = render(<App />);
        const button = getByText(/Strike/);
        fireEvent.click(button);
        fireEvent.click(button);
        getByText(/2 strikes/i);
        fireEvent.click(button);
        getByText(/0 strikes/i);
      })
    })
  })
});
