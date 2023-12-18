import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';
import Fab from '@shared/ui/Fab';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';

const Controls = () => {
  const { readUrl, setUrl } = useUrl();

  const handleCopyText = async () => {
    const query = readUrl(urlParams.QUERY);
    await navigator.clipboard.writeText(query);

    // TODO: change to toastify library
    // eslint-disable-next-line no-alert
    alert('text copied');
  };

  const handleResponseOpen = () => {
    const isResponseOpen = readUrl(urlParams.RESPONSE_OPEN) === 'true';
    setUrl(urlParams.RESPONSE_OPEN, String(!isResponseOpen));
  };

  return (
    <ul data-testid="controls" className="grid content-start justify-items-center pt-7">
      <li className="mb-3 flex items-center justify-center">
        <Fab data-testid="fab" variant="primary">
          <Icon slot="icon">play_arrow</Icon>
        </Fab>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton data-testid="copy-text" onClick={handleCopyText}>
          <Icon>content_copy</Icon>
        </FilledIconButton>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton data-testid="prettify">
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
