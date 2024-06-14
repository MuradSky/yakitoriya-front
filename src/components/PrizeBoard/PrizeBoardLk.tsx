import {useCallback} from 'react';
import {DiamondLk} from './DiamondLk';
import {useUser} from 'hooks';
import {usePrizesStore} from 'store';
import pattern1 from 'assets/images/patterns/pattern-1.png'
import pattern2 from 'assets/images/patterns/pattern-2.png'
import st from './PrizeBoard.module.scss'

export const PrizeBoardLk = () => {
	const { addPrizeOpen }: TPrizes = usePrizesStore()
	const { prizesNumbers } = useUser()

	const openPrize = useCallback((id: number | string)=> {
		addPrizeOpen({isOpen: true, id})
	}, [])

	return (
		<div className={st.board} >
			{[1, 2, 3, 4, 5].map((item: any, index: number) => {
				return (
					<DiamondLk
						key={index}
						item={st[`diamond_${item}`]}
						pattern={pattern1}
						prize={item.toString()}
						onSelected={()=> openPrize(prizesNumbers[index])}
						isSelect={prizesNumbers[index]}
					/>
				)
			})}
			<DiamondLk item={st.diamond_6} pattern={pattern1} prize="main" />
			<DiamondLk
				item={st.diamond_7}
				pattern={pattern2}
				isEmail
				onSelected={()=> openPrize('email')}
			/>
			<DiamondLk
				item={st.diamond_8}
				pattern={pattern2}
				isFriend
				onSelected={()=> openPrize('friend')}
			/>
		</div>
	)
}
