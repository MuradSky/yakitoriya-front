import {useEffect} from 'react'
import {usePrizesStore} from 'store'

export const useSwiperBlocker = (swiper: any)=> {
	const { isOpenQr }: TPrizes = usePrizesStore()
	useEffect(()=> {
		if (isOpenQr && swiper) {
			swiper.disable()
		} else if (!isOpenQr && swiper) {
			swiper.enable()
		}
	}, [isOpenQr])
}
