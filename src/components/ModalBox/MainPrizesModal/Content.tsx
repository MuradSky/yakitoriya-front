import {useCallback, useEffect, useRef} from 'react'
import {Tabs, Crane, ContentSlider} from './components'
import {useContent} from './hooks';
import {imageLoader} from 'assets'
import ClearBtn from 'assets/images/svg/clear-btn.svg?react'
import st from './ContentSecond.module.scss'

interface TContentSecond {
	data: any
	onClosed: ()=> void
	index: number
	swiperPusher: (swiper: any, id: number)=> void
}

const selectData = (data: any, select: string)=> !data ? [] : data[select]

const Background =()=> {
	return (
		<div className={st.char_bg}>
			<picture>
				<source srcSet={imageLoader('prize-modal/bg-1-m.png')} width={345} height={160} media="(max-width: 768px)" />
				<img src={imageLoader('prize-modal/bg-1.png')} alt="" />
			</picture>
		</div>
	)
}

export const Content = ({ data, onClosed, index, swiperPusher } : TContentSecond) => {
	const { swiperRef, current, isOpenQr, onTab } = useContent(data, swiperPusher)
	const prizes = selectData(data, 'prizes')
	const handleModalClose = useCallback(()=> !isOpenQr && onClosed(), [isOpenQr])

	return (
		<div className={st.content}>
			<button className={st.closed} onClick={handleModalClose}>
				<ClearBtn />
			</button>
			<div className={st.box} id="prize-box">
				<ContentSlider swiperRef={swiperRef} data={prizes}/>
				<div className={st.char}>
					<Background />
					<Crane index={index} />
				</div>
			</div>
			<Tabs data={data?.prizes} onTab={onTab} current={current}/>
		</div>
	)
}
