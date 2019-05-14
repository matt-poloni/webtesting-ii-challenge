import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render', () => {
    render(<Dashboard />);
  });

  describe('Ball button', () => {
    it('should render', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/ball/i);
    })
  })

  describe('Strike button', () => {
    it('should render', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/strike/i);
    })
  })

  describe('Foul button', () => {
    it('should render', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/foul/i);
    })
  })

  describe('Hit button', () => {
    it('should render', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/hit/i);
    })
  })
})