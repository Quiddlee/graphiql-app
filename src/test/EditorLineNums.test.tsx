import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import LineNumbers from '@components/Editor/ui/LineNumbers';

function Wrapper() {
  const [size, setSize] = useState(0);

  return (
    <>
      <button
        type="button"
        aria-label="button"
        data-testid="size-button"
        onClick={() => setSize((prevState) => prevState + 1)}
      />
      <LineNumbers size={size} />
    </>
  );
}

describe('LineNumbers', () => {
  it('should render the editor editor line numbers', () => {
    render(<LineNumbers size="10" />);

    expect(screen.getByTestId('line-numbers')).toBeInTheDocument();
  });

  it('should render the specified number of nums', async () => {
    render(<Wrapper />);

    const sizeButton = screen.getByTestId('size-button');

    expect(sizeButton).toBeInTheDocument();
    expect(screen.getByTestId('line-numbers').children).toHaveLength(0);

    await userEvent.click(sizeButton);
    expect(screen.getByTestId('line-numbers').children).toHaveLength(1);

    await Promise.all([userEvent.click(sizeButton), userEvent.click(sizeButton), userEvent.click(sizeButton)]);

    expect(screen.getByTestId('line-numbers').children).toHaveLength(4);
  });
});
