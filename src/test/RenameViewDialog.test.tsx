import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import * as useView from '@components/ViewList/hooks/useView';
import RenameViewDialog from '@components/ViewList/ui/RenameViewDialog';
import LanguageProvider from '@shared/Context/LanguageContext';

const mockedHandleRenameView = vi.fn();
const mockedUseView = vi.spyOn(useView, 'default');
const mockViews = [{ id: 1, name: 'Test View', variables: '', headers: '', query: '' }];
mockedUseView.mockReturnValue({
  handleActiveView: vi.fn(),
  activeView: 1,
  views: mockViews,
  handleAddView: vi.fn(),
  handleRenameView: mockedHandleRenameView,
  handleDeleteView: vi.fn(),
});

describe('RenameViewDialog', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display the current view name', async () => {
    render(
      <LanguageProvider>
        <RenameViewDialog id={1} onToggle={vi.fn()} open />
      </LanguageProvider>,
    );

    screen.debug();
    const input = screen.getByTestId<HTMLInputElement>('rename-input');
    expect(input.value).toBe('Test View');
  });

  it('should allow the user to rename the view', async () => {
    render(
      <LanguageProvider>
        <RenameViewDialog id={1} onToggle={vi.fn()} open />
      </LanguageProvider>,
    );

    const input = screen.getByTestId<HTMLInputElement>('rename-input');
    await userEvent.clear(input);
    await userEvent.type(input, 'New View Name');

    expect(input.value).toBe('New View Name');
    const button = screen.getByTestId('rename-button');
    await userEvent.click(button);

    expect(mockedHandleRenameView).toHaveBeenCalledTimes(1);
  });

  it('should not allow the user to rename the view to the same name', async () => {
    render(
      <LanguageProvider>
        <RenameViewDialog id={1} onToggle={vi.fn()} open />
      </LanguageProvider>,
    );

    const button = screen.getByTestId('rename-button');
    expect(button).toBeDisabled();
    expect(mockedHandleRenameView).toHaveBeenCalledTimes(0);
  });
});
