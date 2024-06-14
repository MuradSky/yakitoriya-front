import {lazy, Suspense} from 'react';
import {Intro, ProfileData} from './modules'
import {ToTheTop} from 'components/ToTheTop'

const MainPrizesModal = lazy(()=> import('components/ModalBox/MainPrizesModal/MainPrizesModal'))
const ReceiveGift = lazy(()=> import('components/ModalBox/ReceiveGift'))

export const Profile = () => {
	return (
		<>
			<Intro />
			<ProfileData />
			<ToTheTop isFixed />
			<Suspense fallback={null}>
				<MainPrizesModal />
				<ReceiveGift />
			</Suspense>
		</>
	)
}
