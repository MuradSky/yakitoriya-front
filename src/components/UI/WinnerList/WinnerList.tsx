import {memo} from 'react';
import st from './WinnerList.module.scss'

interface IData {
	id: number,
	drew_at: string,
	name: string,
	phone: string,
	prize: string,
}

interface TWinnerList {
	data: IData[]
	isEmpty: boolean
}

const Item = ({ drew_at, name, phone, prize }: IData)=> {
	return (
		<li>
			<div className={st.row}>
				<div className={st.col}>{drew_at}</div>
				<div className={st.col}>{name}</div>
				<div className={st.col}>{phone}</div>
				<div className={st.col}>{prize}</div>
			</div>
		</li>
	)
}

export const WinnerList = memo(function WinnerList({ data, isEmpty }: TWinnerList) {

	if (isEmpty) {
		return (
			<div className={st.list_wrap}>
				<div className={st.isEmpty}>Победитель не найден</div>
			</div>
		)
	}

	return (
		<div className={st.list_wrap}>
			<ul className={st.list}>
				{data?.map((item: IData)=> <Item key={item.id} {...item} />)}
			</ul>
		</div>
	)
})
