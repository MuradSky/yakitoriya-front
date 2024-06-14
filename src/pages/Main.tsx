import {CSSProperties, lazy, Suspense} from 'react';
import {FirstScreen} from './modules';
import {Loader} from '../components/Loader';
import {StopPromo} from '../components/ModalBox';

const Rules = lazy(() => import('./modules/Rules/Rules'))
const AnimateBoard = lazy(() => import('./modules/AnimateBoard/AnimateBoard'))
const WeeklyDraw = lazy(() => import('./modules/WeeklyDraw/WeeklyDraw'))
const MainPrize = lazy(() => import('./modules/MainPrize/MainPrize'))
const Guaranteed = lazy(() => import('./modules/Guaranteed/Guaranteed'))
const Winners = lazy(() => import('./modules/Winners/Winners'))
const Partners = lazy(() => import('./modules/Partners/Partners'))
const GameStatusWidget = lazy(() => import('components/GameStatusWidget/GameStatusWidget'))

const reset: CSSProperties = {
	position: 'relative',
	background: '#fff',
	height: '500px',
	zIndex: 100,
}

export const Main = () => {
	return (
		<>
			<FirstScreen />
			<Suspense fallback={<Loader style={reset} />}>
				<Rules />
				<AnimateBoard />
				<WeeklyDraw />
				<MainPrize />
				<Guaranteed />
				<Winners />
				<Partners />
				<GameStatusWidget />
			</Suspense>
			<StopPromo />
		</>
	)
}
