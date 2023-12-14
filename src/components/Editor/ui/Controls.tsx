import Fab from '@shared/ui/Fab';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';

const Controls = () => {
  return (
    <ul className="grid content-start justify-items-center">
      <li className="mb-3 flex items-center justify-center">
        <Fab variant="primary">
          <Icon slot="icon">play_arrow</Icon>
        </Fab>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton>
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
