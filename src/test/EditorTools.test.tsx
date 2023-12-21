import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import renderWithRouter from '@/test/helpers/RenderWithRouter';
import EditorTools from '@components/EditorTools/EditorTools';

const containerRef = { current: document.createElement('div') };

describe('Editor tools', () => {
  it('should render the editor tools', () => {
    renderWithRouter(<EditorTools containerRef={containerRef} />);

    expect(screen.getByTestId('editor-field')).toBeInTheDocument();
    expect(screen.getByTestId('editor-tools-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('editor-tools-expand')).toBeInTheDocument();
  });

  it('should change the tabs', async () => {
    renderWithRouter(<EditorTools containerRef={containerRef} />);

    const editorToolsTabs = screen.getByTestId('editor-tools-tabs');
    Object.defineProperty(editorToolsTabs, 'activeTabIndex', { value: 0 });

    expect(screen.getByTestId('editor-tools-variables')).toHaveAttribute('active', 'true');
    expect(screen.getByTestId('editor-tools-headers')).toHaveAttribute('active', 'true');
  });
});
