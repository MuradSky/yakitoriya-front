import {ChangeEvent, memo, useRef} from 'react'
import Glass from 'assets/images/svg/icon-glas.svg?react'
import st from './FormFields.module.scss'

interface TSearchInput {
	name: string
	value: string,
	placeholder: string,
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	className: string
}

export const SearchInput = memo(function SearchInput ({ name, placeholder, value, onChange, className }: TSearchInput) {
	const inputRef = useRef<any>(null)
	const cn = [st.search, className].join(' ').trim()

	return (
		<div className={cn}>
			<label>
				<input
					ref={inputRef}
					type="text"
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				<button onClick={()=> inputRef?.current?.focus()}><Glass /></button>
			</label>
		</div>
	)
})
