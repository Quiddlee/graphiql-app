import { swapiSchema } from '@/shared/constants/schemaData';
import { SchemaTypeObj } from '@/shared/types';

import CloseDocsBtn from './CloseDocsBtn';
import DocsRootComp from './DocsRootComp';
import useSchemaExplorer from '../lib/hooks/useSchemaExplorer';

type PropsType = {
  setIsDocsShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DocsModal = ({ setIsDocsShown }: PropsType) => {
  const schemaExplorer = useSchemaExplorer();
  return (
    <section className="relative max-w-[420px] bg-surface p-3">
      <CloseDocsBtn onClick={() => setIsDocsShown((prev) => !prev)} className="absolute right-[20px] top-[20px]" />
      <DocsRootComp types={swapiSchema.data.__schema.types as SchemaTypeObj[]} explorer={schemaExplorer} />
    </section>
  );
};

export default DocsModal;
