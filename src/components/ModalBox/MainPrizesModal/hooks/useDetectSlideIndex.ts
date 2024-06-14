import {useEffect, useState} from 'react';

export const useDetectSlideIndex = (swiper: any)=> {
	const [index, setIndex] = useState(0)
	useEffect(()=> {
		if (swiper) {
			setIndex(swiper.activeIndex)
			const setIdx = ({ activeIndex }: any)=> setIndex(activeIndex)
			swiper.on('slideChange', setIdx)
			return ()=> swiper.off('slideChange', setIdx)
		}
	}, [swiper, setIndex])

	return {
		swiperIndex: index
	}
}
