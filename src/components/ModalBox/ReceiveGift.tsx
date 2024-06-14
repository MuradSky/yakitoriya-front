import {useCallback, useEffect, useState} from 'react';
import ReactModal from 'react-modal'
import {customStyles} from './customStyles'
import {useUser} from 'hooks'
import {useAuthStore} from 'store'
import {ButtonStatic} from '../UI'
import {reformCn} from 'utils'
import Clear from 'assets/images/svg/clear.svg?react'
import st from './ModalAuth.module.scss'

export const ReceiveGift = () => {
	const { addOpenEmail, isOpenReceive, addOpenReceive }: TAuth = useAuthStore()
	const { user } = useUser()
	const [isOpen, setIsOpen] = useState(false)

	useEffect(()=> {
		if (!!user && !user?.email && !isOpenReceive) {
			setIsOpen(true)
			addOpenReceive(true)
		}
	}, [user])

	const onClosed = useCallback(()=> {
		setIsOpen(false)
	}, [])

	const onCloseByEmail = useCallback(()=> {
		setIsOpen(false)
		addOpenEmail(true)
	}, [])


	return (
		<ReactModal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
			<div className={st.box}>
				<button className={st.closed} onClick={onClosed}>
					<Clear/>
				</button>

				<div className={st.body}>
					<div className={reformCn(st.text, st.text_mb10)}>
						Получите промокод на скидку 20% на заказ с доставкой  за подписку на e-mail
					</div>

					<ButtonStatic
						className={st.button_email}
						onClick={onCloseByEmail}
						text="Получить подарок"
					/>
				</div>
			</div>
		</ReactModal>
	)
}


export default ReceiveGift
