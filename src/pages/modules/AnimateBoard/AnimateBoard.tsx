import st from './AnimateBoard.module.scss'
import {PrizeBoard} from 'components/PrizeBoard'
import {ButtonStatic} from 'components/UI'
import {useOpenAuthModal} from 'hooks'
import flowers from 'assets/images/animate-board/flowers.png'
import flowersM from 'assets/images/animate-board/flowers-m.png'
import flowersS from 'assets/images/animate-board/flowers-s.png'

export const AnimateBoard = () => {
	const { isLogin, onOpenAuth } = useOpenAuthModal()

	return (
		<div className={st.block}>
			<div className={st.bg}>
				<picture>
					<source srcSet={flowersS} width={375} height={439} media="(max-width: 400px)" />
					<source srcSet={flowersM} width={1024} height={600} media="(max-width: 1024px)" />
					<img src={flowers} alt=""  width={1920} height={714} loading="lazy"/>
				</picture>
			</div>
			<div className="container">
				<div className={st.board}>
					<PrizeBoard />
				</div>

				<div className={st.btn}>
					<ButtonStatic text={ isLogin ? 'Участвовать' : 'Зарегистрироваться' } onClick={onOpenAuth} />
				</div>
			</div>
		</div>
	)
}

export default AnimateBoard
