import React from 'react';
import { render } from 'react-testing-library';
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
});
