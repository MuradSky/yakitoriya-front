import st from '../ContentSecond.module.scss';
import {reformCn} from 'utils';

interface StatusProps {
	action: string | null,
	type: string | null
}

export const Status = ({ action, type }: StatusProps)=> {
	const renderTitle = ()=> {
		if (action === 'Совершение покупки рефералом') {
			return <div className={st.type}>Гарантированный подарок за друга</div>
		}
		if (action === 'Подтверждение почты') {
			return <div className={st.type}>Гарантированный подарок за подписку</div>
		}

		if (type === 'Гарантированный приз') {
			return <div className={st.type}>Гарантированный подарок за код</div>
		}

		if (type === 'Еженедельный приз') {
			return <div className={reformCn(st.type, st.valuable)}>Еженедельный приз</div>
		}

		return null
	}

	return <div className={st.prize_top}>{renderTitle()}</div>
}
