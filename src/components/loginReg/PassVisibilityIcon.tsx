import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';

const PassVisibilityIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton toggle slot="trailing-icon" onClick={onClick}>
      <Icon>visibility</Icon>
      <Icon slot="selected">visibility_off</Icon>
    </IconButton>
  );
};

export default PassVisibilityIcon;
