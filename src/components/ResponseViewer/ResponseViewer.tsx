/* eslint-disable react/no-danger */
import { useCallback, useEffect, useRef } from 'react';

import { defaultKeymap } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { EditorState } from '@codemirror/state';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView, keymap } from '@codemirror/view';

import { useAppContext } from '@/shared/Context/hooks';
import urlParams from '@shared/constants/urlParams';
import useScrollbar from '@shared/lib/hooks/useScrollbar';
import useUrl from '@shared/lib/hooks/useUrl';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';

// const PLACEHOLDER_TEXT = `{
//   "errors": [
//     {
//       "message": "Syntax Error: te",
//       "locations": [
//         {
//           "line": 33,
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//           "column": 1
//         }
//       ]
//     }
//   ]
// }`;

const ResponseViewer = () => {
  const rootRef = useScrollbar<HTMLDivElement>();
  const { currentResponse } = useAppContext();
  const { setUrl } = useUrl();
  const editor = useRef<HTMLPreElement>(null);

  const handleClick = useCallback(
    function handleClick() {
      setUrl(urlParams.RESPONSE_OPEN, 'false');
    },
    [setUrl],
  );

  useEffect(() => {
    const startState = EditorState.create({
      doc: currentResponse,
      // doc: '{"data":{"film":{"title":"A New Hope","director":"George Lucas","releaseDate":"1977-05-25","openingCrawl":"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire`s\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire`s\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."}}}',
      extensions: [keymap.of(defaultKeymap), json(), oneDark, EditorView.lineWrapping],
    });
    const view = new EditorView({
      state: startState,
      parent: editor.current ?? undefined,
    });
    return () => {
      view.destroy();
    };
  }, [currentResponse]);

  return (
    <>
      <IconButton data-testid="close-response" className="absolute right-4 top-4 z-10" onClick={handleClick}>
        <Icon>close</Icon>
      </IconButton>
      <div
        data-testid="response-viewer"
        ref={rootRef}
        className="h-full w-full justify-between overflow-y-scroll rounded-4xl bg-surface-container py-7 pl-7 pr-4"
      >
        <article className="h-fit w-fit pr-10">
          {/* <pre
            className="h-full w-full whitespace-break-spaces"
            dangerouslySetInnerHTML={{ __html: currentResponse }}
          /> */}
          <pre ref={editor} />
        </article>
      </div>
    </>
  );
};

export default ResponseViewer;
