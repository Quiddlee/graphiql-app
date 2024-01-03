import { useContext } from 'react';

import { AppContext } from './AppContext';
import { LanguageContext } from './LanguageContext';

const useLanguage = () => {
	return useContext(LanguageContext);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { useLanguage, useAppContext };
