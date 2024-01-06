const en = {
	welcome: {
		hero: {
			title: {
				welcomeTo: 'Welcome to',
				the: 'the',
				graphiql: 'GraphiQL',
			},
		},
		subHeader: {
			title: {
				craft: 'Craft stunning websites',
				superpowers: 'with GraphQL superpowers.',
				introducing: 'Introducing GraphiQL,',
				dream: 'your dream IDE.',
			},
		},
		whatIsGraphiQL: {
			title: 'What is GraphiQL?',
			subtitle:
				'GraphiQL: Your interactive GraphQL IDE, empowering website development with syntax highlighting, autocompletion, and dynamic documentation.',
			cards: [
				{
					title: 'Multi language support',
					descr: 'Support up to 2 languges — English and Russian.',
				},
				{
					title: 'Query prettifiying',
					descr: 'Prettify your queries with one click.',
				},
				{
					title: 'Choose your endpoint',
					descr: 'Change your API endpoint on the fly.',
				},
				{
					title: 'Dynamic documentation',
					descr: 'GraphiQL updates the documentation schema dynamically.',
				},
				{
					title: 'Query saving',
					descr: 'Save your queries and reuse them later.',
				},
				{
					title: 'Editor resizing',
					descr: 'Resize the editor to your liking.',
				},
			],
		},
		team: {
			title: 'Meet our amazing team',
			bohdan: {
				name: 'Bohdan Shcherbyna',
				design: 'Design',
			},
			oleksii: {
				name: 'Oleksii Drohachov',
			},
			harry: {
				name: 'Harry Holubiev',
			},
		},
		rsschool: {
			title: {
				built: 'Built with the Support of',
				rsschool: 'The Rolling Scopes School',
			},
			descr: {
				proud: 'We proud to announce that it is supported by',
				the: 'the',
				rsschool: 'RS School',
				provider: 'a leading provider of',
				free: 'free-of-charge community-based',
				education: 'education programs.',
				built: 'And built as a graduation project for',
				react: 'React course.',
			},
		},
		start: {
			title: {
				start: 'Start Using',
				now: 'GraphiQL Now',
			},
			buttonAuth: 'Sign up',
			buttonApp: 'GraphiQL App',
		},
	},
	nav: {
		navbar: {
			welcome: 'Welcome',
			settings: 'Settings',
		},
		viewList: {
			title: 'Recent',
			addNewView: 'New view',
			newView: 'Empty view',
			rename: 'Rename',
			delete: 'Delete',
			renameDialog: {
				title: 'Rename this view',
				cancel: 'Cancel',
				rename: 'Rename',
				snackbar: 'Renamed to',
			},
			deleteDialog: {
				title: 'Delete view?',
				content:
					"You'll no longer see this view. This will also delete related activity like headers, responses and variables.",
				cancel: 'Cancel',
				delete: 'Delete',
				snackbar: 'Deleted',
			},
		},
	},
	loginPage: {
		title: 'Log in',
		subtitle: 'to continue to GraphiQL 🚀',
		emailPlaceHold: 'Email',
		passPlaceHold: 'Password',
		btnTitle: 'Log in',
		linkClue: "Don't have an account yet?",
		linkTitle: 'Sign up',
	},
	signUpPage: {
		title: 'Sign in',
		subtitle: 'to continue to GraphiQL 🚀',
		emailPlaceHold: 'Email',
		passPlaceHold: 'Password',
		confPassPlaceHold: 'Confirm Password',
		btnTitle: 'Sign up',
		linkClue: 'Already have an account?',
		linkTitle: 'Log in',
	},
	settingsPage: {
		headers: {
			title: 'Persist headers',
			firstSub: 'Save headers upon reloading.',
			secondSub: 'Only enable if you trust this device.',
		},
		mode: {
			title: 'Dark mode',
			subtitle: 'Adjust how the interface looks like.',
		},
		endpoint: {
			title: 'API endpoint',
			subtitle: 'Change API endpoint.',
		},
		lang: {
			title: 'Language',
			subtitle: 'Change app language.',
		},
		clear: {
			title: 'Clear storage',
			subtitle: 'Remove all locally stored data.',
			btn: 'Clear data',
			modal: {
				title: 'Clear data',
				subtitle: 'Are you sure you want to clear all local storage data?',
				cancel: 'Cancel',
				confirm: 'Clear',
			},
			undo: {
				undoTitle: 'Local storage data cleared',
				cancelBtn: 'Undo',
			},
		},
	},
	mainPage: {
		requestEditor: {
			controlsTooltips: {
				play: 'Execute query',
				copy: 'Copy query',
				prettify: 'Prettify query',
				openResp: 'Open response',
			},
			snackbar: {
				copy: 'Copied to clipboard',
			},
		},
	},
	mainLayout: {
		header: {
			tooltips: {
				docs: 'Show docs',
			},
		},
	},
};

export default en;
