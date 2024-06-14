import {useCallback, useEffect, useState} from 'react';
import { VKShareButton, OKShareButton, TelegramShareButton } from 'react-share'
import ReactModal from 'react-modal';
import useSWR from 'swr';
import axios from 'axios';
import {ButtonStatic} from '../UI';
import {useCodeStore} from 'store';
import {customStyles} from './customStyles';
import {Cookies, reformCn} from 'utils';
import Clear from 'assets/images/svg/clear.svg?react';
import Friend from 'assets/images/svg/friend.svg?react';
import IconLink from 'assets/images/svg/icon-link3.svg?react';
import IconVk from 'assets/images/svg/icon-vk.svg?react';
import IconOk from 'assets/images/svg/icon-ok.svg?react';
import IconTg from 'assets/images/svg/icon-tg.svg?react';
import IconCopy from 'assets/images/svg/icon-copy.svg?react';
import st from './ModalAuth.module.scss';

const fetcher = (url: string)=> {
	return axios.post(url, {}, {
		headers: {
			Authorization: `Bearer ${Cookies.get('_yak_token')}`,
			"Accept": "application/json",
		}
	})
}

const shareTitle = 'Присоединяйтесь к «Оригами удачи» и коллекционируйте журавликов в Якитории, чтобы выиграть 1 000 000 рублей и другие призы! Переходите по ссылке, регистрируйтесь и получайте гарантированный подарок!'


export const InviteModal = ()=> {
	const { isOpenInvite, inviteCode, addOpenInvite, addInviteCode }: TCode = useCodeStore()
	const [copy, setCopy] = useState('')
	const {isLoading, mutate} = useSWR('/user/referral/code', fetcher, {
		revalidateIfStale: false,
		revalidateOnMount: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	})

	useEffect(()=> {
		if (isOpenInvite) mutate().then((res: any)=> addInviteCode(res.data.data))
	}, [isOpenInvite])

	useEffect(()=> {
		if (!!copy) {
			const timer = setTimeout(()=> setCopy(''), 3000)
			return ()=> clearTimeout(timer)
		}
	}, [copy])

	const onClose = useCallback(()=> addOpenInvite(false), [])

	const onCopyCode = (isUrl?: boolean)=> async ()=> {
		const isProd = location.host === 'promo.yakitoriya.ru'
		try {
			await navigator.clipboard.writeText(
				(isUrl && isProd) ? inviteCode.url :
					isUrl ? location.origin+inviteCode.url : inviteCode.code
			)
			setCopy(isUrl? 'url' : 'code')
		} catch (err) {
			console.error('Unable to copy text: ', err);
		}
	}


	return (
		<ReactModal isOpen={isOpenInvite} style={customStyles}>
			<div className={st.box}>
				<button className={st.closed} onClick={onClose}>
					<Clear/>
				</button>

				{isLoading &&
                    <div className={st.loader_sm}>
                        <div className={st.lds}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
				}

				<div className={reformCn(st.body, isLoading ? st.body_load : '')}>
					<div className={st.title}>Приглашайте друзей!</div>
					<div className={st.icon}>
						<Friend />
					</div>
					<div className={reformCn(st.text, st.text_mb30)}>
						Скопируйте код или ссылку <br/> и передайте другу
					</div>

					<div className={st.promocode}>
						<div className={st.promocode_label}>Код друга</div>
						<div className={st.promocode_wrap}>
							<div className={st.promocode_title}>{inviteCode.code}</div>
							<button className={st.promocode_btn} onClick={onCopyCode()}>
								{copy === 'code' && <div className={st.tooltip}>Скопировано</div>}
								Копировать <IconCopy />
							</button>
						</div>
					</div>

					<button className={st.copy_btn} onClick={onCopyCode(true)}>
						{copy === 'url' && <div className={st.tooltip}>Скопировано</div>}
						Скопировать ссылку<IconLink />
					</button>

					<div className={st.social}>
						<div className={st.social_title}>Поделиться с другом:</div>

						<div className={st.social_wrap}>
							<VKShareButton
								title={shareTitle}
								url={`https://promo.yakitoriya.ru/${inviteCode.url}`}
							>
								<IconVk />
							</VKShareButton>
							<OKShareButton
								title={shareTitle}
								url={`https://promo.yakitoriya.ru/${inviteCode.url}`}
							>
								<IconOk />
							</OKShareButton>
							<TelegramShareButton
								title={shareTitle}
								url={`https://promo.yakitoriya.ru/${inviteCode.url}`}
							>
								<IconTg />
							</TelegramShareButton>
						</div>
					</div>

					<ButtonStatic
						onClick={onClose}
						className={st.button_ok}
						text="Закрыть"
					/>
				</div>
			</div>
		</ReactModal>
	)
}


export default InviteModal
