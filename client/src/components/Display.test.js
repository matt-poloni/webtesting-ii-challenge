import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
  it('should render', () => {
    render(<Display />);
  });

  it('should display the count equal to the passed in values', () => {
    let count = {balls: 3, strikes: 2}
    const { getByText } = render(<Display count={count} />);
    getByText(/3 balls and 2 strikes/i);
  });
})