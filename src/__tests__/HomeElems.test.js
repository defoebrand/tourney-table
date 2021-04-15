import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../containers/Home';

describe('The Home page has ', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(<Home />);
  });
  test('a div with class "home"', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('div');
    expect(appElement).toHaveClass('home');
  });
  test('an element with class "score-sheet"', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.score-sheet');
    expect(appElement).toBeValid();
  });
  test('an input with class "form-control"', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('input');
    expect(appElement).toHaveClass('form-control');
  });
  test('an element with class "input-group"', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.input-group');
    expect(appElement).toBeValid();
  });
  test('an element with class "input-group-append "', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.input-group-append ');
    expect(appElement).toBeValid();
  });
  test('an element with class "input-group-text"', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.input-group-text');
    expect(appElement).toBeValid();
  });
  test('a table with class "tourney-table"', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('table');
    expect(appElement).toHaveClass('tourney-table');
  });
  test('a table with a thead element', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('thead');
    expect(appElement).toBeValid();
  });
  test('a table with a tr element', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('tr');
    expect(appElement).toBeValid();
  });
  test('a table with a tbody element', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('tbody');
    expect(appElement).toBeValid();
  });
});
