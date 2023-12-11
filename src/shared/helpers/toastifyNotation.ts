import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const toastifyNotation = (message: string) => {
	return Toastify({
		text: message,
		duration: 1500,
	}).showToast();
};

export default toastifyNotation;
