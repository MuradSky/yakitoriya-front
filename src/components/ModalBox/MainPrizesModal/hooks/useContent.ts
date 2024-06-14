import {useCallback, useEffect, useRef, useState} from 'react';
import {usePrizesStore} from 'store';

export const useContent = (data: any, swiperPusher: any)=> {
	const swiperRef = useRef<any>(null)
	const { isOpenQr }: TPrizes = usePrizesStore()
	const [current, setCurrent] = useState(0)

	useEffect(()=> {
		const swiper = swiperRef.current?.swiper
		if (swiper) {
			const changeSwiper = ({ activeIndex }: any)=> setCurrent(activeIndex)
			swiper.on('slideChange', changeSwiper)
			return ()=> swiper.off('slideChange', changeSwiper)
		}
	}, [swiperRef])

	useEffect(()=> {
		swiperPusher(swiperRef.current?.swiper || null, data.id)
	}, [swiperRef])

	const onTab = useCallback((index: number)=> ()=> {
		if (isOpenQr) return
		swiperRef.current?.swiper.slideTo(index)
		setCurrent(index)
	}, [isOpenQr, data, swiperRef])

	return {
		onTab,
		current,
		isOpenQr,
		swiperRef
	}
}
