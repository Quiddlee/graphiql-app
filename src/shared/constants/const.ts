import urlParams from '@shared/constants/urlParams';

const QUERY_PARAMS_INIT = {
	[urlParams.EXPANDED]: localStorage.getItem('editor-tools-is-expanded') || 'false',
	[urlParams.VARIABLES_TAB]: 'true',
	[urlParams.RESPONSE_OPEN]: 'true',
};

export default QUERY_PARAMS_INIT;
