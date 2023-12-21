/* eslint-disable react/no-danger */
import { useCallback } from 'react';

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

  const handleClick = useCallback(
    function handleClick() {
      setUrl(urlParams.RESPONSE_OPEN, 'false');
    },
    [setUrl],
  );

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
          <pre
            className="h-full w-full whitespace-break-spaces"
            dangerouslySetInnerHTML={{ __html: currentResponse }}
          />
        </article>
      </div>
    </>
  );
};

export default ResponseViewer;
