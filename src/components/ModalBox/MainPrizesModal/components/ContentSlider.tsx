import {Swiper, SwiperSlide} from 'swiper/react'
import {PrizeContent} from './PrizeContent'
import {reformCn} from 'utils'
import st from '../ContentSecond.module.scss'
import 'swiper/css'

interface ContentSliderProps {
	data: ApiPrize[] | []
	swiperRef: any
}

const swiperParams = {
	slidesPerView: 1,
	className: reformCn(st.content_slider, 'content-slider-swiper'),
	grabCursor: true,
	autoHeight: true,
}

export const ContentSlider = ({ data, swiperRef }: ContentSliderProps) => {
	if (data.length === 0) return <PrizeContent />

	return (
		<Swiper ref={swiperRef}{...swiperParams}>
			{data.map((item: ApiPrize) => (
				<SwiperSlide key={item.id}>
					<PrizeContent data={item} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
