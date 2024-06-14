import { ButtonStatic } from 'components/UI';
import {useOpenAuthModal} from 'hooks';
import Cursor from 'assets/images/svg/cursor-link.svg?react'
import rhombus from 'assets/images/first-screen/rhombus.png'
import rhombusM from 'assets/images/first-screen/rhombus-m.png'
import rhombusS from 'assets/images/first-screen/rhombus-s.png'
import jiguli from  'assets/images/first-screen/prizes.png'
import jiguliM from  'assets/images/first-screen/prizes-m.png'
import jiguliS from  'assets/images/first-screen/prizes-s.png'
import cranes from 'assets/images/first-screen/cranes.png'
import cranesD from 'assets/images/first-screen/cranes-d.png'
import cranesM from 'assets/images/first-screen/crane-m.png'
import craneSS from 'assets/images/first-screen/crane-s.png'
import girl from 'assets/images/first-screen/girl.png'
import girlM from 'assets/images/first-screen/girl-m.png'
import st from './FirstScreen.module.scss'

export const  FirstScreen = () => {
	const { onOpenAuth } = useOpenAuthModal()
	return (
		<div className={st.block} >
			<h1 className={st.title}>
				Оригами<br/>удачи
			</h1>
			<div className={st.girl}>
				<picture>
					<source srcSet={girlM} width={264} height={346} media="(max-width: 500px)" />
					<img src={girl} alt="" width={380} height={521} loading="lazy" />
				</picture>
			</div>

			<div className={st.rhombus}>
				<div className={st.rhombus_wrap}>
					<picture>
						<source srcSet={rhombusS} width={325} height={325} media="(max-width: 500px)" />
						<source srcSet={rhombusM} width={520} height={520} media="(max-width: 1024px)" />
						<img src={rhombus} alt="" width={678} height={559}/>
					</picture>

					<div className={st.rhombus_text}>

						Дарим 7 гарантированных <br/>
						призов за регистрацию чеков <br/>
						от 1 500₽ и возможность <br/>
						выиграть 1 000 000₽ и другие <br/>
						ценные призы!
					</div>

					<div className={st.rhombus_btn} onClick={onOpenAuth}>
						<ButtonStatic text="Участвовать" icon={<Cursor/>}/>
					</div>
				</div>
			</div>

			<div className={st.jiguli}>
				<picture>
					<source srcSet={jiguliS} width={230} height={293} media="(max-width: 500px)" />
					<source srcSet={jiguliM} width={400} height={400} media="(max-width: 1024px)" />
					<img src={jiguli} alt="" width={488} height={498} />
				</picture>
			</div>

			<div className={st.cranes}>
				<picture>
					<source srcSet={craneSS} width={500} height={890} media="(max-width: 500px)" />
					<source srcSet={cranesM} width={1024} height={834} media="(max-width: 1024px)" />
					<source srcSet={cranesD} width={1920} height={932} media="(max-width: 1700px)" />
					<img src={cranes} alt="" width={1920} height={932} />
				</picture>
			</div>
		</div>
	)
}

export default FirstScreen
