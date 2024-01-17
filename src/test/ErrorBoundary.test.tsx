import { useState } from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '@/components/ErrorFallback/ErrorFallback';

const BreakableComponent = () => {
  const [isError, setIsError] = useState(false);
  if (isError) throw new Error('Omg, you pressed the button!');
  return (
    <div>
      <p>I&apos;m alive !</p>
      <button type="button" onClick={() => setIsError(true)}>
        Throw error
      </button>
    </div>
  );
};

describe('Testing the error boundary components', () => {
  it('It should display fallback UI if error occurs in the App', async () => {
    render(
      <ErrorBoundary fallback={<ErrorFallback />}>
        <BreakableComponent />
      </ErrorBoundary>,
    );
    expect(await screen.findByText("I'm alive !")).toBeInTheDocument();
    const btn = await screen.findByText('Throw error');
    act(() => {
      fireEvent.click(btn);
    });
    expect(await screen.findByText(/Somehow something managed to crash our app.../i));
  });
});
