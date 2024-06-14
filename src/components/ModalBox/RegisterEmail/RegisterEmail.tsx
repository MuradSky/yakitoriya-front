import {useCallback, useState} from 'react';
import ReactModal from 'react-modal'
import {FirstStage} from './FirstStage';
import {SecondStage} from './SecondStage';
import {SuccessStage} from './SuccessStage';
import {SubscriptionSuccess} from './EmailConfirmedSuccess';
import {useAuthStore} from 'store'
import Clear from 'assets/images/svg/clear.svg?react'
import {customStyles} from '../customStyles'
import st from '../ModalAuth.module.scss'
import {useUser} from 'hooks';

export const RegisterEmail = () => {
	const { user } = useUser()
	const [stage, setStage] = useState<null | string>(null)
	const { isOpenEmail, addOpenEmail }: TAuth = useAuthStore()

	const stageChange = useCallback((isConfirm: boolean)=> {
		setStage(isConfirm ? 'subscription' : 'success')
	}, [])

	const onClose = useCallback(()=> {
		setStage(null)
		addOpenEmail(false)
	}, [])


	return (
		<ReactModal isOpen={isOpenEmail} style={customStyles} contentLabel="Example Modal">
			<div className={st.box}>
				<button className={st.closed} onClick={onClose}>
					<Clear/>
				</button>
				<div className={st.body}>
					{stage === 'subscription' ? <SuccessStage onClose={onClose} /> :
						stage === 'success' ? <SubscriptionSuccess onClose={onClose} /> :
						!user?.email ? <FirstStage stageChange={stageChange} />
							: <SecondStage />
					}
				</div>
			</div>
		</ReactModal>
	)
}

export default RegisterEmail
