const ru = {
	nav: {
		navbar: {
			welcome: 'Главная',
			settings: 'Настройки',
		},
		viewList: {
			title: 'Недавние',
			addNewView: 'Новый редактор',
			newView: 'Пустой редактор',
			rename: 'Переименовать',
			delete: 'Удалить',
			renameDialog: {
				title: 'Переименовать редактор',
				cancel: 'Отмена',
				rename: 'Переименовать',
				snackbar: 'Переименовано в',
			},
			deleteDialog: {
				title: 'Удалить редактор?',
				content:
					'Вы больше не увидите этот редактор. Это также удалит связанную активность, такую как заголовки, ответы и переменные.',
				cancel: 'Отмена',
				delete: 'Удалить',
				snackbar: 'Удалено',
			},
		},
	},
	loginPage: {
		title: 'Войти',
		subtitle: 'чтобы воспользоваться GraphiQL 🚀',
		emailPlaceHold: 'Эл. почта',
		passPlaceHold: 'Пароль',
		btnTitle: 'Войти',
		linkClue: 'Ещё нет аккаунта?',
		linkTitle: 'Зарегистрироваться',
	},
	signUpPage: {
		title: 'Зарегистрироваться',
		subtitle: 'чтобы воспользоваться GraphiQL 🚀',
		emailPlaceHold: 'Эл. почта',
		passPlaceHold: 'Пароль',
		confPassPlaceHold: 'Подтв. пароль',
		btnTitle: 'Зарегистрироваться',
		linkClue: 'Уже есть аккаунт?',
		linkTitle: 'Войти',
	},
	header: { h1: { h2: 'русский' } },
	settingsPage: {
		headers: {
			title: 'Сохранять заголовки',
			firstSub: 'Сохранять заголовки после перезагрузки.',
			secondSub: 'Включайте, только если доверяете устройству.',
		},
		mode: {
			title: 'Тёмная тема',
			subtitle: 'Изменить внешний вид интерфейса.',
		},
		endpoint: {
			title: 'API endpoint',
			subtitle: 'Сменить API endpoint.',
		},
		lang: {
			title: 'Локализация',
			subtitle: 'Сменить локализацию.',
		},
		clear: {
			title: 'Очистить хранилище',
			subtitle: 'Очистить все локалько сохранённые данные.',
			btn: 'Очистить',
			modal: {
				title: 'Очистить данные',
				subtitle: 'Вы уверены, что хотити удалить все локальные данные?',
				cancel: 'Отмена',
				confirm: 'Очистить',
			},
			undo: {
				undoTitle: 'Данные хранилища очищены',
				cancelBtn: 'Отменить',
			},
		},
	},
	mainPage: {
		requestEditor: {
			controlsTooltips: {
				play: 'Отправить запрос',
				copy: 'Скопировать запрос',
				prettify: 'Форматировать запрос',
				openResp: 'Открыть ответ',
			},
			snackbar: {
				copy: 'Скопировано в буфер обмена',
			},
		},
	},
	mainLayout: {
		header: {
			tooltips: {
				docs: 'Документация',
			},
		},
	},
};

export default ru;
