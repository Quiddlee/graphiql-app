const en = {
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
				play: 'Send request',
				copy: 'Copy text',
				prettify: 'Prettify',
				openResp: 'Open response',
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
