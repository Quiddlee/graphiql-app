import { useAppContext } from '@/shared/Context/hooks';
import useScrollbar from '@shared/lib/hooks/useScrollbar';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';

import EditorField from '../Editor/ui/EditorField';

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

  return (
    <>
      <IconButton data-testid="close-response" className="absolute right-4 top-4 z-10">
        <Icon>close</Icon>
      </IconButton>
      <div
        data-testid="response-viewer"
        ref={rootRef}
        className="h-full w-full justify-between overflow-y-scroll rounded-4xl bg-surface-container py-7 pl-7 pr-4"
      >
        <article className="h-fit w-fit pr-10">
          <EditorField key={currentResponse} value={currentResponse} onChange={() => {}} />
        </article>
      </div>
    </>
  );
};

export default ResponseViewer;
