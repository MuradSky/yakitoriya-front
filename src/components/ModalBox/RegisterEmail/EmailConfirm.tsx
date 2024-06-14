import ReactModal from 'react-modal';
import {useAuthStore} from 'store';
import {customStyles} from '../customStyles';
import st from '../ModalAuth.module.scss';
import Clear from 'assets/images/svg/clear.svg?react';
import Email from 'assets/images/svg/email2.svg?react'
import {ButtonStatic} from '../../UI';
import {useCallback} from 'react';
import {reformCn} from '../../../utils';

export const EmailConfirm = ()=> {
	const {isConfirmEmail, addConfirmEmail}: TAuth = useAuthStore()
	const onClose = useCallback(()=> addConfirmEmail(false), [])
	return (
		<ReactModal isOpen={isConfirmEmail} style={customStyles} contentLabel="Confirm Modal">
			<div className={st.box}>
				<button className={st.closed} onClick={onClose}>
					<Clear/>
				</button>
				<div className={st.body}>
					<div className={st.title}>
						Cпасибо за подписку!
					</div>
					<div className={reformCn(st.text, st.text_mb30)}>
						Ваш подарок будет ждать вас в личном кабинете
					</div>
					<div className={st.icon_sec}>
						<Email />
					</div>
					<ButtonStatic
						className={st.button}
						onClick={onClose}
						text="OK"
					/>
				</div>
			</div>
		</ReactModal>
	)
}

export default EmailConfirm
