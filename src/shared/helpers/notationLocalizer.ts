const enLocale = {
	code1: 'Email must be email@example.com',
	code2: 'Email is required',
	code3: 'Minimum 8 symbols required',
	code4: 'Password must have A, a, 1, special symbols',
	code5: 'Password is required',
	code6: 'Confirm password is required',
	code7: 'Password mismatch',
	code8: 'Error, wrong email',
	code9: 'Error, wrong password',
	code10: 'Error, email is occupied',
	code11: 'Unexpected error have happened...',
};
const ruLocale = {
	code1: 'Эл. почта должна быть email@example.com',
	code2: 'Эл. почта обязательна',
	code3: 'Не менее 8 символов',
	code4: 'Пароль должен содержать A, a, 1, и спец. символы',
	code5: 'Пароль обязателен',
	code6: 'Подтверждение пароля обязательно',
	code7: 'Пароли не совпадают',
	code8: 'Ошибка, неверная эл. почта',
	code9: 'Ошибка, неверный пароль',
	code10: 'Ошибка, эл. почта занята',
	code11: 'Произошла непредвиденная ошибка...',
};

type Translation = { [key: string]: string };

export default function notationLocalizer(lang: string, errCode?: string): string {
	if (!errCode) return '';

	const TranslationFiles: Record<string, Translation> = {
		en: enLocale,
		ru: ruLocale,
	};

	return TranslationFiles[lang][errCode];
}
