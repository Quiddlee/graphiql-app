import ResponseViewer from '@components/ResponseViewer/ResponseViewer';
import RequestEditorResized from '@pages/MainPage/ui/RequestEditorResized';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';

const MainPage = () => {
  const { readUrl } = useUrl();

  const isResponseOpen = readUrl(urlParams.RESPONSE_OPEN) === 'true';

  return (
    <>
      <RequestEditorResized />
      <section
        className={cn(
          'relative col-start-3 row-start-2 row-end-4 scale-95 overflow-hidden opacity-0 transition-all duration-200',
          {
            'scale-100 opacity-100 duration-500': isResponseOpen,
          },
        )}
      >
        <ResponseViewer />
      </section>
    </>
  );
};

export default MainPage;
