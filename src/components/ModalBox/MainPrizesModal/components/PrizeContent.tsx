import {Status} from './Status';
import {UpdateButton} from './UpdateButton';
import {GiftCode} from './GiftCode';
import {Description} from './Description';
import {PrizeImage} from './PrizeImage';
import st from '../ContentSecond.module.scss';
import {BottomButtons} from './BottomButtons';

interface PrizeContentProps {
	data?: ApiPrize | null | undefined
}

export const PrizeContent = ({ data }: PrizeContentProps) => {
	if (!data) {
		return (
			<div className={st.prize}>
				<UpdateButton />
			</div>
		)
	}

	return (
		<div className={st.prize}>
			<Status action={data.action} type={data.type} />

			<div className={st.name}>{data?.name}</div>

			<PrizeImage data={data} />

			<GiftCode data={data} />

			<Description data={data}>
				<BottomButtons data={data} />
			</Description>
		</div>
	)
}
