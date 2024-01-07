import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import DocsModalLayout from '@/layouts/DocsModalLayout';
import { useAppContext, useLanguage } from '@/shared/Context/hooks';
import { DocsExplorerType, SchemaTypeObj } from '@/shared/types';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';

import DocsLoader from './DocsLoader';
import DocsRootComp from './DocsRootComp';
import DocsTypeComp from './DocsTypeComp';
import SchemaFallbackUi from './SchemaFallbackUi';
import getEndpointSchema from '../lib/helpers/getEndpointSchema';

type PropsType = {
  setIsDocsShown: Dispatch<SetStateAction<boolean>>;
  explorer: DocsExplorerType;
};

const DocsModal = ({ setIsDocsShown, explorer }: PropsType) => {
  const { currEndpoint, setEndpointSchema, endpointSchema } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const { translation } = useLanguage();

  const { loader, schemaFallback, rootDocsComp } = translation.docsSection;

  useEffect(() => {
    getEndpointSchema(currEndpoint, setEndpointSchema, setIsLoading);
  }, [currEndpoint, setEndpointSchema]);

  if (isLoading) return <DocsLoader text={loader} />;
  if (!endpointSchema) return <SchemaFallbackUi closeModal={setIsDocsShown} text={schemaFallback} />;

  const content = explorer.isDocs() ? (
    <DocsRootComp types={endpointSchema.types as SchemaTypeObj[]} explorer={explorer} translation={rootDocsComp} />
  ) : (
    <DocsTypeComp
      explorer={explorer}
      currType={endpointSchema.types.find((elem) => elem.name === explorer.current()) as SchemaTypeObj}
    />
  );

  return (
    <DocsModalLayout>
      <IconButton
        onClick={() => {
          setIsDocsShown((prev) => !prev);
          explorer.setInitState();
        }}
        className="animation-delay-200 absolute right-[20px] top-[20px] z-20 animate-fade-in-screen ease-standard-decelerate"
        data-testid="closeDocs"
      >
        <Icon>close</Icon>
      </IconButton>
      {content}
    </DocsModalLayout>
  );
};

export default DocsModal;
