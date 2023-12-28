import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

export type ErrorType = {
	code: string;
};

export type HandleExpand = {
	(up: boolean): void;
	(cb: (prevState: boolean) => boolean): void;
};

export type TextInputProps = Partial<Omit<MdOutlinedTextField, keyof HTMLElement>>;

export type ScreenTypes = 'mobile' | 'tablet' | 'desktop';

export type SchemaTypeFieldOfType = {
	kind: string;
	name: string | null;
	ofType: SchemaTypeFieldOfType;
} | null;

export type SchemaTypeFieldArgs = {
	name: string;
	description?: string | null;
	type: SchemaTypeFieldOfType;
	defaultValue?: null | string;
};

export type SchemaTypeField = {
	name: string;
	description?: string;
	args: SchemaTypeFieldArgs[];
	type: SchemaTypeFieldOfType;
	isDeprecated?: false;
	deprecationReason?: null | string;
};

export type SchemaTypeInterfaceType = {
	kind: string;
	name: string;
	ofType: null;
};

export type SchemaTypeEnumType = {
	name: string;
	description: string;
	isDeprecated: boolean;
	deprecationReason: null | string;
};

export type SchemaTypePossibleTypes = {
	kind: string;
	name: string;
	ofType: null;
};

export type SchemaTypeObj = {
	kind: string;
	name: string;
	description: string;
	fields: SchemaTypeField[];
	inputFields: SchemaTypeField[] | null;
	interfaces: SchemaTypeInterfaceType[] | null;
	enumValues: SchemaTypeEnumType[] | null;
	possibleTypes?: SchemaTypePossibleTypes[] | null;
};

export type DocsExplorerType = {
	current: () => string;
	next: (elem: string) => void;
	prev: () => string;
	isDocs: () => boolean;
	back: () => void;
	setInitState: () => void;
};
