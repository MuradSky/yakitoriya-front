import React, { useEffect, useState } from 'react';
import { Field, useField } from 'formik';
import { PatternFormat } from 'react-number-format';
import { Label } from './Label';
import st from './FormFields.module.scss'

export const PhoneField: React.FC<TTextField> = ({
	name = 'phone',
	disabled,
	style,
}) => {
	const [, , { setValue, setTouched }] = useField(name);
	const [isEmpty, setIsEmpty] = useState<boolean>(false);
	const [phoneValue, setPhoneValue] = useState<string | null>(null);

	useEffect(() => {
		console.log(phoneValue)
		// if (phoneValue) {
		// 	console.log(phoneValue)
		// 	// setPhoneValue(`+ 7 (${phoneValue.substring(6)}`)
		// }
		//
		if (phoneValue && phoneValue[4] !== '9') {
			setPhoneValue('+7 (___) ___ __ __');
		}
	}, [phoneValue]);


	return (
		<Label
			style={style}
			name={name}
			textFiled={({ value }: any)=> (
				<PatternFormat
					type="text"
					format="+7 (###) ### ## ##"
					placeholder="+7(___)___-__-__"
					mask="_"
					value={phoneValue}
					allowEmptyFormatting={isEmpty}
					onFocus={() => setIsEmpty(true)}
					onBlur={() => setIsEmpty(false)}
					onValueChange={values => {
						setTouched(true);
						setValue(values.value);
						const prepValue = values.formattedValue
							? values.formattedValue.toString()
							: '';
						setPhoneValue(prepValue);
					}}
					customInput={Field}
					disabled={disabled}
					className={[st.input, !!value ? st.input_valid : ''].join(' ')}
				/>
			)}
		/>
	);
};
