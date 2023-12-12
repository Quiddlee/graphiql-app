import { useContext } from 'react';

import { LanguageContext } from './LanguageContext';

const useLanguage = () => {
	return useContext(LanguageContext);
};

export default useLanguage;
