import DocsModalLayout from '@/layouts/DocsModalLayout';
import Spinner from '@/shared/ui/Spinner';

const DocsLoader = () => {
  return (
    <DocsModalLayout>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Spinner indeterminate />
        <p className="mt-10 text-on-surface">We are loading your docs...</p>
      </div>
    </DocsModalLayout>
  );
};

export default DocsLoader;
