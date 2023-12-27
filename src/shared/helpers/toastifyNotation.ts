import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const toastifyNotation = (message: string) => {
	return Toastify({
		text: message,
		duration: 1500,
		position: 'center',
		className: 'text-inverse-on-surface rounded-sm',
		style: {
			background: '#E6E0E9',
		},
	}).showToast();
};

export default toastifyNotation;
