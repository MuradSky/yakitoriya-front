import {useCallback, useState} from 'react'
import st from './PrizeBoard.module.scss'
import craneMain from 'assets/images/crane/crane-main.png'
import crane1 from 'assets/images/crane/crane-1.png'
import crane2 from 'assets/images/crane/crane-2.png'
import crane3 from 'assets/images/crane/crane-3.png'
import crane4 from 'assets/images/crane/crane-4.png'
import crane5 from 'assets/images/crane/crane-5.png'
import emailPrize from 'assets/images/crane/email-prize.png'
import friendPrize from 'assets/images/crane/firend-prize.png'
import prize2 from 'assets/images/prize-2.png'
import GiftBox from 'assets/images/svg/gift-box.svg?react'
import friend from 'assets/images/brand/friend.png'
import EmailIcon from 'assets/images/svg/email3.svg?react'
import FriendIcon from 'assets/images/svg/friend.svg?react'
import LinkIcon from 'assets/images/svg/link-btn.svg?react'
import iconCrane from 'assets/images/crane/icon-crane.svg'
import {reformCn} from 'utils';
import {useEmailOpen, useUser} from 'hooks';
import {useCodeStore} from 'store';

const EmailCell = ({ isEmail, isNeedConfirmed }: any )=> {
	if (isEmail && isNeedConfirmed) {
		return (
			<div className={st.prize_content}>
				<EmailIcon />
				<p>Подтвердите свою<br/> почту, получите <br/> гарантированный подарок!</p>
				<LinkIcon />
			</div>
		)
	}

	if (isEmail) {
		return (
			<div className={st.prize_content}>
				<div className={st.email_prize}>
					<img src={emailPrize} alt=""/>
				</div>
				<p>
					Гарантированный подарок <br/>
					за подтверждение <br/>
					почты
				</p>
			</div>
		)
	}

	return null
}

const FriendCell = ({ isFriend, isAddRef }: any)=> {
	if (isFriend && isAddRef) {
		return (
			<div className={st.prize_content}>
				<div className={st.fiend_prize}>
					<img src={friendPrize} alt=""/>
				</div>
				<p>Гарантированный подарок<br/> за чек друга</p>
			</div>
		)
	}

	if (isFriend) {
		return (
			<div className={st.prize_content}>
				<FriendIcon />
				<p>Приглашайте друзей,<br/> получайте <br/> гарантированный подарок!</p>
				<LinkIcon />
			</div>
		)
	}

	return null
}

export const DiamondLk = ({
	item,
	pattern,
	prize,
	isEmail,
	isFriend,
	onSelected,
	isSelect,
}: any) => {
	const { onOpenEmail, isDisabledModal } = useEmailOpen()
	const { user, isAddRef } = useUser()
	const { addOpenInvite }: TCode = useCodeStore()
	const [isHover, setIsHover] = useState(false)

	const prizes: any = {
		main: {
			prize: (
				<div className={reformCn(st.crane, st.crane_main)}>
					<img src={craneMain} alt="" />
				</div>
			),
			tooltip: (
				<div className={st.tooltip}>
					Больше кодов, больше <br/> призов!
				</div>
			)
		},
		email: {
			prize: (
				<div className={st.prize_email}>
					<img src={prize2} alt="" />
				</div>
			),
			tooltip: (
				<div className={reformCn(st.tooltip_2, st.tooltip_2_7)}>
					<p><i>Смотреть</i> приз</p>
					<span><GiftBox /></span>
				</div>
			)
		},
		friend: {
			prize: (
				<div className={st.prize_friend}>
					<img src={prize2} alt="" />
				</div>
			),
			tooltip: (
				<div className={reformCn(st.tooltip_2, st.tooltip_2_7)}>
					<p><i>Смотреть</i> приз</p>
					<span><GiftBox /></span>
				</div>
			)
		},
		1: {
			prize: (
				<div className={reformCn(st.crane, st.crane_1)}>
					<img src={crane1} alt="" />
				</div>
			),
			tooltip: (
				<div className={reformCn(st.tooltip_2, st.tooltip_2_1)}>
					<p><i>Смотреть</i> приз</p>
					<span><GiftBox /></span>
				</div>
			)
		},
		2: {
			prize: (
				<div className={reformCn(st.crane, st.crane_2)}>
					<img src={crane2} alt="" />
				</div>
			),
			tooltip: (
				<div className={reformCn(st.tooltip_2, st.tooltip_2_2)}>
					<p><i>Смотреть</i> приз</p>
					<span><GiftBox /></span>
				</div>
			)
		},
		3: {
			prize: (
				<div className={reformCn(st.crane, st.crane_3)}>
					<img src={crane3} alt="" />
				</div>
			),
			tooltip: (
				<div className={reformCn(st.tooltip_2, st.tooltip_2_3)}>
					<p><i>Смотреть</i> приз</p>
					<span><GiftBox /></span>
				</div>
			)
		},
		4: {
			prize: (
				<div className={reformCn(st.crane, st.crane_4)}>
					<img src={crane4} alt="" />
				</div>
			),
			tooltip: (
				<div className={reformCn(st.tooltip_2, st.tooltip_2_2)}>
					<p><i>Смотреть</i> приз</p>
					<span><GiftBox /></span>
				</div>
			)
		},
		5: {
			prize: (
				<div className={reformCn(st.crane, st.crane_5)}>
					<img src={crane5} alt="" />
				</div>
			),
			tooltip: (
				<div className={reformCn(st.tooltip_2, st.tooltip_2_3)}>
					<p><i>Смотреть</i> приз</p>
					<span><GiftBox /></span>
				</div>
			)
		},
	}

	const onHover = () => setIsHover(true)
	const onBlur = () => setIsHover(false)
	const selected = useCallback(()=> {
		if (isEmail) {
			return isDisabledModal ? onSelected() : onOpenEmail()
		}
		if (isFriend) {
			return isAddRef ? onSelected() : addOpenInvite(true)
		}
		if (isSelect) onSelected()
	}, [isSelect, user, isDisabledModal, isAddRef])

	const cn = reformCn(st.diamond, item, isHover ? st.isHover : '')
	const isPrizes = prize !== 'main'
	const isNeedConfirmed = user?.need_confirmation

	return (
		<>
			{isPrizes &&
                <div
                    onClick={selected}
                    onMouseEnter={onHover}
                    onMouseLeave={onBlur}
                    className={reformCn(st.diamond, item)}
                    style={{ opacity: 1, zIndex: 500, boxShadow: 'none' }}
                >
	                {(isEmail && !isNeedConfirmed) && prizes.email.tooltip}
	                {(isFriend && isAddRef) && prizes.friend.tooltip}
					{(prize && isSelect) && prizes[prize].tooltip}
                </div>
			}
			<div className={cn}>
				<div className={st.diamond_wrap}>
					<div className={st.diamond_pattern}>
						<img src={pattern} alt="" />
					</div>
					{(isPrizes && !isFriend && !isEmail) &&
                        <div className={st.diamond_square}>
                            <img src={iconCrane} alt=""/>
                        </div>
					}
				</div>

				{prize === 'main' ? (
						<>
							{prize && prizes.main.prize}
							{prize && prizes.main.tooltip}
						</>
					) :
					<div className={st.diamond_inner} style={{ opacity: isSelect ? 1 : 0, transition: 'all .3s linear' }}>
						{prize && prizes[prize].prize}
					</div>
				}

				<EmailCell isEmail={isEmail} isNeedConfirmed={isNeedConfirmed} />
				<FriendCell isFriend={isFriend} isAddRef={isAddRef} />
			</div>
		</>
	)
}
