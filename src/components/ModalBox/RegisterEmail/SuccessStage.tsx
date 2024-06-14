import {ButtonStatic} from '../../UI'
import Email from 'assets/images/svg/email2.svg?react'
import st from '../ModalAuth.module.scss'

export const SuccessStage = ({ onClose }: any) => {
	return (
		<>
			<div className={st.title}>
				Cпасибо за подписку!
			</div>
			<div className={st.icon_sec}>
				<Email />
			</div>
			<ButtonStatic
				className={st.button}
				onClick={onClose}
				text="OK"
			/>
		</>
	)
}

