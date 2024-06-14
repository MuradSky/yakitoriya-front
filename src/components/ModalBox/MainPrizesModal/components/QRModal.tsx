import {createPortal} from 'react-dom';
import QRCodeSVG from 'qrcode.react';
import Clear from 'assets/images/svg/clear-2.svg?react'
import st from '../MainPrizesModal.module.scss'

export const QRModal = ({ value, onClose, parentBlock }: { value: string, onClose: ()=> void, parentBlock: HTMLElement })=> {
	return value !== '' ? createPortal(
		<div className={st.qrModal} >
			<div className={st.qrModal_box}>
				<button onClick={onClose}><Clear/></button>
				<QRCodeSVG value={value} size={200} />
				<p>покажите официанту</p>
			</div>
		</div>,
		parentBlock
	) : null
}
