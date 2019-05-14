import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
  it('should render', () => {
    render(<Display />);
  });

  it('should display the count equal to the passed in values', () => {
    let count = {balls: 0, strikes: 0}
    render(<Display count={count} />)
      .getByText(/0 balls and 0 strikes/i);
    count = {balls: 1, strikes: 0}
    render(<Display count={count} />)
      .getByText(/1 ball and 0 strikes/i);
    count = {balls: 2, strikes: 0}
    render(<Display count={count} />)
      .getByText(/2 balls and 0 strikes/i);
    count = {balls: 3, strikes: 0}
    render(<Display count={count} />)
      .getByText(/3 balls and 0 strikes/i);
    count = {balls: 0, strikes: 1}
    render(<Display count={count} />)
      .getByText(/0 balls and 1 strike/i);
    count = {balls: 1, strikes: 1}
    render(<Display count={count} />)
      .getByText(/1 ball and 1 strike/i);
    count = {balls: 2, strikes: 1}
    render(<Display count={count} />)
      .getByText(/2 balls and 1 strike/i);
    count = {balls: 3, strikes: 1}
    render(<Display count={count} />)
      .getByText(/3 balls and 1 strike/i);
    count = {balls: 0, strikes: 2}
    render(<Display count={count} />)
      .getByText(/0 balls and 2 strikes/i);
    count = {balls: 1, strikes: 2}
    render(<Display count={count} />)
      .getByText(/1 ball and 2 strikes/i);
    count = {balls: 2, strikes: 2}
    render(<Display count={count} />)
      .getByText(/2 balls and 2 strikes/i);
    count = {balls: 3, strikes: 2}
    render(<Display count={count} />)
      .getByText(/3 balls and 2 strikes/i);
  });
})