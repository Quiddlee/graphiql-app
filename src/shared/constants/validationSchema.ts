import * as Yup from 'yup';

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const atLeastOneDigit = /[0-9]/;
const atLeastOneLowerCase = /[a-z]/;
const atLeastOneUpperCase = /[A-Z]/;
const atLeastOneSpecialCharacter = /[^\w\s]/g;

const email = () => {
	return {
		email: Yup.string().matches(emailRegEx, { message: 'code1', excludeEmptyString: true }).required('code2'),
	};
};

const password = () => {
	return {
		password: Yup.string()
			.min(8, 'code3')
			.matches(atLeastOneDigit, 'code12')
			.matches(atLeastOneLowerCase, 'code13')
			.matches(atLeastOneUpperCase, 'code14')
			.matches(atLeastOneSpecialCharacter, 'code15')
			.required('code5'),
	};
};

const confirmPassword = () => {
	return {
		confirmPassword: Yup.string()
			.required('code6')
			.oneOf([Yup.ref('password')], 'code7'),
	};
};

const loginValidationSchema = Yup.object({
	...email(),
	...password(),
});

const regValidationSchema = Yup.object({
	...email(),
	...password(),
	...confirmPassword(),
});

export { loginValidationSchema, regValidationSchema };
