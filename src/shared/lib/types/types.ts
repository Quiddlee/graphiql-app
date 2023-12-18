import urlParams from '@shared/constants/urlParams';

export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends Record<string, unknown> ? DeepPartial<T[P]> : T[P];
};

export type UrlParams = (typeof urlParams)[keyof typeof urlParams];
