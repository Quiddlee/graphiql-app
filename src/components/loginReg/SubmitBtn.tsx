import { FC, HTMLAttributes } from 'react';

import { MdFilledIconButton } from '@material/web/all';

import FilledIconButton from '@shared/ui/FilledIconButton';

type SubmitBtnProps = HTMLAttributes<MdFilledIconButton> & {
  children: string;
  disabled: boolean;
  type: 'submit' | 'button';
};

const SubmitBtn: FC<SubmitBtnProps> = ({ children, ...props }) => {
  return <FilledIconButton {...props}>{children}</FilledIconButton>;
};

export default SubmitBtn;
