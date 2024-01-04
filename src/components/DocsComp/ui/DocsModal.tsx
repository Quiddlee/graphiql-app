import { Dispatch, SetStateAction, useEffect } from 'react';

import introspectionQuery from '@/shared/constants/introspectionQuery';
import { useAppContext } from '@/shared/Context/hooks';
import { DocsExplorerType, SchemaTypeObj } from '@/shared/types';
import CloseDocsBtn from '@components/DocsComp/ui/CloseDocsBtn';

import DocsRootComp from './DocsRootComp';
import DocsTypeComp from './DocsTypeComp';

type PropsType = {
  setIsDocsShown: Dispatch<SetStateAction<boolean>>;
  explorer: DocsExplorerType;
};

const DocsModal = ({ setIsDocsShown, explorer }: PropsType) => {
  const { currEndpoint, setEndpointSchema, endpointSchema } = useAppContext();
  useEffect(() => {
    async function fetchDocs(endpoint: string) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(introspectionQuery),
      });
      if (response.ok && response.status === 200) {
        const res = await response.json();
        setEndpointSchema(res.data.__schema);
      }
      return null;
    }
    fetchDocs(currEndpoint);
  }, [currEndpoint, setEndpointSchema]);

  if (!endpointSchema) return null;
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
