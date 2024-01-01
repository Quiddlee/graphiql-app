import { useEffect } from 'react';

import useUrl from '@shared/lib/hooks/useUrl';
import { UrlParams } from '@shared/lib/types/types';

/**
 * A custom hook that manages the state of an editor URL parameter.
 *
 * @param {UrlParams} urlParam - The URL parameter to manage.
 * @param {string} [initialState] - The initial state of the URL parameter.
 *
 * @returns {[string, (value: string) => void]} An array where the first element is the current state of the URL parameter and the second element is a function to update that state.
 */
function useEditorUrlState(urlParam: UrlParams, initialState = '') {
	const { readUrl, setUrl } = useUrl();
	const urlState = readUrl(urlParam) ?? initialState;

	useEffect(() => {
		if (urlState === initialState) setUrl(urlParam, initialState);
	}, [initialState, setUrl, urlParam, urlState]);

	const handleChange = (value: string) => {
		setUrl(urlParam, value);
	};

	return [urlState, handleChange] as const;
}

export default useEditorUrlState;
