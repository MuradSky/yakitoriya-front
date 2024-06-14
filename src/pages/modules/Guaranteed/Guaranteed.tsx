import st from './Guaranteed.module.scss'
import {Partners} from './Partners';
import {Yakitoria} from './Yakitoria';

export const Guaranteed = ()=> {
	return (
		<div className={st.block}>
			<div className={st.wrap}>
				<h2 className={st.title}>Гарантированные подарки</h2>
				<Partners />
			</div>
			<div className={st.wrap}>
				<h2 className={st.title}>Блюда в подарок</h2>
				<Yakitoria />
			</div>
		</div>
	)
}

export default Guaranteed
