import * as Yup from 'yup';

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&~()_+\-=':"}{/?<>;,.\]\\[*]).{8,}$/;

const email = () => {
	return {
		email: Yup.string().matches(emailRegEx, { message: 'code1', excludeEmptyString: true }).required('code2'),
	};
};

const password = () => {
	return {
		password: Yup.string()
			.min(8, 'code3')
			.matches(passwordRegex, {
				message: 'code4',
				excludeEmptyString: true,
			})
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
