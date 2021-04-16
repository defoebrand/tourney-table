import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../pages/Home';

describe('The Home page displays ', () => {
  beforeEach(() => {
    render(<Home />);
  });
  test('"Add Team" button', () => {
    const screenText = screen.getByText(/^Add Team/i);
    expect(screenText).toBeInTheDocument();
  });
  test('"Place" table header', () => {
    const screenText = screen.getByText(/^Place/i);
    expect(screenText).toBeInTheDocument();
  });
  test('"Team" table header', () => {
    const screenText = screen.getByText(/^Team/i);
    expect(screenText).toBeInTheDocument();
  });
  test('"Played" table header', () => {
    const screenText = screen.getByText(/^Played/i);
    expect(screenText).toBeInTheDocument();
  });
  test('"Win" table header', () => {
    const screenText = screen.getByText(/^Win/i);
    expect(screenText).toBeInTheDocument();
  });
  test('"Draw" table header', () => {
    const screenText = screen.getByText(/^Draw/i);
    expect(screenText).toBeInTheDocument();
  });
  test('"Loss" table header', () => {
    const screenText = screen.getByText(/^Loss/i);
    expect(screenText).toBeInTheDocument();
  });
  test('"Points" table header', () => {
    const screenText = screen.getByText(/^Points/i);
    expect(screenText).toBeInTheDocument();
  });
});
