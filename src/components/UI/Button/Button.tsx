import Loader from 'assets/images/svg/pre-loader.svg?react'
import st from './Button.module.scss'
import {ReactNode} from 'react';
import {reformCn} from 'utils';

const variants: any = {
	empty: st.btn_empty
}

const Button = ({ isDisabled, children, className, variant, onClick, isLoading }: TButton ) => {
	const view = variant ? variants[variant] : ''
	const cn = reformCn(st.btn, className || '', view)
	return (
		<button
			className={cn}
			disabled={isDisabled || isLoading}
			onClick={!isLoading ? onClick : ()=> null}
		>
			{isLoading && <Loader className={st.btn_preloder}/>}
			<span className={st.text} style={{ opacity: isLoading ? 0 : 1 }}>{children}</span>
		</button>
	)
}

interface TStatic extends TButton {
	text: string,
	icon?: ReactNode
}

const ButtonStatic = ({ text, icon, className, variant, onClick }: TStatic )=> {
	const view = variant ? variants[variant] : ''
	const cn = reformCn(st.btn_static, className || '', view)
	return (
		<button className={cn} onClick={onClick}>
			{icon ? <span>{text}</span> : text}
			{icon}
		</button>
	)
}


export { Button, ButtonStatic }
