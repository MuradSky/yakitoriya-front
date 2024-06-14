import {ListItem} from './ListItem'
import {useUser} from 'hooks'
import st from './PrizeList.module.scss'

const Loader = () => {
	return (
		<div className={st.loader_sm}>
			<div className={st.lds}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export const PrizeList = () => {
	const { prizeIsLoading, prizeData } = useUser()
	return (
		<div className={st.block}>
			{prizeIsLoading && <Loader />}
			{(prizeData?.length === 0) ?
				<div className={st.empty} style={{ opacity: prizeIsLoading ? .3 : 1  }}>
					У Вас пока нет зарегистрированных кодов с чека
				</div> :
				<ul className={st.list} style={{ opacity: prizeIsLoading ? .3 : 1 }}>
					{prizeData?.map((item: any, index: number) => (
						<ListItem
							key={item.id}
							data={item}
							idx={item.id}
						/>
					))}
				</ul>
			}
		</div>
	)
}
