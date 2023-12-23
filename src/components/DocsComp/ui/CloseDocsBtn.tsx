import { FC } from 'react';

import Icon from '@/shared/ui/Icon';
import IconButton from '@/shared/ui/IconButton';

type PropsType = { onClick: () => void; className: string };

const CloseDocsBtn: FC<PropsType> = ({ onClick, className }) => {
  return (
    <IconButton onClick={onClick} className={className}>
      <Icon>close</Icon>
    </IconButton>
  );
};

export default CloseDocsBtn;
