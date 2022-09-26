import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index'

describe('<Button />', () => {
  it('button innerElement', () => {
    const msg = 'button';
    render(<Button>button</Button>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });

  it('button type', () => {
    render(<Button type='primary'>button</Button>);
    expect(screen.queryByText('button')).toHaveClass('el-button--primary')
  })
});
