import st from './WeeklyDraw.module.scss'
import {Section} from './Section';

import crane1 from 'assets/images/weekly-draw/crane-1.png'
import crane2 from 'assets/images/weekly-draw/crane-2.png'
import crane3 from 'assets/images/weekly-draw/crane-3.png'
import crane4 from 'assets/images/weekly-draw/crane-4.png'
import crane5 from 'assets/images/weekly-draw/crane-5.png'
import flower1 from 'assets/images/weekly-draw/flower-1.png'
import flower2 from 'assets/images/weekly-draw/flower-2.png'

import prize1 from './prize-1.data.json'
import prize2 from './prize-2.data.json'
import prize3 from './prize-3.data.json'
import prize4 from './prize-4.data.json'
import prize5 from './prize-5.data.json'

const content = [
	{
		id: 1,
		crane: {
			src: crane1,
			width: 311,
			height: 357,
			type: 'crane_1'
		},
		title: 'Призы первого уровня за 1-й чек',
		data: prize1
	},
	{
		id: 2,
		crane: {
			src: crane2,
			width: 280,
			height: 282,
			type: 'crane_2'
		},
		title: 'Призы второго уровня за 2-й чек',
		data: prize2
	},
	{
		id: 3,
		crane: {
			src: crane3,
			width: 280,
			height: 292,
			type: 'crane_3'
		},
		title: 'Призы третьего уровня за 3-й чек',
		data: prize3
	},
	{
		id: 4,
		crane: {
			src: crane4,
			width: 280,
			height: 347,
			type: 'crane_4'
		},
		title: 'Призы четвертого уровня за 4-й чек',
		data: prize4
	},
	{
		id: 5,
		crane: {
			src: crane5,
			width: 280,
			height: 280,
			type: 'crane_5'
		},
		title: 'Призы пятого уровня за 5-й чек',
		data: prize5
	},
]

export const WeeklyDraw = () => {
	return (
		<div className={st.block} id="prizes">
			<div className="container">
				<div className={st.wrap}>
					<div className={st.head}>
						<div className={st.head_flower1}>
							<picture>
								<img src={flower1} alt="" width={170} height={170} loading="lazy"/>
							</picture>
						</div>
						<div className={st.head_flower2}>
							<picture>
								<img src={flower2} alt="" width={240} height={240} loading="lazy"/>
							</picture>
						</div>
						<h2 className={st.title}>
							Участвуйте в розыгрыше <br/>
							ценных призов каждую неделю!
						</h2>
					</div>

					{content.map((data: any)=> <Section key={data.id} {...data} />)}
				</div>
			</div>
		</div>
	)
}


export default WeeklyDraw
