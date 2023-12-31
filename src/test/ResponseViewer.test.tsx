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

  // it('should open and close the response viewer on request editor controls click', async () => {
  //   renderWithRouter(null, [`/${ROUTES.MAIN}`]);
  //
  //   screen.debug();
  //
  //   const openResponseViewerButton = screen.getByTestId('open-response');
  //   const responseViewer = screen.getByTestId('response-viewer');
  //   expect(responseViewer).toHaveStyle({
  //     transform: 'scale3d(0, 0, 0)',
  //     opacity: '0',
  //   });
  //
  //   await userEvent.click(openResponseViewerButton);
  //   expect(responseViewer).toHaveStyle({
  //     transform: 'scale3d(1, 1, 1)',
  //     opacity: '1',
  //   });
  //
  //   await userEvent.click(openResponseViewerButton);
  //   expect(responseViewer.clientWidth).toBe(0);
  // });
  //
  // it('should close the response viewer on close click', async () => {
  //   renderWithRouter(null, [`/${ROUTES.MAIN}`]);
  //
  //   const closeResponseViewerButton = screen.getByTestId('close-response');
  //   const responseViewer = screen.getByTestId('response-viewer');
  //   console.log(responseViewer.clientWidth);
  //
  //   expect(responseViewer.clientWidth).not.toBe(0);
  //
  //   await userEvent.click(closeResponseViewerButton);
  //   expect(responseViewer.clientWidth).toBe(0);
  // });
});
