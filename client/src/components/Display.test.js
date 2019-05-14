import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
  it('should render', () => {
    render(<Display />);
  });

  it('should display the count equal to the passed in values', () => {
    let inning = {balls: 0, strikes: 0, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/0 balls and 0 strikes/i);
    inning = {balls: 1, strikes: 0, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/1 ball and 0 strikes/i);
    inning = {balls: 2, strikes: 0, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/2 balls and 0 strikes/i);
    inning = {balls: 3, strikes: 0, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/3 balls and 0 strikes/i);
    inning = {balls: 0, strikes: 1, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/0 balls and 1 strike/i);
    inning = {balls: 1, strikes: 1, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/1 ball and 1 strike/i);
    inning = {balls: 2, strikes: 1, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/2 balls and 1 strike/i);
    inning = {balls: 3, strikes: 1, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/3 balls and 1 strike/i);
    inning = {balls: 0, strikes: 2, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/0 balls and 2 strikes/i);
    inning = {balls: 1, strikes: 2, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/1 ball and 2 strikes/i);
    inning = {balls: 2, strikes: 2, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/2 balls and 2 strikes/i);
    inning = {balls: 3, strikes: 2, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/3 balls and 2 strikes/i);
  });

  it('should display the number of outs equal to the passed in value', () => {
    let inning = {balls: 0, strikes: 0, outs: 0}
    render(<Display inning={inning} />)
      .getByText(/are 0 outs/i);
    inning = {balls: 0, strikes: 0, outs: 1}
    render(<Display inning={inning} />)
      .getByText(/is 1 out/i);
    inning = {balls: 0, strikes: 0, outs: 2}
    render(<Display inning={inning} />)
      .getByText(/are 2 outs/i);
  });
})