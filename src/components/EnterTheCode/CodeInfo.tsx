import {createPortal} from 'react-dom'
// import Arrow from 'assets/images/svg/code-arrow.svg?react'
import Clear from 'assets/images/svg/clear-2.svg?react'
import st from './CodeInfo.module.scss'

export const CodeInfo = ({ onClose, container }: any)=> {
	return createPortal(
		<div className={st.modal}>
			<div className={st.modal_wrap}>
				<button className={st.modal_clear} onClick={onClose}>
					<Clear />
				</button>
				<h3 className={st.modal_title}>Поздравляем!</h3>

				<p className={st.modal_text}>
					Теперь вы можете участвовать в акции «Оригами удачи»!
					До 26.12.23 активируйте код:
					XXXXXXXX
					в личном кабинете на promo.yakitoriya.ru и получите первого журавля с подарками от «Якитории» и партнеров.
					Больше журавлей – больше подарков и шансов выиграть призы от Red, LaModa, SimpleGroup и 1 миллион рублей от «Якитории»!
					Все подробности акции «Оригами удачи» на promo.yakitoriya.ru
				</p>

				{/*<div className={st.modal_box}>*/}
				{/*	<div className={st.modal_arrow}>*/}
				{/*		<Arrow />*/}
				{/*	</div>*/}
				{/*	<div className={st.modal_btn}>Код для активации чека</div>*/}
				{/*	<div className={st.modal_box_title}>*/}
				{/*		Получайте призы, собирая коллекции*/}
				{/*	</div>*/}
				{/*	<div className={st.modal_box_text}>*/}
				{/*		Активируйте код: <b>32296131</b> в личном кабинете на linkwebsite.ru и*/}
				{/*		участвуйте в розыгрыше подарков от Якитории и партнеров.*/}
				{/*	</div>*/}

				{/*	<div className={st.modal_box_text}>*/}
				{/*		Чем больше в вашей коллекции картин, тем больше шансов на призы.*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
		</div>
		, container)
}
