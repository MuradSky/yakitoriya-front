import {ChangeEvent, useCallback, useEffect, useRef} from 'react';
import {Label} from './Label';
import Inputmask from "inputmask";
import {reformCn} from 'utils';
import st from './FormFields.module.scss';

const regex = '\\+7 \\([0-6,9]{1}[0-9]{2}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}';

export const PhoneMask = ({ name, placeholder, style, ...props }: TTextField)=> {
	const inputRef = useRef<any>(null)
	useEffect(()=> {
		const im = new Inputmask( { regex })
		im.mask(inputRef.current)
	}, [inputRef])

	const onChange: any = useCallback((setValue: any)=> {
		return (e: ChangeEvent<HTMLInputElement>)=> {
			const { value } = e.target
			if(value[4] !== '9') return setValue('')
			setValue(e.target.value)
		}
	}, [])

	return (
		<Label
			name={name}
			style={style || {}}
			textFiled={({ value, setValue }: any)=> {
				return (
					<input
						ref={inputRef}
						type="text"
						name={name}
						value={value}
						placeholder={placeholder}
						className={reformCn(st.input, !!value ? st.input_valid : '')}
						onChange={onChange(setValue)}
						{...props}
					/>
				)
			}}
		/>
	)
}
