/* eslint-disable react/no-danger */
import { Dispatch, forwardRef, SetStateAction, SyntheticEvent, useEffect, useRef, useState } from 'react';

import { defaultKeymap } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { EditorState } from '@codemirror/state';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView, keymap } from '@codemirror/view';

type EditorFieldProps = {
  value: string;
  onChange: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

const EditorField = forwardRef<HTMLDivElement, EditorFieldProps>(({ onChange, value = '' }, ref) => {
  const editor = useRef<HTMLPreElement>(null);
  const [code, setCode] = useState(value);

  // function handleInput() {
  //   onChange(code);
  // }

  const onUpdate = EditorView.updateListener.of((v) => {
    const newValue = v.state.doc.toString();
    setCode(newValue);
    onChange(newValue);
  });

  useEffect(() => {
    const startState = EditorState.create({
      doc: code,
      extensions: [keymap.of(defaultKeymap), javascript(), oneDark, EditorView.lineWrapping, onUpdate],
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
});

EditorField.displayName = 'EditorField';

export default EditorField;

// doc: '{"data":{"film":{"title":"A New Hope","director":"George Lucas","releaseDate":"1977-05-25","openingCrawl":"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire`s\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire`s\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."}}}',
// <div
//   data-testid="editor-field"
//   ref={ref}
//   tabIndex={0}
//   aria-label="The text editor"
//   role="textbox"
//   contentEditable="plaintext-only"
//   onInput={handleInput}
//   className="h-fit w-full whitespace-pre-wrap outline-none"
//   dangerouslySetInnerHTML={{ __html: defaultValue.current }}
// />
