import st from './WeeklyDraw.module.scss'
import {useScreenSize} from 'hooks'
import {reformCn} from 'utils'
import {imageLoader} from 'assets'

interface PrizeListProps {
	id: number,
	title: string,
	img: string
	type: string
}

interface SectionProps {
	crane: {
		src: string
		width: number,
		height: number,
		type: string,
	},
	data: PrizeListProps[],
	title: string,
}

const PrizeList = ({ data }: { data: PrizeListProps[] })=> {
	return (
		<ul className={st.prize}>
			{data?.map((item: PrizeListProps) => (
				<li className={st.prize_item} key={item.id}>
					<div className={reformCn(st.prize_img)}>
						<picture>
							<img src={imageLoader(item.img)} alt="" width={150} height={112} loading="lazy" />
						</picture>
					</div>
					<div className={st.prize_title}>{item.title}</div>
				</li>
			))}
		</ul>
	)
}



export const Section = ({ crane, data, title }: SectionProps)=> {
	const { isTablet } = useScreenSize()
	return (
		<div className={st.section}>
			{!isTablet && <h3 className={st.section_title}>{title}</h3>}

			<div className={st.section_wrap}>
				<div className={st.section_head}>
					<div className={reformCn(st.section_crane, st[crane.type])}>
						<picture>
							<img src={crane.src} alt=""  loading="lazy"  width={crane.width} height={crane.height} />
						</picture>
					</div>

					{isTablet && <h3 className={st.section_title}>{title}</h3>}
				</div>

				<PrizeList data={data} />
			</div>
		</div>
	)
}
