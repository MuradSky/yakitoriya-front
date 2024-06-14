import {imageLoader} from 'assets';
import st from '../ContentSecond.module.scss';
import {reformCn} from 'utils';

const cranes: any = [
	(
		<div className={reformCn(st.crane, st.crane_1)}>
			<picture>
				<source srcSet={imageLoader('prize-modal/crane-1-m.png')} media="(max-width: 768px)" />
				<img src={imageLoader('prize-modal/crane-1.png')} alt=""/>
			</picture>
		</div>
	),
	(
		<div className={reformCn(st.crane, st.crane_2)}>
			<picture>
				<source srcSet={imageLoader('prize-modal/crane-2-m.png')} media="(max-width: 768px)" />
				<img src={imageLoader('prize-modal/crane-2.png')} alt=""/>
			</picture>
		</div>
	),
	(
		<div className={reformCn(st.crane, st.crane_3)}>
			<picture>
				<source srcSet={imageLoader('prize-modal/crane-3-m.png')} media="(max-width: 768px)" />
				<img src={imageLoader('prize-modal/crane-3.png')} alt=""/>
			</picture>
		</div>
	),
	(
		<div className={reformCn(st.crane, st.crane_4)}>
			<picture>
				<source srcSet={imageLoader('prize-modal/crane-4-m.png')} media="(max-width: 768px)" />
				<img src={imageLoader('prize-modal/crane-4.png')} alt=""/>
			</picture>
		</div>
	),
	(
		<div className={reformCn(st.crane, st.crane_5)}>
			<picture>
				<source srcSet={imageLoader('prize-modal/crane-5-m.png')} media="(max-width: 768px)" />
				<img src={imageLoader('prize-modal/crane-5.png')} alt=""/>
			</picture>
		</div>
	)
]

export const Crane = ({ index }: { index: number }) => {
	return cranes[index]
}
