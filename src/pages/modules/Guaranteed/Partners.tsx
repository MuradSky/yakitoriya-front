import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'
import Prev from 'assets/images/svg/slide-prev.svg?react'
import Next from 'assets/images/svg/slide-next.svg?react'
import st from './Guaranteed.module.scss'
import data from './partners.json'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import {imageLoader} from 'assets';

const params = {
	loop: true,
	modules: [Grid, Pagination],
	grid: {
		rows: 2,
	},
	pagination: {
		dynamicBullets: true,
		clickable: true,
	},
	breakpoints: {
		500: {
			slidesPerView: 3,
			centeredSlides: true,
			spaceBetween: 15,
			grid: {
				rows: 1,
			}
		},
		769: {
			slidesPerView: 4,
			centeredSlides: true,
			spaceBetween: 15,
			grid: {
				rows: 1
			}
		},
		1024: {
			slidesPerView: 4.5,
			spaceBetween: 22,
			centeredSlides: true,
			pagination: false,
			grid: {
				rows: 1
			}
		},
		1440: {
			slidesPerView: 5.5,
			spaceBetween: 22,
			pagination: false,
			centeredSlides: true,
			grid: {
				rows: 1
			}
		},
		1800: {
			slidesPerView: 6.5,
			spaceBetween: 22,
			pagination: false,
			centeredSlides: true,
			grid: {
				rows: 1
			}
		}
	}
}

const Item = ({ logo, title, link }: any)=> {
	return (
		<div className={st.card1}>
			{!link ?
				<div className={st.card1_head}>
					<picture>
						<img src={imageLoader(logo)} alt="" width={270} height={110} loading="lazy"/>
					</picture>
				</div> :
				<a href={link} className={st.card1_head} target="_blank" rel="noopener noreferrer">
					<picture>
						<img src={imageLoader(logo)} alt="" width={270} height={110} loading="lazy"/>
					</picture>
				</a>
			}

			<div className={st.card1_title} dangerouslySetInnerHTML={{__html: title}} />
		</div>
	)
}

export const Partners = ()=> {
	const [swiper, setSwiper] = useState<any>(null);

	return (
		<>
			<Swiper
				initialSlide={9}
				spaceBetween={5}
				slidesPerView={2}
				onSwiper={setSwiper}
				className={[st.slider, 'slider-cards'].join(' ')}
				{...params}
			>
				{data.map((item: any) => (
					<SwiperSlide key={item.id}>
						<Item {...item} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className={st.nav}>
				<button onClick={()=> swiper.slidePrev()} className={st.next}>
					<Prev />
				</button>
				<button onClick={()=> swiper.slideNext()} className={st.next}>
					<Next />
				</button>
			</div>
		</>
	)
}
