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

      it('should increase the outs when adding the third strike w/ < 2 outs', () => {
        const { getByText } = render(<App />);
        const button = getByText(/Strike/);
        fireEvent.click(button);
        fireEvent.click(button);
        getByText(/0 outs/i);
        fireEvent.click(button);
        getByText(/1 out/i);
      })

      it('should reset the outs when adding the third strike w/ 2 outs', () => {
        const { getByText } = render(<App />);
        const strikeBtn = getByText(/Strike/);
        const outBtn = getByText(/Out/);
        fireEvent.click(outBtn);
        fireEvent.click(outBtn);
        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);
        getByText(/2 outs/i);
        fireEvent.click(strikeBtn);
        getByText(/0 outs/i);
      })
    })
  
    describe('Foul button', () => {
      it("should increase the 'strike' count when starting below 2", () => {
        const { getByText } = render(<App />);
        const button = getByText(/Foul/);
        fireEvent.click(button);
        getByText(/1 strike/i);
        fireEvent.click(button);
        getByText(/2 strikes/i);
      })
  
      it("should not alter the 'strike' count when already at 2", () => {
        const { getByText } = render(<App />);
        const button = getByText(/Foul/);
        fireEvent.click(button);
        fireEvent.click(button);
        getByText(/2 strikes/i);
        fireEvent.click(button);
        getByText(/2 strikes/i);
      })
    })
  
    describe('Hit button', () => {
      it('should reset the count after being clicked', () => {
        const { getByText } = render(<App />);
        const ballBtn = getByText(/Ball/);
        const strikeBtn = getByText(/Strike/);
        const hitBtn = getByText(/Hit/);
        fireEvent.click(ballBtn);
        fireEvent.click(strikeBtn);
        getByText(/1 ball and 1 strike/i);
        fireEvent.click(hitBtn);
        getByText(/0 balls and 0 strikes/i);
      });
    })
  
    describe('Out button', () => {
      it("should increase the number of outs when starting below 2", () => {
        const { getByText } = render(<App />);
        const button = getByText(/Out/);
        fireEvent.click(button);
        getByText(/is 1 out/i);
        fireEvent.click(button);
        getByText(/are 2 outs/i);
      })
  
      it("should reset the number of outs when already at 2", () => {
        const { getByText } = render(<App />);
        const button = getByText(/Out/);
        fireEvent.click(button);
        fireEvent.click(button);
        getByText(/are 2 outs/i);
        fireEvent.click(button);
        getByText(/are 0 outs/i);
      })
    })
  })
});
