import useScrollbar from '@/shared/lib/hooks/useScrollbar';
import { DocsExplorerType, SchemaTypeObj } from '@/shared/types';

const DocsRootComp = ({ types, explorer }: { types: SchemaTypeObj[]; explorer: DocsExplorerType }) => {
  function clinkHandler(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, typeName: string) {
    e.preventDefault();
    explorer.next(typeName);
  }
  const allTypes = types
    .filter((type) => type.name[0] !== '_' && type.name[1] !== '_')
    .map((type, i) => {
      if (i > 0) {
        return (
          <li key={type.name}>
            <a
              className="text-docs-link-text-color hover:underline"
              href={type.name}
              onClick={(e) => clinkHandler(e, type.name)}
            >
              {type.name}
            </a>
          </li>
        );
      }
      return null;
    });
  const rootRef = useScrollbar<HTMLDivElement>();
  return (
    <div ref={rootRef} className="h-full">
      <div className="rounded-[24px] bg-surface-container px-8 py-10 text-left text-on-surface sm:p-[56px]">
        <h3 className="text-[36px] font-[500] sm:text-[57px]">Docs</h3>
        <p className="sm:text-md mt-10 text-left text-sm">
          A GraphQL schema provides a root type for each kind of operation.
        </p>
      </div>
      <div className="mt-0 pl-10 pr-4 pt-10 text-left font-[500] sm:mt-[56px] sm:p-10 sm:px-[56px]">
        <h4 className="text-2xl sm:text-[28px]">Root types:</h4>
        <p className="mt-4">
          query:&nbsp;
          <a
            className="text-docs-link-text-color hover:underline"
            href={types[0].name}
            onClick={(e) => clinkHandler(e, types[0].name)}
          >
            {types[0].name}
          </a>
        </p>
        <h4 className="mt-8 text-2xl sm:mt-[56px] sm:text-[28px]">All schema types:</h4>
        <ul className="mt-4">{allTypes}</ul>
      </div>
    </div>
  );
};

export default DocsRootComp;
