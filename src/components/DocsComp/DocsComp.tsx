import { lazy, Suspense } from 'react';

import useSchemaExplorer from './lib/hooks/useSchemaExplorer';
import DocsFallback from './ui/DocsFallback';
import DocsOverlay from './ui/DocsOverlay';
import SuspenseFallback from './ui/SuspenseFallback';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

type PropsType = {
  setIsDocsShown: React.Dispatch<React.SetStateAction<boolean>>;
  isShown: boolean;
};

const DocsModal = lazy(() => import('./ui/DocsModal'));

const DocsComp = ({ isShown, setIsDocsShown }: PropsType) => {
  const schemaExplorer = useSchemaExplorer();
  return (
    <DocsOverlay isShown={isShown} setIsDocsShown={setIsDocsShown} explorer={schemaExplorer}>
      <ErrorBoundary fallback={<DocsFallback />}>
        <>
          <span className="absolute left-0 top-0 m-auto h-full w-[270px] origin-left animate-fade-in-docs rounded-r-4xl bg-surface sm:w-[420px]" />
          <Suspense fallback={<SuspenseFallback />}>
            <DocsModal setIsDocsShown={setIsDocsShown} explorer={schemaExplorer} />
          </Suspense>
        </>
      </ErrorBoundary>
    </DocsOverlay>
  );
};

export default DocsComp;
