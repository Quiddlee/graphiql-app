import submitRequest from '@/components/Editor/lib/submitRequest';
import { useAppContext } from '@/shared/Context/hooks';
import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';
import Fab from '@shared/ui/Fab';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';

const Controls = () => {
  const { readUrl, setUrl } = useUrl();
  const { updateCurrentResponse, prettifyEditors } = useAppContext();

  const handleCopyText = async () => {
    const query = readUrl(urlParams.QUERY);
    await navigator.clipboard.writeText(query);

    // TODO: change to toastify library
    // eslint-disable-next-line no-alert
    alert('text copied');
  };

  const handleSubmitRequest = async () => {
    const query = readUrl(urlParams.QUERY);
    const variables = readUrl(urlParams.VARIABLES);
    const response = await submitRequest(query, variables);
    updateCurrentResponse(JSON.stringify(response));
  };

  const handlePrettifier = () => {
    prettifyEditors(true);
  };

  const handleResponseOpen = () => {
    const isResponseOpen = readUrl(urlParams.RESPONSE_OPEN) === 'true';
    setUrl(urlParams.RESPONSE_OPEN, String(!isResponseOpen));
  };

  return (
    <ul data-testid="controls" className="absolute right-6 top-7 grid content-start justify-items-center">
      <li className="mb-3 flex items-center justify-center">
        <Fab data-testid="fab" variant="primary" onClick={handleSubmitRequest}>
          <Icon slot="icon">play_arrow</Icon>
        </Fab>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton data-testid="copy-text" onClick={handleCopyText}>
          <Icon>content_copy</Icon>
        </FilledIconButton>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton data-testid="prettify" onClick={handlePrettifier}>
          <Icon>mop</Icon>
        </FilledIconButton>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton data-testid="open-response" onClick={handleResponseOpen}>
          <Icon>info</Icon>
        </FilledIconButton>
      </li>
    </ul>
  );
};

export default Controls;
