import IconLink from 'assets/images/svg/icon-link2.svg?react'
import LogoForPx from 'assets/images/4px.svg?react'
import VkIcon from 'assets/images/svg/icon-vk.svg?react'
import TgIcon from 'assets/images/svg/icon-tg.svg?react'
import st from './Footer.module.scss'
import pravila from 'assets/Pravila_Akcii_Origami_Udachi.pdf'

export const Footer = () => {
	return (
		<footer className={st.footer}>
			<div className="container">
				<div className={st.top}>
					<div className={st.links}>
						<a href={pravila} target="_blank" rel="noopener noreferrer">
							<span>Правила Акции</span>
							<IconLink />
						</a>
						<a href="https://yakitoriya.ru/USER_agreement_site" target="_blank" rel="noopener noreferrer">
							<span>Правила пользования сайтом</span>
							<IconLink />
						</a>
						<a href="https://yakitoriya.ru/PNDSEND_agreement" target="_blank" rel="noopener noreferrer">
							<span>Правила обработки ПД</span>
							<IconLink />
						</a>
					</div>
					<div className={st.phone}>
						<p>
							Телефон горячей линии:<br/>
							с 10:00 до 18:00 по Москве
						</p>
						<a href="tel:88006000171">8 800 600 01 71</a>
					</div>
					<div className={st.support}>
						<div className={st.support_title}>Служба поддержки</div>
						<a href="mailto:promo@yakitoriya.ru" className={st.support_btn}>Написать в поддержку</a>
					</div>
				</div>
				<div className={st.content}>
					<p>© {new Date().getFullYear()} Якитория</p>
					<p>
						Организатор Акции ООО «Мирвест». Территория проведения Акции - рестораны под товарным знаком «Якитория»,
						расположенные на территории Российской Федерации в городе Москве, Московской области и городе Воронеже.
						Период совершения заказов, регистрации кодов с чеков с 23.11.2023 г. по 26.12.2023 г. включительно.
						Общий срок проведения Акции с 23.11.2023 г. по 31.01.2024 г., включая выдачу призов. Количество призов
						ограничено. Изображение призов на рекламных материалах может отличаться от фактически разыгрываемых призов.
						С информацией об Организаторе Акции, правилах и сроках проведения, количестве призов и выигрышей по результатам
						Акции, месте и порядке их получения можно ознакомиться на сайте <a href="https://promo.yakitorya.ru" target="_blank" rel="noreferrer noopener">https://promo.yakitorya.ru</a>
					</p>
				</div>

				<div className={st.bottom}>
					<a href="/" target="_blank" rel="noopener noreferrer">
						<LogoForPx />
					</a>
					<div className={st.social}>
						<a href="https://t.me/yakitoriya_tg" target="_blank" rel="nofollow noreferrer" title="Телеграм">
							<div><TgIcon /></div>
							<span>Telegram</span>
						</a>
						<a href="https://vk.com/yakitoriyaru" target="_blank" rel="nofollow noreferrer" title="Вконтакте">
							<div><VkIcon /></div>
							<span>ВКонтакте</span>
						</a>
						<a href="mailto:promo@yakitoriya.ru">E-mail: promo@yakitoriya.ru</a>
					</div>
					<div className={st.bottom_age}>18+</div>
				</div>
			</div>
		</footer>
	)
}
