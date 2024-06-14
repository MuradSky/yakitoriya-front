import st from '../ContentSecond.module.scss'

interface TabsProps {
	data: any,
	onTab: any,
	current: number
}

export const Tabs = ({ data, onTab, current }: TabsProps)=> {
	if (data?.length === 1) return null
	return (
		<ul className={st.tab}>
			{data?.map((item:any, i: number) => (
				<li
					key={item.id}
					onClick={onTab(i)}
					className={i === current ? st.tab_active : ''}
				>
					Приз №{i+1}
				</li>
			))}
		</ul>
	)
}
