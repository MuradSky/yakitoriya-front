import ReactModal from 'react-modal'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Content} from './Content'
import {usePrizesModal} from './hooks'
import {reformCn} from 'utils'
import {customStyles} from '../customStyles'
import PrevBtn from 'assets/images/svg/prev-btn.svg?react'
import NextBtn from 'assets/images/svg/next-btn.svg?react'
import st from './MainPrizesModal.module.scss'
import 'swiper/css'
import {useScreenSize} from 'hooks';

const swiperParam = {
	spaceBetween: 20,
	slidesPerView: 1,
	className: reformCn(st.slider, 'modal-prize-swiper')
}

const styles = {
	content: {
		...customStyles.content,
		width: '100%'
	}
}

export const MainPrizesModal = () => {
	const { isMobile } = useScreenSize()
	const {
		isOpen,
		onClosed,
		overClose,
		setSwiper,
		prizeData,
		handleNext,
		handlePrev,
		addSwiperCollection
	} = usePrizesModal()

	return (
		<ReactModal isOpen={isOpen} style={styles} onRequestClose={onClosed}>
			<div className={st.slider_box}>
				<Swiper onSwiper={setSwiper} onSlideChange={console.log} {...swiperParam}>
					{prizeData?.map((data: any, index: number)=> (
						<SwiperSlide key={data.id} onClick={overClose}>
							<Content
								data={data}
								onClosed={onClosed}
								index={index % 5}
								swiperPusher={addSwiperCollection}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				{!isMobile &&
					<>
                        <button className={st.prev} onClick={handlePrev}>
                            <PrevBtn />
                        </button>
                        <button className={st.next} onClick={handleNext}>
                            <NextBtn />
                        </button>
					</>
				}
			</div>
		</ReactModal>
	)
}

export default MainPrizesModal
