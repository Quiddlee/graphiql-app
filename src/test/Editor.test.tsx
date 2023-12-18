import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Editor from '@components/Editor/Editor';

function EditorWrapper() {
  const [editorState, setEditorState] = useState('hello');

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

describe('Editor', () => {
  it('should render the editor', () => {
    render(<EditorWrapper />);

    expect(screen.getByTestId('editor-field')).toBeInTheDocument();
  });
});
