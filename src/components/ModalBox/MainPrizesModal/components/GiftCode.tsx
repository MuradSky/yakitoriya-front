import {Tooltip} from 'components/UI';
import Copy from 'assets/images/svg/icon-copy.svg?react';
import st from '../ContentSecond.module.scss';
import {useCallback, useState} from 'react';

interface GiftCodeProps {
	data: ApiPrize
}

export const GiftCode = ({ data }: GiftCodeProps)=> {
	const [isCopy, setIsCopy] = useState(false)
	const onCopy = useCallback(async ()=> {
		try {
			await navigator.clipboard.writeText(data?.gift_code || '')
			setIsCopy(true)
			setTimeout(()=> setIsCopy(false), 3000)
		} catch (err) {
			console.log(err)
		}
	}, [isCopy, data])

	if (!(data?.is_digital && data?.id !== 15)) return null

	return (
		<div className={st.giftCode}>
			<div className={st.giftCode_title}>Промокод</div>
			<div className={st.giftCode_bottom}>
				<div className={st.giftCode_code}>{data?.gift_code}</div>
				<button className={st.giftCode_btn} onClick={onCopy}>
					<Tooltip title={isCopy ? 'Скопировано!' : 'Скопировать' } flow="bottom" className={st.giftCode_row}>
						Копировать<Copy />
					</Tooltip>
				</button>
			</div>
			{data?.pincode && <div className={st.pinCode}>пин-код: {data?.pincode}</div>}
		</div>
	)
}
