import { FC, HTMLAttributes } from 'react';

import { TextInputProps } from '@shared/types';
import OutlinedTextField from '@shared/ui/OutlinedTextField';

type FormInputProps = HTMLAttributes<TextInputProps> & TextInputProps;

const FormInput: FC<FormInputProps> = ({ ...props }) => {
  return <OutlinedTextField {...props} />;
};

export default FormInput;
