const enLocale = {
	code1: 'Email must be email@example.com',
	code2: 'Email is required',
	code3: 'Minimum 8 symbols required',
	code5: 'Password is required',
	code6: 'Confirm password is required',
	code7: 'Password mismatch',
	code8: 'Error, wrong email',
	code9: 'Error, wrong password',
	code10: 'Error, email is occupied',
	code11: 'Unexpected error have happened...',
	code12: 'Must contain at least 1 digit',
	code13: 'Must contain at least 1 lowercase letter',
	code14: 'Must contain at least 1 uppercase letter',
	code15: 'Must contain at least 1 special character',
};
const ruLocale = {
	code1: 'Эл. почта должна быть email@example.com',
	code2: 'Эл. почта обязательна',
	code3: 'Не менее 8 символов',
	code5: 'Пароль обязателен',
	code6: 'Подтверждение пароля обязательно',
	code7: 'Пароли не совпадают',
	code8: 'Ошибка, неверная эл. почта',
	code9: 'Ошибка, неверный пароль',
	code10: 'Ошибка, эл. почта занята',
	code11: 'Произошла непредвиденная ошибка...',
	code12: 'Должен содержать как минимум 1 цифру',
	code13: 'Должен содержать как минимум 1 букву',
	code14: 'Должен содержать как минимум 1 загл. букву',
	code15: 'Должен содержать как минимум 1 спец. символ',
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
