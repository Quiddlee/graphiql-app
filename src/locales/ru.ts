const ru = {
	welcome: {
		hero: {
			title: {
				welcomeTo: 'Добро пожаловать',
				the: 'в',
				graphiql: 'GraphiQL',
			},
		},
		subHeader: {
			title: {
				craft: 'Создавайте потрясающие веб-сайты',
				superpowers: 'с суперсилой GraphQL.',
				introducing: 'Представляем GraphiQL,',
				dream: 'IDE вашей мечты.',
			},
		},
		whatIsGraphiQL: {
			title: 'Что такое GraphiQL?',
			subtitle:
				'GraphiQL: интерактивная IDE на базе GraphQL, обеспечивающая удобную разработку веб-сайтов с подсветкой синтаксиса, автозаполнением и динамической документацией.',
			cards: [
				{
					title: 'Поддержка нескольких языков',
					descr: 'Поддержка до 2 языков — английского и русского.',
				},
				{
					title: 'Форматирование запросов',
					descr: 'Форматируйте свои запросы одним нажатием кнопки.',
				},
				{
					title: 'Выбор конечного endpoint',
					descr: 'Меняйте API endpoint на лету.',
				},
				{
					title: 'Динамическая документация',
					descr: 'GraphiQL динамически обновляет схему документации.',
				},
				{
					title: 'Сохранение запросов',
					descr: 'Сохраняйте свои запросы и используйте их позже.',
				},
				{
					title: 'Изменение размера редактора',
					descr: 'Измените размер редактора по своему вкусу.',
				},
			],
		},
		team: {
			title: 'Знакомьтесь с нашей командой',
			bohdan: {
				name: 'Богдан Щербина',
				descr: 'Front-end',
				design: 'Дизайн',
			},
			oleksii: {
				name: 'Алексей Дрогачёв',
			},
			harry: {
				name: 'Гарри Голубев',
			},
		},
		rsschool: {
			title: {
				built: 'Построено с поддержкой',
				rsschool: 'The Rolling Scopes School',
			},
			descr: {
				proud: 'Мы гордимся тем, что это поддерживается',
				the: '',
				rsschool: 'RS School',
				provider: 'ведущим поставщиком',
				free: 'бесплатных образовательных программ',
				education: 'от сообщества.',
				built: 'И построено в качестве выпускного проекта для',
				react: 'курса по React',
			},
		},
		start: {
			title: {
				start: 'Начните Использовать',
				now: 'GraphiQL Сейчас',
			},
			buttonAuth: 'Регистрация',
			buttonApp: 'GraphiQL',
		},
	},
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
				docsTip: 'Документация',
				logOutTip: 'Выйти',
				langTip: 'Сменить язык',
				homeTip: 'Домой',
			},
		},
	},
	docsSection: {
		fallback: {
			partOne: 'Что-то пошло не так с документацией...',
			partTwo: 'Пожалуйста, перезагрузите секцию документации, чтобы использовать её.',
		},
		suspense: 'Скоро тут появится документация...',
		loader: 'Загружаем документацию...',
		schemaFallback: 'По данному адресу документация отсутствует...',
		rootDocsComp: {
			title: 'Схема',
			subtitle: 'Схема GraphQL предоставляет корневой типа для каждого типа запроса.',
			rootTypes: 'Корневые типы:',
			allTypesTitle: 'Все типы схемы:',
		},
	},
};

export default ru;
