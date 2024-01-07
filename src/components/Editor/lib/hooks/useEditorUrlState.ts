import { useEffect } from 'react';

import useView from '@components/ViewList/hooks/useView';
import useUrl from '@shared/lib/hooks/useUrl';
import { UrlParams } from '@shared/lib/types/types';

/**
 * A custom hook that manages the state of an editor URL parameter.
 *
 * @param {UrlParams} urlParam - The URL parameter to manage.
 *
 * @returns {[string, (value: string) => void]} An array where the first element is the current state of the URL parameter and the second element is a function to update that state.
 */
function useEditorUrlState(urlParam: UrlParams) {
	const { readUrl, setUrl } = useUrl();
	const urlState = readUrl(urlParam);
	const { handleActiveView, activeView } = useView();

	useEffect(() => {
		if (urlState === null) {
			handleActiveView(activeView);
		}
	}, [activeView, handleActiveView, urlState]);

	const handleChange = (value: string) => {
		setUrl(urlParam, value);
	};

	return [urlState, handleChange] as const;
}

export default useEditorUrlState;
