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
      getByText(/Ball/);
    })
  })

  describe('Strike button', () => {
    it('should render', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/Strike/);
    })
  })

  describe('Foul button', () => {
    it('should render', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/Foul/);
    })
  })

  describe('Hit button', () => {
    it('should render', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/Hit/);
    })
  })

  describe('Out button', () => {
    it('should render', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/Out/);
    })
  })
})