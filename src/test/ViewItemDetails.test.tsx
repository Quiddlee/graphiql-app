import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import renderWithRouter from '@/test/helpers/RenderWithRouter';
import * as useView from '@components/ViewList/hooks/useView';
import Details from '@components/ViewList/ui/Details';

const mockedUseView = vi.spyOn(useView, 'default');
const mockViews = [
  { id: 1, name: 'Test View', variables: '', headers: '', query: '' },
  { id: 2, name: 'Test View2', variables: '', headers: '', query: '' },
];
mockedUseView.mockReturnValue({
  handleActiveView: vi.fn(),
  activeView: 1,
  views: mockViews,
  handleAddView: vi.fn(),
  handleRenameView: vi.fn(),
  handleDeleteView: vi.fn(),
});

describe('Details', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the details menu', () => {
    renderWithRouter(<Details id={1} />);

    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByTestId('open-details')).toBeInTheDocument();
  });

  it('should open the details menu on click', async () => {
    renderWithRouter(<Details id={1} />);

    await userEvent.click(screen.getByTestId('open-details'));
    expect(screen.getByTestId('details-menu')).toBeInTheDocument();
  });

  it('should open the rename dialog when the rename menu item is clicked', async () => {
    renderWithRouter(<Details id={1} />);

    await userEvent.click(screen.getByTestId('open-details'));
    await userEvent.click(screen.getByTestId('rename-view'));
    expect(screen.getByTestId('rename-dialog')).toBeInTheDocument();
  });

  it('should open the delete dialog when the delete menu item is clicked', async () => {
    renderWithRouter(<Details id={1} />);

    await userEvent.click(screen.getByTestId('open-details'));
    await userEvent.click(screen.getByTestId('delete-view'));
    expect(screen.getByTestId('delete-dialog')).toBeInTheDocument();
  });

  it('should disable the delete menu item when there is only one view', async () => {
    mockedUseView.mockReturnValue({
      handleActiveView: vi.fn(),
      activeView: 1,
      views: [{ id: 1, name: 'Test View', variables: '', headers: '', query: '' }],
      handleAddView: vi.fn(),
      handleRenameView: vi.fn(),
      handleDeleteView: vi.fn(),
    });

    renderWithRouter(<Details id={1} />);

    await userEvent.click(screen.getByTestId('open-details'));
    expect(screen.getByTestId('delete-view')).toBeDisabled();
  });
});
