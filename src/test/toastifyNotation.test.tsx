import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/App';
import toastifyNotation from '@/shared/helpers/toastifyNotation';

describe('Testing for toastify notaions', () => {
  it('Should display toastify alert with proper message', async () => {
    render(<App />);
    toastifyNotation('Test msg');
    expect((document.body.firstChild as HTMLDivElement).innerText).toMatch('Test msg');
  });
});
