import { useCallback, useEffect } from 'react';

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
function useEditorUrlState(urlParam: UrlParams, initialState: string = '') {
	const { readUrl, setUrl } = useUrl();
	const urlState = readUrl(urlParam) ?? initialState;

	useEffect(() => {
		if (initialState) setUrl(urlParam, initialState);
	}, [initialState, setUrl, urlParam]);

	const handleChange = useCallback(
		function handleChange(value: string) {
			setUrl(urlParam, value);
		},
		[setUrl, urlParam],
	);

	return [urlState, handleChange] as const;
}

export default useEditorUrlState;
