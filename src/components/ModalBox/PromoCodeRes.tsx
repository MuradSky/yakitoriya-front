import ReactModal from 'react-modal';
import {Button} from '../UI';
import {customStyles} from './customStyles';
import Clear from 'assets/images/svg/clear.svg?react';
import Ticket from 'assets/images/svg/ticket.svg?react';
import TicketBroken from 'assets/images/svg/ticket-broken.svg?react';
import st from './ModalAuth.module.scss';

const Success = ({ onClosed }: any)=> {
	return (
		<div className={st.body}>
			<div className={st.title}>Спасибо!</div>
			<div className={st.icon_sec}>
				<Ticket width={56} height={56}  />
			</div>
			<div className={[st.text, st.text_mb30].join(' ')}>
				Код успешно добавлен
			</div>
			<Button className={st.button_ok} onClick={onClosed}>
				Хорошо
			</Button>
		</div>
	)
}


const Error = ({ onClosed, message }: any)=> {
	return (
		<div className={st.body}>
			<div className={st.title}>Ошибка</div>
			<div className={st.icon_sec}>
				<TicketBroken width={56} height={56}  />
			</div>
			<div className={[st.text, st.text_mb30].join(' ')}>
				{message}
			</div>
			<Button className={st.button_email} variant="empty" onClick={onClosed}>
				Ввести заново
			</Button>
		</div>
	)
}

interface PromoCodeResProps extends TModal {
	view: {
		message: string | null
		type: string | null
	}
}

export const PromoCodeRes = ({ isOpen, onClosed, view }: PromoCodeResProps) => {
	return (
		<ReactModal isOpen={isOpen} style={customStyles}>
			<div className={st.box}>
				<button className={st.closed} onClick={onClosed}>
					<Clear/>
				</button>
				{view?.type === 'success' ?
					<Success onClosed={onClosed} /> :
					view?.type === 'error' ?
					<Error onClosed={onClosed} message={view?.message} /> : null
				}
			</div>
		</ReactModal>
	)
}
