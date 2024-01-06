import DocsModalLayout from '@/layouts/DocsModalLayout';
import Spinner from '@/shared/ui/Spinner';

const SuspenseFallback = () => {
  return (
    <DocsModalLayout>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Spinner indeterminate />
        <p className="mt-10 text-on-surface">Soon here will be docs section...</p>
      </div>
    </DocsModalLayout>
  );
};

export default SuspenseFallback;
