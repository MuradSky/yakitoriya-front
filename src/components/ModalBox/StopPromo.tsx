import {useCallback, useState} from 'react';
import ReactModal from 'react-modal'
import {customStyles} from './customStyles'
import {ButtonStatic} from '../UI'
import {reformCn} from 'utils'
import Clear from 'assets/images/svg/clear.svg?react'
import st from './ModalAuth.module.scss'

export const StopPromo = () => {
	const [isOpen, setIsOpen] = useState(true)
	const onClosed = useCallback(()=> {
		setIsOpen(false)
		document.body.classList.remove('ReactModal__Body--open')
	}, [])

	return (
		<ReactModal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
			<div className={st.box}>
				<button className={st.closed} onClick={onClosed}>
					<Clear/>
				</button>

				<div className={st.body}>
					<div className={st.title}>
						УВАЖАЕМЫЕ УЧАСТНИКИ, АКЦИЯ ЗАВЕРШИЛАСЬ - ПОБЕДИТЕЛИ ОПУБЛИКОВАНЫ!
					</div>
					<div className={reformCn(st.text, st.text_mb10)}>
						Все полученные промокоды доступны в личном кабинете.
						Обязательно сохраните призы от Lamoda, RED и SimpleGroup,
						так как после 31.01.2024 г. сайт будет недоступен.
					</div>

					<ButtonStatic
						className={st.button_ok}
						onClick={onClosed}
						text="OK"
					/>
				</div>
			</div>
		</ReactModal>
	)
}
