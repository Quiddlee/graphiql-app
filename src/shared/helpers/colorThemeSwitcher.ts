const colorThemeSwitcher = {
	setLight: () => {
		document.body.setAttribute('data-user-theme', 'light');
		localStorage.setItem('graphiQlColorTheme', 'light');
	},
	setDark: () => {
		document.body.removeAttribute('data-user-theme');
		localStorage.removeItem('graphiQlColorTheme');
	},
};

export default colorThemeSwitcher;
