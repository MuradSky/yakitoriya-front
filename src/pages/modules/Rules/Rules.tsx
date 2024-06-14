import {ButtonStatic} from 'components/UI';
import st from './Rules.module.scss'
import crown1 from 'assets/images/crown/crown-1.png'
import crown2 from 'assets/images/crown/crown-2.png'
import {useOpenAuthModal} from 'hooks';
import {reformCn} from 'utils';

const rules = [
	{ id: 1, title: 'Зарегистрируйтесь', text: 'на сайте акции и получите <br/>гарантированный подарок <br/> за подтверждение почты' },
	{ id: 2, title: 'Делайте заказы <br/>в Якитории', text: 'на сумму от 1500 рублей <br/>в ресторанах или с доставкой' },
	{ id: 3, title: 'Регистрируйте коды <br/>с чеков', text: 'в личном кабинете <br/>и получайте журавликов' },
	{ id: 4, title: 'Коллекционируйте <br/>журавликов', text: 'и участвуйте в розыгрышах <br/>ценных призов каждую неделю' },
	{ id: 5, title: 'Соберите всех <br/>журавликов', text: 'и получите шанс выиграть <br/>главный приз – 1 000 000 рублей!' },
]

export const Rules = () => {
	const { isLogin, onOpenAuth } = useOpenAuthModal()
	return (
		<div className={st.block} id="rules">
			<div className={reformCn(st.container, 'container')}>
				<div className={st.crown1}>
					<picture>
						<img src={crown1} alt="" width={355} height={335} />
					</picture>
				</div>
				<div className={st.crown2}>
					<picture>
						<img src={crown2} alt="" width={428} height={382} />
					</picture>
				</div>
				<h2 className={st.title}>Правила акции</h2>
				<ul className={st.wrap}>
					{rules.map((rule: any) => (
						<li key={rule.id} className={st.item}>
							<div className={st.item_numb}><span>{rule.id}</span></div>
							<div className={st.item_title} dangerouslySetInnerHTML={{__html: rule.title}} />
							<div className={st.item_text} dangerouslySetInnerHTML={{__html: rule.text}} />
						</li>
					))}
				</ul>
				<div className={st.btn}>
					<ButtonStatic text={ isLogin ? 'Участвовать' : 'Зарегистрироваться' } onClick={onOpenAuth} />
				</div>
				<p className={st.text}><sup>*</sup>Гарантированный подарок выдается после подтверждения электронной почты участником акции</p>
			</div>
		</div>
	)
}

export default Rules
