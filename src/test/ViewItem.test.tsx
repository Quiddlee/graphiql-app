import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import renderWithRouter from '@/test/helpers/RenderWithRouter';
import * as useView from '@components/ViewList/hooks/useView';
import ViewItem from '@components/ViewList/ui/ViewItem';

const mockHandleActiveView = vi.fn();
const mockHandleAddView = vi.fn();
const mockedUseView = vi.spyOn(useView, 'default');
const mockView = {
  id: 1,
  variables: '',
  name: 'Test View',
  headers: '',
  query: '',
};
mockedUseView.mockReturnValue({
  handleActiveView: mockHandleActiveView,
  activeView: 1,
  views: [mockView],
  handleAddView: mockHandleAddView,
  handleRenameView: vi.fn(),
  handleDeleteView: vi.fn(),
});

describe('ViewItem', () => {
  beforeEach(() => {
    renderWithRouter(<ViewItem id={1}>Test View</ViewItem>);
    vi.clearAllMocks();
  });

  it('should render the provided children', () => {
    expect(screen.getByText('Test View')).toBeInTheDocument();
  });

  it('should call handleActiveView with the correct id when clicked', async () => {
    await userEvent.click(screen.getByText('Test View'));
    expect(mockHandleActiveView).toHaveBeenCalledWith(1);
  });
});
