import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import RenderWithRouter from '@/test/helpers/RenderWithRouter';
import EditorTools from '@components/EditorTools/EditorTools';

const containerRef = { current: document.createElement('div') };

describe('Editor tools', () => {
  it('should render the editor tools', () => {
    RenderWithRouter(<EditorTools containerRef={containerRef} />);

    expect(screen.getByTestId('editor-field')).toBeInTheDocument();
    expect(screen.getByTestId('editor-tools-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('editor-tools-expand')).toBeInTheDocument();
  });

  it('should change the tabs', async () => {
    RenderWithRouter(<EditorTools containerRef={containerRef} />);

    const editorToolsTabs = screen.getByTestId('editor-tools-tabs');
    Object.defineProperty(editorToolsTabs, 'activeTabIndex', { value: 0 });

    expect(screen.getByTestId('editor-tools-variables')).toHaveAttribute('active', 'true');
    expect(screen.getByTestId('editor-tools-headers')).toHaveAttribute('active', 'true');
  });

  it('should expand the tools', async () => {
    RenderWithRouter(<EditorTools containerRef={containerRef} />);

    const expandButton = screen.getByTestId('editor-tools-expand');
    expect(expandButton).toBeInTheDocument();
    expect(screen.getByTestId('editor-tools-container')).toHaveClass('rounded-4xl');

    await userEvent.click(expandButton);
    expect(screen.getByTestId('editor-tools-container')).not.toHaveClass('rounded-4xl');

    await userEvent.click(expandButton);
    expect(screen.getByTestId('editor-tools-container')).toHaveClass('rounded-4xl');
  });
});
