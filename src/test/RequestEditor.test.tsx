import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import renderWithRouter from '@/test/helpers/RenderWithRouter';
import * as useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import MainPage from '@pages/MainPage/MainPage';
import * as useUrl from '@shared/lib/hooks/useUrl';

const mockWriteText = vi.fn();
const mockEditorText = 'test text';
const mockedUseEditorUrlState = vi.spyOn(useEditorUrlState, 'default');
const mockedReadUrl = vi.spyOn(useUrl, 'default');

Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
});

const mockedClipboard = vi.spyOn(navigator.clipboard, 'writeText');

describe('Request editor', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the request editor', () => {
    renderWithRouter(<MainPage />);

    const controls = screen.getByTestId('controls');
    const editor = screen.getByTestId('editor-request');

    expect(controls).toBeInTheDocument();
    expect(editor).toBeInTheDocument();
  });

  it('should copy the entered text', async () => {
    mockedUseEditorUrlState.mockReturnValue([mockEditorText, vi.fn()]);
    mockedReadUrl.mockReturnValue({
      readUrl: () => mockEditorText,
      setUrl: () => {},
    });

    renderWithRouter(<MainPage />);

    const copyText = screen.getByTestId('copy-text');

    expect(copyText).toBeInTheDocument();

    await userEvent.click(copyText);

    expect(mockedClipboard).toHaveBeenCalledWith(mockEditorText);
  });
});
