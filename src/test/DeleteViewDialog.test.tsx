import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import ROUTES from '@/shared/constants/routes';
import * as useView from '@components/ViewList/hooks/useView';
import DeleteViewDialog from '@components/ViewList/ui/DeleteViewDialog';
import LanguageProvider from '@shared/Context/LanguageContext';
import { prepareAuthCookie } from '@shared/helpers/cookieHandlers';

import renderWithRouter from './helpers/RenderWithRouter';

const mockedHandleDeleteView = vi.fn();
const mockedUseView = vi.spyOn(useView, 'default');
const mockViews = [
  { id: 1, name: 'Test View', variables: '', headers: '', query: '' },
  { id: 2, name: 'Test View 2', variables: '', headers: '', query: '' },
];
mockedUseView.mockReturnValue({
  handleActiveView: vi.fn(),
  activeView: 1,
  views: mockViews,
  handleAddView: vi.fn(),
  handleRenameView: vi.fn(),
  handleDeleteView: mockedHandleDeleteView,
});

describe('RenameViewDialog', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  beforeEach(() => {
    document.cookie = prepareAuthCookie('test@gmail.com');
  });

  it('should render without crashing', () => {
    render(
      <LanguageProvider>
        <DeleteViewDialog id={1} onToggle={vi.fn()} open />
      </LanguageProvider>,
    );
  });

  it('should deletes the view when delete button is clicked', async () => {
    renderWithRouter(null, [`/${ROUTES.MAIN}`]);

    expect(screen.getAllByTestId('view-item')).toHaveLength(2);

    await userEvent.click(screen.getAllByTestId('open-details')[0]);
    await userEvent.click(screen.getAllByTestId('delete-view')[0]);
    await userEvent.click(screen.getByTestId('delete-button'));

    expect(mockedHandleDeleteView).toHaveBeenCalledTimes(1);
  });
});
