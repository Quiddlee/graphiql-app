const colorThemeSwitcher = {
	setLight: () => {
		document.body.setAttribute('data-user-theme', 'ligth');
		localStorage.setItem('graphiQlColorTheme', 'ligth');
	},
	setDark: () => {
		document.body.removeAttribute('data-user-theme');
		localStorage.removeItem('graphiQlColorTheme');
	},
};

export default colorThemeSwitcher;
