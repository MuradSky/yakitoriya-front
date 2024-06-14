import {CSSProperties, useEffect} from 'react';
import { useField } from 'formik';
import {reformCn} from 'utils';
import st from './FormFields.module.scss'

interface TP {
	hideMark?: boolean
	name?: string,
	textFiled: any
	style?:  CSSProperties | undefined
	value?: string | undefined | null
}

export const Label: React.FC<TP> = ({name, textFiled, style, value}) => {
	const [field, meta, help] = useField( name || '')
	useEffect(()=> {
		if (value) {
			help.setValue(value)
		}
	}, [value, help])

	return (
		<label
			className={reformCn(st.label, meta.error ? st.is_error : '')}
			style={style}
		>
			{textFiled({...field, ...meta, ...help})}
			{!!meta?.error && <span className={st.field_error}>{meta?.error}</span>}
		</label>
	)
}
