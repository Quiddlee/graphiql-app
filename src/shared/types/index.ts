import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

export type ErrorType = {
	code: string;
};

export type TextInputProps = Partial<Omit<MdOutlinedTextField, keyof HTMLElement>>;
