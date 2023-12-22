// AFTER LOGIC FOR SAVING AND FETCHING ENDPOINT SHEMA WILL BE ADDED - MUST REMOVE SCHEMA IMPORT AND REPLACE IT FOR DOWNLOADED SCHEMA IN FURTHER CODE

import { swapiSchema } from '@/shared/constants/schemaData';
import { DocsExplorerType, SchemaTypeObj } from '@/shared/types';

import CloseDocsBtn from './CloseDocsBtn';
import DocsRootComp from './DocsRootComp';
import DocsTypeComp from './DocsTypeComp';

type PropsType = {
  setIsDocsShown: React.Dispatch<React.SetStateAction<boolean>>;
  explorer: DocsExplorerType;
};

const DocsModal = ({ setIsDocsShown, explorer }: PropsType) => {
  const content = explorer.isDocs() ? (
    <DocsRootComp types={swapiSchema.data.__schema.types as SchemaTypeObj[]} explorer={explorer} />
  ) : (
    <DocsTypeComp
      explorer={explorer}
      currType={swapiSchema.data.__schema.types.find((elem) => elem.name === explorer.current()) as SchemaTypeObj}
    />
  );
  return (
    <section className="relative z-10 min-h-[100dvh] w-[420px] cursor-auto bg-surface p-3">
      <CloseDocsBtn
        onClick={() => {
          setIsDocsShown((prev) => !prev);
          explorer.setInitState();
        }}
        className="absolute right-[20px] top-[20px]"
      />
      {content}
    </section>
  );
};

export default DocsModal;
