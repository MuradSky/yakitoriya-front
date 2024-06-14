import {CSSProperties} from 'react';
import {useField} from 'formik';
import st from './FormFields.module.scss'
import Checkmark from 'assets/images/svg/checkmark.svg?react'

interface CheckboxProps extends TCheckbox {
	styled: CSSProperties
}

export const Checkbox = ({ name='', isDisabled, children, styled }: CheckboxProps) => {
	const [{ value }, meta, { setValue }] = useField(name);
	const onChange = () => !isDisabled && setValue(!value);

	return (
		<label className={st.checkbox} style={styled}>
			<span className={st.checkbox_wrap} style={{ opacity: isDisabled ? .5 : '' }}>
				<input
					type="checkbox"
					className={st.checkbox_input}
					name={name}
					checked={value}
					onChange={onChange}
					disabled={!!isDisabled}
				/>
				<span className={st.checkbox_box}>
					<Checkmark/>
				</span>
				<span className={st.checkbox_text} style={{ fontSize: styled.fontSize }}>
					{children}
				</span>
			</span>
			{meta.error && <span className={st.field_error}>{meta.error}</span>}
		</label>
	)
}
