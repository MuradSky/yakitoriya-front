import {reformCn} from 'utils';
import Check from 'assets/images/svg/icon-check.svg?react'
import Friend from 'assets/images/svg/status-friend.svg?react'
import Email from 'assets/images/svg/status-email.svg?react'
import st from './PrizeList.module.scss'

interface StatusProps {
	data: {
		action: string,
		gamecode: string | null
	}
}

export const Status = ({ data } : StatusProps)=> {
	const { action, gamecode } = data

	if (!!gamecode) {
		return (
			<div className={st.status}>
				<span>{gamecode}</span>
				<Check/>
			</div>
		)
	}

	if (action === 'Совершение покупки рефералом') {
		return (
			<div className={reformCn(st.status, st.status_sec)}>
				<Friend/>
				<span>Друг</span>
				<Check/>
			</div>
		)
	}

	if (action === 'Подтверждение почты') {
		return (
			<div className={reformCn(st.status, st.status_sec)}>
				<Email/>
				<span>Почта</span>
				<Check/>
			</div>
		)
	}

	return null
}
