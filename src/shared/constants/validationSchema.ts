import * as Yup from 'yup';

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&~()_+\-=':"}{/?<>;,.\]\\[*]).{8,}$/;

const email = () => {
	return {
		email: Yup.string()
			.matches(emailRegEx, { message: 'Email must be email@example.com', excludeEmptyString: true })
			.required('Email is required'),
	};
};

const password = () => {
	return {
		password: Yup.string()
			.min(8, 'Minimum 8 symbols required')
			.matches(passwordRegex, {
				message: 'Password must have A, a, 1, special symbols',
				excludeEmptyString: true,
			})
			.required('Password is required'),
	};
};

const confirmPassword = () => {
	return {
		confirmPassword: Yup.string()
			.required('Confirm password is required')
			.oneOf([Yup.ref('password')], 'Password mismatch'),
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
