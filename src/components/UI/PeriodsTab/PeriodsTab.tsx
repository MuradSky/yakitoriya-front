import { memo } from 'react'
import {reformCn} from 'utils'
import st from './PeriodsTab.module.scss'

interface TData {
	id: number,
	period: string,
	drew_at: string,
	type: string,
	is_completed: boolean
}

interface TTab extends TData {
	onChange: ()=> void,
	isActive: boolean
}

interface TPeriodsTab {
	data: TData[],
	onTabChange: (id: number) => void
	activeTab: number | null
}

const Tab = ({ period, drew_at, type, onChange, isActive, is_completed }: TTab) => {
	const cn = reformCn(isActive ? st.isActive : '')

	if (type === 'main') {
		return (
			<li className={cn}>
				<button  onClick={onChange}>
					<span>🎉 Главный приз!</span>
					{isActive && <span>12.01.2024</span>}
				</button>
			</li>
		)
	}

	return (
		<li className={cn}>
			<button onClick={onChange} disabled={!is_completed}>
				<span>{period}</span>
				{isActive && <span>Розыгрыш с {drew_at}</span>}
			</button>
		</li>
	)
}

export const PeriodsTab = memo(function PeriodsTab ({ data, onTabChange, activeTab }: TPeriodsTab) {
	return (
		<ul className={st.list}>
			{data?.map((item: TData)=> (
				<Tab
					key={item.id}
					onChange={()=> item.is_completed ? onTabChange(item.id) : null}
					isActive={item.id === activeTab}
					{...item}
				/>
			))}


		</ul>
	)
})
