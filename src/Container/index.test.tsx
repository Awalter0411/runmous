import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container, Header, Main, Aside, Footer } from './index';

describe('<Header />', () => {
  it('header children', () => {
    const msg = 'header';
    render(<Header>{msg}</Header>);
    expect(screen.queryByText(msg)).toHaveTextContent('header');
  });

  it('header render', () => {
    render(<Header height="300px">header</Header>);
    expect(screen.queryByText('header')).toHaveStyle(`
      height: 300px
    `);
  });
});

describe('<Main />', () => {
  it('aside children', () => {
    const msg = 'main';
    render(<Main>{msg}</Main>);
    expect(screen.queryByText(msg)).toHaveTextContent('main');
  });
});

describe('<Footer />', () => {
  it('footer children', () => {
    const msg = 'footer';
    render(<Footer>{msg}</Footer>);
    expect(screen.queryByText(msg)).toHaveTextContent('footer');
  });

  it('footer render', () => {
    render(<Footer height="300px">footer</Footer>);
    expect(screen.queryByText('footer')).toHaveStyle(`
      height: 300px
    `);
  });
});

describe('<Aside />', () => {
  it('aside children', () => {
    const msg = 'aside';
    render(<Aside>{msg}</Aside>);
    expect(screen.queryByText(msg)).toHaveTextContent('aside');
  });

  it('aside render', () => {
    render(<Aside width="300px">aside</Aside>);
    expect(screen.queryByText('aside')).toHaveStyle(`
      width: 300px
    `);
  });
});

describe('<Container/>', () => {
  it('container children', () => {
    render(<Container>container</Container>);
    expect(screen.queryByText('container')?.className).toContain('is-vertical');
  });
});
