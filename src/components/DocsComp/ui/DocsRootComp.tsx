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
      <div className="rounded-[24px] bg-surface-container px-10 py-[56px] text-left text-on-surface sm:px-[56px]">
        <h3 className="text-[57px] font-[500]">Docs</h3>
        <p className="text-md mt-10 text-left">A GraphQL schema provides a root type for each kind of operation.</p>
      </div>
      <div className="mt-[56px] p-10 text-left font-[500] sm:px-[56px]">
        <h4 className="text-[28px]">Root types:</h4>
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
        <h4 className="mt-[56px] text-[28px]">All schema types:</h4>
        <ul className="mt-4">{allTypes}</ul>
      </div>
    </div>
  );
};

export default DocsRootComp;
