import React from 'react';

import { createComponent } from '@lit/react';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

const FormInput = createComponent({
	react: React,
	tagName: 'md-outlined-text-field',
	elementClass: MdOutlinedTextField,
	events: {
		onChange: 'change',
	},
});

export default FormInput;
