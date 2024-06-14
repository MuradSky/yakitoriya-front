import {useCallback, useRef, useState} from 'react';
import {usePrizesStore} from 'store';
import {useUser} from 'hooks';
import {useSelectPrizeSlide, useSwiperBlocker, useDetectSlideIndex } from './index';

export const usePrizesModal = ()=> {
	const swiperCollection = useRef<any>([])
	const { prizeSelect, addPrizeOpen, isOpenQr }: TPrizes = usePrizesStore()
	const { prizeData } = useUser()
	const [swiper, setSwiper] = useState<any>(null)
	const { swiperIndex } = useDetectSlideIndex(swiper)
	useSelectPrizeSlide(swiper, prizeData, prizeSelect.id)
	useSwiperBlocker(swiper)

	let destroyedLimit = 0;
	const addSwiperCollection = (innerSlides: any, id: number)=> {
		const isDev = import.meta.env.DEV
		const cloned = ()=> {
			const clone = [...swiperCollection.current]
			if (clone.findLastIndex((item: any)=> item.id === id) !== -1) return
			clone.push({id, innerSlides})
			swiperCollection.current = clone
		}

		if (isDev) {
			if (destroyedLimit < prizeData.length) return destroyedLimit++
			cloned()
			return
		}
		cloned()
	}

	const onClosed = useCallback(()=> {
		if (!isOpenQr) {
			addPrizeOpen({isOpen: false, id: 0})
			swiperCollection.current = []
		}
	}, [isOpenQr])

	const overClose = useCallback((e: any)=> {
		if (e.target.classList.toString().includes('swiper-slide')) {
			onClosed()
		}
	}, [isOpenQr])

	const handlePrev = useCallback(()=> {
		if (isOpenQr) return
		const innerSlides = swiperCollection.current[swiperIndex]?.innerSlides
		if (0 < innerSlides?.activeIndex) return innerSlides.slidePrev()
		if (swiper) swiper.slidePrev()
	}, [swiper, swiperIndex, isOpenQr])

	const handleNext = useCallback(()=> {
		if (isOpenQr) return
		const innerSlides = swiperCollection.current[swiperIndex]?.innerSlides
		if (innerSlides?.slides.length-1 > innerSlides?.activeIndex) return innerSlides.slideNext()
		if (swiper) swiper.slideNext()
	}, [swiper, swiperIndex, isOpenQr])

	return {
		swiper,
		setSwiper,
		prizeData,
		onClosed,
		overClose,
		isOpen: prizeSelect.isOpen,
		handlePrev,
		handleNext,
		swiperIndex,
		addSwiperCollection,
	}
}
