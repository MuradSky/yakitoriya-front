import {useCallback} from 'react';
import {useUser} from 'hooks';
import st from '../MainPrizesModal.module.scss'

const Loader = () => {
	return (
		<div className={st.loader_sm}>
			<div className={st.lds}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export const UpdateButton = ()=> {
	const { mutatePrizes, prizeIsLoading } = useUser()
	const updatePrizesData = useCallback(async ()=> {
		if (prizeIsLoading) return
		await mutatePrizes()
	}, [mutatePrizes])

	return (
		<button className={st.update_btn} onClick={updatePrizesData} disabled={prizeIsLoading}>
			{prizeIsLoading ?
				<Loader /> :
				<>
					Обновить<br/>
					информацию<br/>
					о подарках
				</>
			}
		</button>
	)
}
