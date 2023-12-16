import urlParams from '@shared/constatns/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';
import Fab from '@shared/ui/Fab';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';

const Controls = () => {
  const { readUrl } = useUrl();

  const handleCopyText = async () => {
    const query = readUrl(urlParams.QUERY);
    await navigator.clipboard.writeText(query);

    // TODO: change to toastify library
    // eslint-disable-next-line no-alert
    alert('text copied');
  };

  return (
    <ul className="grid content-start justify-items-center pt-7">
      <li className="mb-3 flex items-center justify-center">
        <Fab variant="primary">
          <Icon slot="icon">play_arrow</Icon>
        </Fab>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton onClick={handleCopyText}>
          <Icon>content_copy</Icon>
        </FilledIconButton>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton>
          <Icon>mop</Icon>
        </FilledIconButton>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton>
          <Icon>info</Icon>
        </FilledIconButton>
      </li>
    </ul>
  );
};

export default Controls;
