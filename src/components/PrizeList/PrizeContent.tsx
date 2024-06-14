import st from './PrizeList.module.scss';
import {reformCn} from '../../utils';

const PromoAndPinCode = ({ giftCode, pinCode }: { giftCode: string, pinCode: string }) => {
	if (giftCode && !pinCode) {
		return <div className={st.content_code}>(промокод: <span>{giftCode}</span>)</div>
	}
	if (!giftCode && pinCode) {
		return <div className={st.content_code}>(пин-код: <span>{pinCode}</span>)</div>
	}
	if (giftCode && pinCode) {
		return <div className={st.content_code}>(промокод: <span>{giftCode}</span> {' '} пин-код: <span>{pinCode}</span>)</div>
	}
    return null
}

const FormEmail = ({ name, gift_code, pincode }: any)=> {
	return (
		<li className={st.content}>
			<div className={st.content_title}>{name}</div>
			<PromoAndPinCode giftCode={gift_code} pinCode={pincode} />
			<div className={st.content_text} style={{ color: '#2f8b9b' }}>
				Гарантированный подарок за подписку
			</div>
		</li>
	)
}

const ForFriend = ({ name, gift_code, pincode }: any)=> {
	return (
		<li className={st.content}>
			<div className={st.content_title}>{name}</div>
			<PromoAndPinCode giftCode={gift_code} pinCode={pincode} />
			<div className={st.content_text} style={{ color: '#2f8b9b' }}>
				Гарантированный подарок за друга
			</div>
		</li>
	)
}

const ForGame = ({ name, type, gift_code, pincode }: any)=> {
	if (type === 'Гарантированный приз') {
		return (
			<li className={st.content}>
				<div className={st.content_title}>{name}</div>
				<PromoAndPinCode giftCode={gift_code} pinCode={pincode} />
				<div className={st.content_text} style={{ color: '#2f8b9b' }}>
					Гарантированный подарок за код
				</div>
			</li>
		)
	}

	return (
		<li className={reformCn(st.content)}>
			<div className={st.content_red}>
				<div className={reformCn(st.content_title, !gift_code ? st.is_mb : '')}>{name}</div>
				<PromoAndPinCode giftCode={gift_code} pinCode={pincode} />
				<div className={st.content_text} style={{ color: '#ed1b34' }}>
					еженедельный приз
				</div>
			</div>
		</li>
	)
}

export const PrizeContent = ({ data }: any) => {
	return (
		<ul className={st.contents}>
			{data?.map((data: any)=> {
				const { action }: any = data
				return (
					action === 'Подтверждение почты' ? <FormEmail key={data.id} {...data} /> :
					action === 'Совершение покупки рефералом' ? <ForFriend key={data.id} {...data} /> :
					<ForGame key={data.id} {...data} />
				)
			})}
		</ul>
	)
}
