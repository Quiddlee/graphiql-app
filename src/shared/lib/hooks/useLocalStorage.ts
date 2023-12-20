import { useEffect } from 'react';

/**
 * A custom React hook that synchronizes a value with local storage.
 *
 * @param {string} key - The key under which the value is stored in local storage.
 * @param {string | number | boolean} val - The value to be stored.
 * @returns {Function} A function that retrieves the stored value from local storage.
 */
function useLocalStorage(key: string, val: string | number | boolean) {
	useEffect(() => {
		localStorage.setItem(key, String(val));
	}, [key, val]);

	function getItem() {
		return localStorage.getItem(key);
	}

	return getItem;
}

export default useLocalStorage;
