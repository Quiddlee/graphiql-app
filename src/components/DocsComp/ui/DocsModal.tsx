import { Dispatch, SetStateAction, useEffect } from 'react';

import { useAppContext } from '@/shared/Context/hooks';
import { DocsExplorerType, SchemaTypeObj } from '@/shared/types';
import CloseDocsBtn from '@components/DocsComp/ui/CloseDocsBtn';

import DocsRootComp from './DocsRootComp';
import DocsTypeComp from './DocsTypeComp';
import SchemaFallaback from './schemaFallback';
import getEndpointSchema from '../lib/helpers/getEndpointSchema';

type PropsType = {
  setIsDocsShown: Dispatch<SetStateAction<boolean>>;
  explorer: DocsExplorerType;
};

const DocsModal = ({ setIsDocsShown, explorer }: PropsType) => {
  const { currEndpoint, setEndpointSchema, endpointSchema } = useAppContext();
  useEffect(() => {
    getEndpointSchema(currEndpoint, setEndpointSchema);
  }, [currEndpoint, setEndpointSchema]);

  if (!endpointSchema) return <SchemaFallaback closeModal={setIsDocsShown} />;

  const content = explorer.isDocs() ? (
    <DocsRootComp types={endpointSchema.types as SchemaTypeObj[]} explorer={explorer} />
  ) : (
    <DocsTypeComp
      explorer={explorer}
      currType={endpointSchema.types.find((elem) => elem.name === explorer.current()) as SchemaTypeObj}
    />
  );

  return (
    <section className="relative z-20 h-[100dvh] w-[270px] cursor-auto rounded-r-[28px] bg-surface p-3 sm:w-[420px]">
      <CloseDocsBtn
        onClick={() => {
          setIsDocsShown((prev) => !prev);
          explorer.setInitState();
        }}
        className="absolute right-[20px] top-[20px] z-20"
      />
      {content}
    </section>
  );
};

export default DocsModal;
