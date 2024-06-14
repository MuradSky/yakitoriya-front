import {Diamond} from './Diamond';
import {useAnimateStep, useCraneSelect} from 'hooks';
import pattern1 from 'assets/images/patterns/pattern-1.png'
import pattern2 from 'assets/images/patterns/pattern-2.png'
import st from './PrizeBoard.module.scss'

export const PrizeBoard = () => {
	const { step: animaStep, reset, pause, reStart, play, isFull, isPause } = useAnimateStep()
	const { onSelected, register, current, resetSelected } = useCraneSelect(5, reset, reStart, animaStep)

	const onMouseLeave = ()=> {
		if (current !== null) return  resetSelected()
		play()
	}

	return (
		<div
			className={st.board}
			onMouseEnter={pause}
			onMouseLeave={onMouseLeave}
		>
			{[1, 2, 3, 4, 5].map((item, index) => {
				return (
					<Diamond
						key={index}
						item={st[`diamond_${item}`]}
						pattern={pattern1}
						prize={item.toString()}
						onSelected={onSelected(index)}
						isSelect={register[index]}
						isFull={isFull}
						isPause={isPause}
					/>
				)
			})}
			<Diamond item={st.diamond_6} pattern={pattern1} prize="main" />
			<Diamond
				item={st.diamond_7}
				pattern={pattern2}
				// prize="email"
				isEmail
			/>
			<Diamond
				item={st.diamond_8}
				pattern={pattern2}
				// prize="friend"
				isFriend
			/>
		</div>
	)
}
