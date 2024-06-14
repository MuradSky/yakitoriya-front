import st from './Intro.module.scss'
import introBg from 'assets/images/intro-bg.png'
import introBgS from 'assets/images/intro-bgs.png'
import {EnterTheCode} from 'components/EnterTheCode';
import {PrizeBoardLk} from 'components/PrizeBoard';

export const Intro = () => {
	return (
		<div className={st.intro} >
			<div className={st.bg}>
				<picture>
					<source srcSet={introBgS} width={375} height={608} media="(max-width: 420px)" />
					<img src={introBg} alt="" width={1920} height={1068} />
				</picture>
			</div>

			<div className={st.board}>
				<PrizeBoardLk />
			</div>
			<EnterTheCode />
		</div>
	)
}
