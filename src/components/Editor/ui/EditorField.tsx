import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { defaultKeymap } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { EditorState } from '@codemirror/state';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView, gutter, keymap, lineNumbers } from '@codemirror/view';

import { useAppContext } from '@/shared/Context/hooks';

type EditorFieldProps = {
  value: string;
  onChange: Dispatch<SetStateAction<string>> | ((value: string) => void);
  isJson: boolean;
  isReadOnly: boolean;
};

const EditorField = ({ onChange, value = '', isJson, isReadOnly }: EditorFieldProps) => {
  const editor = useRef<HTMLPreElement>(null);
  const [code, setCode] = useState(value);
  const { prettifyEditors } = useAppContext();

  const onUpdate = EditorView.updateListener.of((v) => {
    const newValue = v.state.doc.toString();
    setCode(newValue);
    onChange(newValue);
    prettifyEditors(false);
  });

  const codemirrorLanguage = isJson ? json() : javascript();

  useEffect(() => {
    const extensions = [
      keymap.of(defaultKeymap),
      codemirrorLanguage,
      oneDark,
      EditorView.lineWrapping,
      onUpdate,
      EditorState.readOnly.of(isReadOnly),
    ];
    if (!isReadOnly) {
      extensions.push(lineNumbers());
      extensions.push(gutter({}));
    }
    const startState = EditorState.create({
      doc: code,
      extensions,
    });
    const view = new EditorView({
      state: startState,
      parent: editor.current ?? undefined,
    });
    return () => {
      view.destroy();
    };
  }, []);

  return <pre ref={editor} />;
};

EditorField.displayName = 'EditorField';

export default EditorField;
