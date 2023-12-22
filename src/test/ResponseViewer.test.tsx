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

  // TODO: fix this test

  // it('should open and close the response viewer on request editor controls click', async () => {
  //   renderWithRouter(null, [`/${ROUTES.MAIN}`]);
  //
  //   const openResponseViewerButton = screen.getByTestId('open-response');
  //   expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_auto]');
  //
  //   await userEvent.click(openResponseViewerButton);
  //   expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_1fr_0fr]');
  //
  //   await userEvent.click(openResponseViewerButton);
  //   expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_auto]');
  // });

  // it('should close the response viewer on close click', async () => {
  //   renderWithRouter(null, [`/${ROUTES.MAIN}`]);
  //
  //   const closeResponseViewerButton = screen.getByTestId('close-response');
  //   expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_auto]');
  //
  //   await userEvent.click(closeResponseViewerButton);
  //   expect(screen.getByTestId('main-layout')).toHaveClass('grid-cols-[384px_1fr_0fr]');
  // });
});
