import Email from 'assets/images/svg/email2.svg?react'
import st from '../ModalAuth.module.scss';
import {ButtonStatic} from '../../UI';
import {reformCn} from 'utils';

export const SubscriptionSuccess = ({ onClose }: any) => {
	return (
		<>
			<div className={st.title}>
				Cпасибо за подписку!
			</div>

			<div className={reformCn(st.text, st.text_mb10)}>
				Для того, чтобы подтвердить свой
				e-mail, нажмите в письме от «Якитории» кнопку «Подтвердить»
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
