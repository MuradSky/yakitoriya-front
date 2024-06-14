import {Label} from './Label';
import st from './FormFields.module.scss';
import {reformCn} from 'utils';
import {ChangeEvent} from 'react';

interface CodeInputMaskProps {
	defaultValue?:string | undefined | null
	name: string,
	mask: string,
	placeholder: string,
	isDisabled?: boolean
}

export const CodeInputMask = ({
	placeholder,
	name,
	mask,
	isDisabled,
	defaultValue
}: CodeInputMaskProps) => {

	const handleChange = (setFieldValue: (v: string)=> void)=> (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const formattedValue = formatCustomMask(inputValue);
		setFieldValue && setFieldValue(formattedValue)
	};

	const formatCustomMask = (value: string) => {
		const alphanumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
		let formattedValue = '';
		let maskIndex = 0;
		for (let i = 0; i < alphanumericValue.length && maskIndex < mask.length; i++) {
			const maskChar = mask[maskIndex];
			if (maskChar === 'A' || maskChar === '9') {
				formattedValue += alphanumericValue[i];
			} else {
				formattedValue += maskChar;
				maskIndex++;
				i--
			}
			maskIndex++;
		}
		return formattedValue;
	};

	return (
		<Label
			name={name}
			value={defaultValue}
			textFiled={({ value, setValue }:  any) => {
				return (
					<input
						name={name}
						type="text"
						value={value}
						onChange={handleChange(setValue)}
						placeholder={placeholder}
						className={reformCn(st.input, !!value ? st.input_valid : '')}
						disabled={isDisabled}
					/>
				)
			}}
		/>
	);
};

