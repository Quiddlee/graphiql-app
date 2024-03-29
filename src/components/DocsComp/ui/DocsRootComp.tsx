import { FC } from 'react';

import useScrollbar from '@/shared/lib/hooks/useScrollbar';
import { DocsExplorerType, SchemaTypeObj } from '@/shared/types';

type PropsType = {
  translation: {
    title: string;
    subtitle: string;
    rootTypes: string;
    allTypesTitle: string;
  };
  types: SchemaTypeObj[];
  explorer: DocsExplorerType;
};

const DocsRootComp: FC<PropsType> = ({ types, explorer, translation }) => {
  const { title, subtitle, rootTypes, allTypesTitle } = translation;
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
    <div ref={rootRef} className="h-full animate-fade-in-section">
      <div className="animate-fade-in-section rounded-[24px] bg-surface-container px-8 py-10 text-left text-on-surface ease-emphasized-decelerate sm:p-[56px]">
        <h3 className="text-[36px] font-[500] sm:text-[57px]">{title}</h3>
        <p className="sm:text-md mt-10 text-left text-sm">{subtitle}</p>
      </div>
      <div className="mt-0 pl-10 pr-4 pt-10 text-left font-[500] ease-emphasized-decelerate sm:mt-[56px] sm:p-10 sm:px-[56px]">
        <h4 className="animation-delay-200 animate-fade-in-section text-2xl ease-emphasized-decelerate sm:text-[28px]">
          {rootTypes}
        </h4>
        <p className="animation-delay-200 mt-4 animate-fade-in-section ease-emphasized-decelerate">
          query:&nbsp;
          <a
            className="text-docs-link-text-color hover:underline"
            href={types[0].name}
            onClick={(e) => clinkHandler(e, types[0].name)}
          >
            {types[0].name}
          </a>
        </p>
        <h4 className="animation-delay-300 mt-8 animate-fade-in-section text-2xl ease-emphasized-decelerate sm:mt-[56px] sm:text-[28px]">
          {allTypesTitle}
        </h4>
        <ul className="animation-delay-300 mt-4 animate-fade-in-section ease-emphasized-decelerate">{allTypes}</ul>
      </div>
    </div>
  );
};

export default DocsRootComp;
