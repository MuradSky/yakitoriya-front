import {useUser} from 'hooks'
import Star from 'assets/images/svg/icon-star.svg?react'
import Gift from 'assets/images/svg/icon-gift.svg?react'
import Friends from 'assets/images/svg/icon-friends.svg?react'
import st from './ProfileCard.module.scss'

type TWidget = {
	friends_count: number,
	user_check_count: number,
	user_prize_count: number
	friend_check_count: number,
}

const declinationCode = (num: number | undefined)=> {
	if (num === undefined) return ''
	return num === 1 ? 'код' : num > 1 && num <=4 ? 'кода' : 'кодов'
}
const declinationPrize = (num: number | undefined)=> {
	if (num === undefined) return ''
	return num === 1 ? 'приз' : num > 1 && num <=4 ? 'приза' : 'призов'
}

const declinationFriend = (num: number | undefined)=> {
	if (num === undefined) return ''
	return num === 1 ? 'друг' : num > 1 && num <=4 ? 'друга' : 'друзей'
}

const declinationFriendCheck = (num: number | undefined)=> {
	if (num === undefined) return ''
	return num === 1 ? 'чек друга' : num > 1 && num <=4 ? 'чека друзей' : 'чеков друзей'
}


export const ProfileStatus = () => {
	const { user, prizeData } = useUser()
	const widget: TWidget = user?.widget

	const priceCount = prizeData?.map((item: any)=> item.prizes)?.flat().length || 0

	return (
		<div className={st.status}>
			<div className={st.status_item}>
				<Star/>
				<div className={st.status_right}>
					<div className={st.status_num}>{widget?.user_check_count}</div>
					<div>{declinationCode(widget?.user_check_count)} с чека</div>
				</div>
			</div>
			<div className={st.status_item}>
				<Gift/>
				<div className={st.status_right}>
					<div className={st.status_num}>{priceCount}</div>
					<div>{declinationPrize(priceCount)}</div>
				</div>
			</div>
			<div className={st.status_item}>
				<Friends/>
				<div className={st.status_right}>
					<div className={st.status_num}>{widget?.friends_count}</div>
					<div>{declinationFriend(widget?.friends_count)}</div>
				</div>
			</div>
			<div className={st.status_item}>
				<Friends/>
				<div className={st.status_right}>
					<div className={st.status_num}>{widget?.friend_check_count}</div>
					<div>{declinationFriendCheck(widget?.friend_check_count)}</div>
				</div>
			</div>
		</div>
	)
}
