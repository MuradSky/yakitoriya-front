import {useCallback, useState} from 'react';
import {ProfileStatus} from './ProfileStatus';
import {useCodeStore} from 'store';
import IconWarn from 'assets/images/svg/icon-warn.svg?react'
import IconLink2 from 'assets/images/svg/icon-link2.svg?react'
import st from './ProfileCard.module.scss'
import {Button} from '../UI';
import {useEmailOpen, useUser} from 'hooks';
import {reformCn} from 'utils';
import {Subscribe} from '../ModalBox';
import Loader from 'assets/images/svg/pre-loader.svg?react';

const phoneFormatter = (phone: string | undefined)=> {
	if (!phone) return ''
	const [ft, sd, td, fr] = [phone.slice(0, 3), phone.slice(3, 6), phone.slice(6, 8), phone.slice(8, 11)]
	return  `+7 (${ft}) ${sd}-${td}-${fr}`
}

export const ProfileCard = () => {
	const { isLoad, onOpenEmail } = useEmailOpen()
	const [isOpenSubscribe, setIsOpenSubscribe] = useState(false)
	const { user } = useUser()
	const { addOpenInvite }: TCode = useCodeStore()
	const hasConfirmed = user?.need_confirmation
	const onOpenSubscribe = useCallback(()=> {
		setIsOpenSubscribe(!isOpenSubscribe)
	}, [isOpenSubscribe, hasConfirmed])

	return (
		<div className={st.block}>
			<div className={st.item}>
				<ul className={st.data}>
					<li>
						<div className={st.data_lab}>Ваше имя</div>
						<div className={st.data_val}>
							{/*<IconWarn />*/}
							{user?.name}
						</div>
					</li>
					<li className={reformCn(hasConfirmed ? st.isInfo : '')} >
						<div className={st.data_lab}>E-mail</div>
						{hasConfirmed ?
							<div className={st.data_val} style={{ color: (user?.email && hasConfirmed) ? '#ed1b34' : '' }} onClick={onOpenEmail}>
								{user?.email ?
									<div className={st.tooltip}>
										Почта не подтверждена. Вам отправлено письмо, перейдите по ссылке из письма, чтобы подтвердить почту.
									</div> :
									<div className={st.tooltip}>
										Нажмите на ссылку "Подтвердить почту", подпишитесь на e-mail рассылку и откройте журавля с подарками
									</div>
								}
								<IconWarn style={{ color: '#ed1b34' }}/>
								{user?.email || 'Вы не указали почту'}
							</div>:
							<div className={st.data_val}>
								<div className={st.tooltip}>Почта подтверждена</div>
								<IconWarn style={{ color: '#999' }}/>
								{user?.email}
							</div>
						}
					</li>
					<li>
						<div className={st.data_lab}>Телефон</div>
						<div className={st.data_val}>{phoneFormatter(user?.phone)}</div>
					</li>
				</ul>
				<button className={st.subscriber} onClick={onOpenSubscribe}>
					Подписка на рекламу
				</button>
			</div>
			<div className={st.item}>
				<ProfileStatus />
				<div className={st.buttons}>
					<button
						className={reformCn(st.btn, isLoad ? st.isLoad : '')}
						onClick={onOpenEmail}
						disabled={!hasConfirmed}
					>
						{isLoad && <Loader className={st.loader} />}
						<span style={{ opacity: isLoad ? 0 : 1 }}>Подтвердить почту</span>
						<IconLink2 style={{ opacity: isLoad ? 0 : 1 }}/>
					</button>

					<Button
						className={st.btn}
						variant="empty"
						isDisabled={true}
					>
						<span>Пригласить друга</span>
						<IconLink2/>
					</Button>
				</div>
			</div>

			<Subscribe isOpen={isOpenSubscribe} onClosed={onOpenSubscribe} />
		</div>
	)
}
