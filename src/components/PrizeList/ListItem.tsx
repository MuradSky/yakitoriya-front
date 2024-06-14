import {Status} from './Status';
import st from './PrizeList.module.scss';
import {PrizeContent} from './PrizeContent';
import IconLink2 from 'assets/images/svg/icon-link2.svg?react'
import {usePrizesStore} from '../../store';
import {useCallback} from 'react';

interface PrizeData {
	action: string
	description: null | string
	id: number
	image: null | string
	is_digital: boolean
	name: string
	type: string
	gift_code: string
}

interface ListItemProps {
	idx: number,
	data: {
		gift_code: string,
		id: number,
		prizes: PrizeData,
		gamecode: null | string
		registered_at: string
		action: string
	}
}

export const ListItem = ({ data, idx }: ListItemProps)=> {
	const { addPrizeOpen }: TPrizes = usePrizesStore()
	const onPrizeOpen = useCallback(()=> addPrizeOpen({ isOpen: true, id: idx }), [])
	const { prizes, registered_at } = data

	return (
		<li className={st.item}>
			{registered_at &&
                <div className={st.date}>
                    <span>{registered_at.split(' ')[0]}</span>
					{registered_at.split(' ')[1]}
                </div>
			}
			<Status data={data} />
			<PrizeContent data={prizes} />
			<button className={st.btn} onClick={onPrizeOpen}>
				<span>Показать подарок</span>
				<IconLink2 />
			</button>
		</li>
	)
}
