import st from './Partners.module.scss'
import p1 from 'assets/images/partners/p-1.png'
import p2 from 'assets/images/partners/p-2.png'
import p3 from 'assets/images/partners/p-3.png'

export const Partners = () => {
	return (
		<div className={st.block} id="partners">
			<div className="container">
				<h2 className={st.title}>Партнеры</h2>
				<ul className={st.list}>
					<li>
						<a href="https://redbt.company/" target="_blank" rel="noopener noreferrer">
							<img src={p1} alt="" width={272} height={160}/>
						</a>
					</li>
					<li>
						<img src={p2} alt="" width={272} height={160}/>
					</li>
					<li>
						<img src={p3} alt="" width={272} height={160}/>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Partners
