import useScrollbar from '@shared/lib/hooks/useScrollbar';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';

const PLACEHOLDER_TEXT = `{
  "errors": [
    {
      "message": "Syntax Error: Unexpected Name \\"mutationdsdsadsads\\"",
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

const ResponseViewer = () => {
  const rootRef = useScrollbar<HTMLDivElement>();

  return (
    <div
      ref={rootRef}
      className="h-full w-full justify-between overflow-y-scroll rounded-4xl bg-surface-container py-7 pl-7 pr-4"
    >
      <div className="flex h-fit w-fit">
        <pre className="h-full w-full whitespace-break-spaces">{PLACEHOLDER_TEXT}</pre>
        <IconButton>
          <Icon>close</Icon>
        </IconButton>
      </div>
    </div>
  );
};

export default ResponseViewer;
