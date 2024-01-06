import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';

import { prepareAuthCookie } from '@/shared/helpers/cookieHandlers';
import renderWithRouter from '@/test/helpers/RenderWithRouter';
import ROUTES from '@shared/constants/routes';

describe('NavigationDrawer', () => {
  beforeEach(() => {
    document.cookie = prepareAuthCookie('test@gmail.com');
    renderWithRouter(null, [`/${ROUTES.MAIN}`]);
  });

  it('should render welcome and settings nav items', () => {
    expect(screen.getByTestId('nav-welcome')).toBeInTheDocument();
    expect(screen.getByTestId('nav-settings')).toBeInTheDocument();
  });

  it('should navigate to the welcome page when welcome nav item is clicked', async () => {
    expect(screen.getAllByTestId('editor-field')).toHaveLength(3);
    await userEvent.click(screen.getByTestId('nav-welcome'));
    expect(screen.queryByTestId('editor-field')).toBeNull();
  });

  it('should navigate to the settings page when settings nav item is clicked', async () => {
    expect(screen.getAllByTestId('editor-field')).toHaveLength(3);
    await userEvent.click(screen.getByTestId('nav-settings'));
    expect(screen.queryByTestId('editor-field')).toBeNull();
  });

  it('should render the ViewList component', () => {
    expect(screen.getByTestId('view-list')).toBeInTheDocument();
  });

  it('should render the AddView components within ViewList', () => {
    expect(screen.getByTestId('add-view')).toBeInTheDocument();
  });
});
