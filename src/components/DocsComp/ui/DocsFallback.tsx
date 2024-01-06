import DocsModalLayout from '@/layouts/DocsModalLayout';

const DocsFallback = () => {
  return (
    <DocsModalLayout>
      <div className="flex h-full w-full items-center justify-center">
        <p className="p-6 text-center">
          Something gone wrong with our docs... <br />
          <br />
          Please, reload docs section to continue browsing schema documentation.
        </p>
      </div>
    </DocsModalLayout>
  );
};

export default DocsFallback;
