import {useState} from 'react'
import st from './PrizeBoard.module.scss'
import craneMain from 'assets/images/crane/crane-main.png'
import crane1 from 'assets/images/crane/crane-1.png'
import crane2 from 'assets/images/crane/crane-2.png'
import crane3 from 'assets/images/crane/crane-3.png'
import crane4 from 'assets/images/crane/crane-4.png'
import crane5 from 'assets/images/crane/crane-5.png'
import prize2 from 'assets/images/prize-2.png'

import friend from 'assets/images/brand/friend.png'
import EmailIcon from 'assets/images/svg/email3.svg?react'
import FriendIcon from 'assets/images/svg/friend.svg?react'
import LinkIcon from 'assets/images/svg/link-btn.svg?react'
import iconCrane from 'assets/images/crane/icon-crane.svg'

export const Diamond = ({
	item,
	pattern,
	prize,
	isEmail,
	isFriend,
	onSelected,
	isSelect,
	isFull,
}: any) => {
	const [isHover, setIsHover] = useState(false)
	const prizes: any = {
		main: {
			prize: (
				<div className={[st.crane, st.crane_main].join(' ')}>
					<img src={craneMain} alt="" />
				</div>
			),

		},
		email: {
			prize: (
				<div className={[st.prize_email].join(' ')}>
					<img src={prize2} alt="" />
				</div>
			),
			tooltip: (
				<div className={[st.tooltip_2, st.tooltip_2_7].join(' ')}>
					<img src={friend} alt="" />
					<span>приз</span>
				</div>
			)
		},
		friend: {
			prize: (
				<div className={[st.prize_friend].join(' ')}>
					<img src={prize2} alt="" />
				</div>
			)
		},
		1: {
			prize: (
				<div className={[st.crane, st.crane_1].join(' ')}>
					<img src={crane1} alt="" />
				</div>
			)
		},
		2: {
			prize: (
				<div className={[st.crane, st.crane_2].join(' ')}>
					<img src={crane2} alt="" />
				</div>
			)
		},
		3: {
			prize: (
				<div className={[st.crane, st.crane_3].join(' ')}>
					<img src={crane3} alt="" />
				</div>
			)
		},
		4: {
			prize: (
				<div className={[st.crane, st.crane_4].join(' ')}>
					<img src={crane4} alt="" />
				</div>
			)
		},
		5: {
			prize: (
				<div className={[st.crane, st.crane_5].join(' ')}>
					<img src={crane5} alt="" />
				</div>
			)
		},
	}
	const cn = [st.diamond, item, isHover ? st.isHover : ''].join(' ')
	const onHover = () => setIsHover(true)
	const onBlur = () => setIsHover(false)
	const isCrane = (!isEmail && !isFriend && (prize !== 'main' && prize !== 'email' && prize !== 'friend'))

	const selected = ()=> {
		onSelected()
	}

	return (
		<>
			{isCrane &&
                <div
	                onClick={selected}
	                onMouseEnter={onHover}
	                onMouseLeave={onBlur}
	                className={[st.diamond, item].join(' ')}
	                style={{ opacity: 0, zIndex: 500 }}
                />
			}
			<div className={cn}>
				<div className={st.diamond_wrap}>
					<div className={st.diamond_pattern}>
						<img src={pattern} alt="" />
					</div>
					{isCrane &&
                        <div className={st.diamond_square}>
                            <img src={iconCrane} alt=""/>
                        </div>
					}
				</div>

				{prize === 'main' || (prize === 'email' && !isEmail) || (prize === 'friend' && !isFriend) ? (
						<>
							{prize && prizes[prize].prize}
							{prize && prizes[prize].tooltip}
						</>
					) :
					<div className={st.diamond_inner} style={{ opacity: isSelect ? 1 : 0, transition: isFull ? 'all .2s linear' : 'all .3s linear' }}>
						{prize && prizes[prize].prize}
						{prize && prizes[prize].tooltip}
					</div>
				}

				{isEmail &&
                    <div className={st.prize_content}>
                        <EmailIcon />
                        <p>Подтвердите свою<br/> почту и получите <br/> гарантированный подарок!</p>
                        <LinkIcon />
                    </div>
				}

				{isFriend &&
                    <div className={st.prize_content}>
                        <FriendIcon />
                        <p>Приглашайте друзей <br/> и  получайте <br/> гарантированный подарок!</p>
                        <LinkIcon />
                    </div>
				}
			</div>
		</>
	)
}
