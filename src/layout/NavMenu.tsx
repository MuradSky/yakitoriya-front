import st from './Header.module.scss';
import {MouseEvent} from 'react';
import {useScreenSize} from 'hooks';
import {reformCn} from 'utils';

interface TNavMenu {
	isOpen?: boolean,
	onClickAnchor: (e: MouseEvent<HTMLAnchorElement>)=> void
}

export const NavMenu = ({ onClickAnchor, isOpen } : TNavMenu) => {
	const { isTablet } = useScreenSize()
	const cn = reformCn(st.nav, (isTablet && isOpen ? st.show : '' ))
	return (
		<nav className={cn}>
			<ul>
				<li>
					<a href="/#rules" onClick={onClickAnchor}>Правила акции</a>
				</li>
				<li>
					<a href="/#prizes" onClick={onClickAnchor}>Призы</a>
				</li>
				<li>
					<a href="/#winners" onClick={onClickAnchor}>Победители</a>
				</li>
				<li>
					<a href="/#partners" onClick={onClickAnchor}>Партнеры</a>
				</li>
			</ul>
		</nav>
	)
}
