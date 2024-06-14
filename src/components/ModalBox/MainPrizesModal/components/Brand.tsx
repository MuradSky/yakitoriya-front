import {reformCn} from 'utils';
import st from '../ContentSecond.module.scss'

const brands: any = {
	avialines: 'prize-modal/brand2.svg',
	citylink: 'prize-modal/brand3.png'
}

export const Brand = ({ brand }: any) => {
	return (
		<div className={st.brand}>
			<img src={reformCn(brands[brand])} alt=""/>
		</div>
	)
}
