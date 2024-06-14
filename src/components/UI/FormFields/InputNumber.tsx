import {useState} from 'react';
import { Field } from "formik";
import { PatternFormat } from 'react-number-format';
import {Label} from './Label';
import st from './FormFields.module.scss';

interface TP extends TTextField {
	format?: string
}

export const InputNumber = ({ name, disabled, format, placeholder }: TP ) => {
	const [isEmpty, setIsEmpty] = useState<boolean>(false);
	const [phoneValue, setPhoneValue] = useState<string | null>(null);

	return (
		<Label
			name={name}
			textFiled={({ value, setValue, setTouched }: any)=> {

				return (
					<PatternFormat
						name={name}
						type="text"
						format={format ?? ''}
						mask="_"
						value={value || phoneValue}
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
						placeholder={placeholder}
					/>
				)
			}}
		/>
	);
};
