import {FormikErrors, FormikValues} from 'formik';

export const register = (values: FormikValues)=> {
	const errors: FormikErrors<any> = {}

	if (!values.name)  {
		errors.name = 'Обязательное поле'
	}

	if (!values.phone)  {
		errors.phone = 'Обязательное поле'
	}

	if (!values.personal_data_confirmation)  {
		errors.personal_data_confirmation = 'Обязательное поле'
	}

	return errors
}

export const smsCode = (values: FormikValues) => {
	const errors: FormikErrors<any> = {}
	if (!values.password) {
		errors.password = 'Обязательное поле'
	}
	return errors
}

export const emailValid = (values: FormikValues)=> {
	const errors: FormikErrors<any> = {}
	const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	if (!values.email) {
		errors.email = 'Обязательное поле';
	}
	if (values.email && !emailRegExp.test(values.email)) {
		errors.email = 'Не верный адрес электронной почты';
	}

	return errors
}
