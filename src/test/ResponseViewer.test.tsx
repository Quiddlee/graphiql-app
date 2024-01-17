import { screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';

import renderWithRouter from '@/test/helpers/RenderWithRouter';
import { prepareAuthCookie } from '@shared/helpers/cookieHandlers';

describe('Response viewer', () => {
  beforeAll(() => {
    document.cookie = prepareAuthCookie('test@gmail.com');
  });

  it('should render the response viewer', () => {
    renderWithRouter(null, ['/main']);

    expect(screen.getByTestId('response-viewer')).toBeInTheDocument();
    expect(screen.getByTestId('editor-tools')).toBeInTheDocument();
    expect(screen.getByTestId('editor-request')).toBeInTheDocument();
  });
});
