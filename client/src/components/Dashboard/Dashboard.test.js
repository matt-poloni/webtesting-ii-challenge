import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render', () => {
    render(<Dashboard />);
  });

  it("should render a 'ball' button", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/ball/i);
  })

  it("should render a 'strike' button", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/strike/i);
  })

  it("should render a 'foul' button", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/foul/i);
  })

  it("should render a 'hit' button", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/hit/i);
  })
})