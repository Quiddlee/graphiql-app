import { lazy, Suspense } from 'react';

import useSchemaExplorer from './lib/hooks/useSchemaExplorer';
import DocsOverlay from './ui/DocsOverlay';
import SuspenseFallback from './ui/SuspenseFallback';

type PropsType = {
  setIsDocsShown: React.Dispatch<React.SetStateAction<boolean>>;
  isShown: boolean;
};

const DocsModal = lazy(() => import('./ui/DocsModal'));

const DocsComp = ({ isShown, setIsDocsShown }: PropsType) => {
  const schemaExplorer = useSchemaExplorer();
  return (
    <DocsOverlay isShown={isShown} setIsDocsShown={setIsDocsShown} explorer={schemaExplorer}>
      <Suspense fallback={<SuspenseFallback />}>
        <DocsModal setIsDocsShown={setIsDocsShown} explorer={schemaExplorer} />
      </Suspense>
    </DocsOverlay>
  );
};

export default DocsComp;
