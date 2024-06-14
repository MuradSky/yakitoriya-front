import {SearchInput, PeriodsTab, WinnerList, ButtonStatic} from 'components/UI';
import {useWinners} from 'hooks';
import st from './Winners.module.scss'

export const Winners = ()=> {
	const { search, isNotCompleted, isEmpty, winners, isMoreHide, tabs, tab, onTabChange, onMore, onChange } = useWinners();

	return (
		<div className={st.block} id="winners">
			<div className="container">
				<div className={st.head}>
					<h2 className={st.title}>Победители</h2>
					<SearchInput
						name="phone"
						value={search}
						placeholder="Введите имя или 4 последние цифры телефона"
						onChange={onChange}
						className={st.search}
					/>
				</div>

				<PeriodsTab data={tabs} onTabChange={onTabChange} activeTab={tab}/>

				<WinnerList data={winners} isEmpty={isEmpty} />

				{isNotCompleted && <div style={{
					color: '#777',
					fontSize: '24px',
					marginTop: '32px',
					textAlign: 'center',
				}}>Розыгрыш ценных призов пока не проведен</div>}

				{(!isMoreHide && !isEmpty) && (
					<div className={st.more}>
						<ButtonStatic
							text="Показать больше"
							variant="empty"
							onClick={onMore}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Winners
