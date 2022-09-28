import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './index';

describe('<Card />', () => {
  it('render header', () => {
    const header = '<div>header</div>';
    render(<Card header={header}></Card>);
    expect(screen.queryByText(header)).toBeInTheDocument();
  });

  it('render body', () => {
    const body = '<div>body</div>';
    render(<Card body={body}></Card>);
    expect(screen.queryByText(body)).toBeInTheDocument();
  });

  it('Card shadow', () => {
    const header = '<div>header</div>';
    const shadow = 'always';
    const { container } = render(<Card header={header} shadow={shadow}></Card>);
    expect(container.querySelector(`.is-${shadow}-shadow`)).toBeInTheDocument();
  });
});
