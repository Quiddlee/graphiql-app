import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '../App';

describe('App', () => {
  it('It is a dumb test', () => {
    render(<App />);
    expect(screen.getByText('Trulssssala')).toBeInTheDocument();
  });
});
