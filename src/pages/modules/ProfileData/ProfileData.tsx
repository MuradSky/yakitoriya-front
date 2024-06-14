import {useState, useCallback} from 'react';
import {PromoCodeForm} from 'components/ModalBox';
import { ProfileCard } from 'components/ProfileCard'
import { PrizeList } from 'components/PrizeList';
import st from './ProfileData.module.scss'
import {Button} from 'components/UI';
import PlusIcon from 'assets/images/svg/plus-icon.svg?react'

export const ProfileData = () => {
	const [isOpen, setIsOpen] = useState(false)
	const onOpen = useCallback(()=> setIsOpen(!isOpen), [isOpen])

	return (
		<div className={st.block}>
			<div className="container">
				<h2 className={st.title}>Профиль пользователя</h2>
				<ProfileCard />
				<PrizeList />
				{/*<div className={st.btn_block}>*/}
				{/*	<Button className={st.btn} onClick={onOpen}>*/}
				{/*		<span>Добавить код</span>*/}
				{/*		<PlusIcon/>*/}
				{/*	</Button>*/}
				{/*</div>*/}
			</div>

			{/*<PromoCodeForm isOpen={isOpen} onClosed={onOpen} />*/}
		</div>
	)
}
