import st from './MainPrize.module.scss'
import Cursor from 'assets/images/svg/cursor-link.svg?react';
import {ButtonStatic} from 'components/UI';
import jiguli from 'assets/images/main-prize/billion.png'
import jiguliM from 'assets/images/main-prize/billion-m.png'
import jiguliS from 'assets/images/main-prize/billion-s.png'
import flower from 'assets/images/main-prize/flower.png'
import crown from 'assets/images/main-prize/crown.png'
import crownS from 'assets/images/main-prize/crown-s.png'
import {useOpenAuthModal} from 'hooks';

export const MainPrize = () => {
	const { onOpenAuth } = useOpenAuthModal()

	return (
		<div className={st.block} >
			<div className={[st.container, 'container'].join(' ')}>
				<div className={st.wrap}>
					<div className={st.jiguli}>
						<picture>
							<source srcSet={jiguliS} width={314} height={580} media="(max-width: 768px)" />
							<source srcSet={jiguliM} width={543} height={776} media="(max-width: 1024px)" />
							<img src={jiguli} alt="" width={1024} height={946}/>
						</picture>
					</div>
					<div className={st.right}>
						<div className={st.rhomb}>
							<div className={st.rhomb_flower}>
								<picture>
									<img src={flower} alt="" width={236} height={236}/>
								</picture>
							</div>
							<div className={st.rhomb_rect}>
								<div className={st.rhomb_title}>Главный приз</div>
								<div className={st.rhomb_text}>
									Соберите всех журавликов <br/>
									и получите шанс выиграть <br/>
									1 000 000 рублей!
								</div>
								<ButtonStatic
									className={st.rhomb_btn}
									text="Участвовать"
									icon={<Cursor/>}
									onClick={onOpenAuth}
								/>
							</div>
						</div>
						<div className={st.crown}>
							<picture>
								<source srcSet={crownS} width={114} height={251} media="(max-width: 768px)" />
								<img src={crown} alt="" width={378} height={483}/>
							</picture>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPrize
