import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeAll, describe, expect, it } from 'vitest';

import renderWithRouter from '@/test/helpers/RenderWithRouter';
import ROUTES from '@shared/constants/routes';
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

  it('should open and close the response viewer on request editor controls click', async () => {
    renderWithRouter(null, [`/${ROUTES.MAIN}`]);

    const openResponseViewerButton = screen.getByTestId('open-response');
    expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_1fr_.6fr]');

    await userEvent.click(openResponseViewerButton);
    expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_1fr_0fr]');

    await userEvent.click(openResponseViewerButton);
    expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_1fr_.6fr]');
  });

  it('should close the response viewer on close click', async () => {
    renderWithRouter(null, [`/${ROUTES.MAIN}`]);

    const closeResponseViewerButton = screen.getByTestId('close-response');
    expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_1fr_.6fr]');

    await userEvent.click(closeResponseViewerButton);
    expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_1fr_0fr]');
  });
});
