import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const toastifyNotation = (message: string) => {
	return Toastify({
		text: message,
		duration: 1500,
		position: 'center',
	}).showToast();
};

export default toastifyNotation;
