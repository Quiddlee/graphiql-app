import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import DocsModalLayout from '@/layouts/DocsModalLayout';
import { useAppContext } from '@/shared/Context/hooks';
import { DocsExplorerType, SchemaTypeObj } from '@/shared/types';
import CloseDocsBtn from '@components/DocsComp/ui/CloseDocsBtn';

import DocsLoader from './DocsLoader';
import DocsRootComp from './DocsRootComp';
import DocsTypeComp from './DocsTypeComp';
import SchemaFallback from './SchemaFallback';
import getEndpointSchema from '../lib/helpers/getEndpointSchema';

type PropsType = {
  setIsDocsShown: Dispatch<SetStateAction<boolean>>;
  explorer: DocsExplorerType;
};

const DocsModal = ({ setIsDocsShown, explorer }: PropsType) => {
  const { currEndpoint, setEndpointSchema, endpointSchema } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getEndpointSchema(currEndpoint, setEndpointSchema, setIsLoading);
  }, [currEndpoint, setEndpointSchema]);

  if (isLoading) return <DocsLoader />;
  if (!endpointSchema) return <SchemaFallback closeModal={setIsDocsShown} />;

  const content = explorer.isDocs() ? (
    <DocsRootComp types={endpointSchema.types as SchemaTypeObj[]} explorer={explorer} />
  ) : (
    <DocsTypeComp
      explorer={explorer}
      currType={endpointSchema.types.find((elem) => elem.name === explorer.current()) as SchemaTypeObj}
    />
  );

  return (
    <DocsModalLayout>
      <CloseDocsBtn
        onClick={() => {
          setIsDocsShown((prev) => !prev);
          explorer.setInitState();
        }}
        className="absolute right-[20px] top-[20px] z-20"
      />
      {content}
    </DocsModalLayout>
  );
};

export default DocsModal;
