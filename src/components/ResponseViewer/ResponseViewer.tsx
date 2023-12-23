import { FC } from 'react';

import useScrollbar from '@shared/lib/hooks/useScrollbar';
import { HandleExpand } from '@shared/types';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';

const PLACEHOLDER_TEXT = `{
  "errors": [
    {
      "message": "Syntax Error: te",
      "locations": [
        {
          "line": 33,
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
        }
      ]
    }
  ]
}`;

type ResponseViewerProps = {
  onResponseClose: HandleExpand;
};

const ResponseViewer: FC<ResponseViewerProps> = ({ onResponseClose }) => {
  const rootRef = useScrollbar<HTMLDivElement>();

  return (
    <>
      <IconButton
        data-testid="close-response"
        className="absolute right-4 top-4 z-10"
        onClick={() => onResponseClose(false)}
      >
        <Icon>close</Icon>
      </IconButton>
      <div
        data-testid="response-viewer"
        ref={rootRef}
        className="h-full w-full justify-between overflow-y-scroll rounded-4xl bg-surface-container py-7 pl-7 pr-4"
      >
        <article className="h-fit w-fit pr-10">
          <pre className="h-full w-full whitespace-break-spaces">{PLACEHOLDER_TEXT}</pre>
        </article>
      </div>
    </>
  );
};

export default ResponseViewer;
