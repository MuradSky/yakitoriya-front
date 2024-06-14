import {Label} from './Label';
import {Field} from 'formik';
import st from './FormFields.module.scss'
import {reformCn} from 'utils';

export const TextField = ({
	type= "text",
	name,
	placeholder,
	style,
	...props
}: TTextField) => {
	return (
		<Label
			name={name}
			style={style || {}}
			textFiled={({ value }: any)=> (
				<Field
					type={type}
					value={value}
					name={name}
					placeholder={placeholder}
					className={reformCn(st.input, !!value ? st.input_valid : '')}
					{...props}
				/>
			)}
		/>
	)
}
