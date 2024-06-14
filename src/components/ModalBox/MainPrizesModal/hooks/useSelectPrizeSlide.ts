import {useEffect, useState} from 'react';
const findByIndex = (data: any, type: string | number | number ) => {
	if (!type) return 0
	switch (type) {
		case 'email':
			return data?.findIndex((item: any) => item.action === 'Подтверждение почты')
		case 'friend':
			return data?.findIndex((item: any) => item.action === 'Совершение покупки рефералом')
		default:
			return data?.findIndex((item: any) => item.id === type)
	}
}

export const useSelectPrizeSlide = (swiper: any, prizeData: any, prizeSelect: any)=> {
	const [initIndex, setInitIndex] = useState(0)

	useEffect(()=> {
		if (swiper && !swiper?.destroyed) {
			if (prizeSelect === 'email') {
				const index = findByIndex(prizeData, 'email')
				swiper?.slideTo(index)
				return
			}

			if (prizeSelect === 'friend') {
				const index = findByIndex(prizeData,'friend')
				swiper?.slideTo(index)
				return
			}
			const index = findByIndex(prizeData, prizeSelect)
			swiper?.slideTo(index)
		}
	}, [prizeSelect, swiper])


}
