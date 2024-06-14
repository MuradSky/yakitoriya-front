import {MouseEvent, useCallback, useRef} from 'react';
import {Link} from 'react-router-dom';
import {NavMenu} from './NavMenu';
import {useAuthStore} from 'store';
import {useAnchorScroll, useHeaderFixed, useScreenSize, useToggleMenu, useUser} from 'hooks';
import st from './Header.module.scss'
import logo from 'assets/images/svg/logo.svg'
import logo2 from 'assets/images/svg/logo2.svg'
import Auth from 'assets/images/svg/auth.svg?react'
import Auth1 from 'assets/images/svg/auth1.svg?react'
import PointsBtn from 'assets/images/svg/btn-points.svg?react'
import ClearBtn from 'assets/images/svg/clear.svg?react'
import {reformCn} from 'utils';
import {createPortal} from 'react-dom';

export const Header = () => {
	const headerRef = useRef<any>(null)
	const { addOpenAuth }: TAuth = useAuthStore()
	const { isLogged } = useUser()
	const { isTablet, isMobile } = useScreenSize()
	const { isOpen, setIsOpen }  = useToggleMenu(isMobile)
	const { onClickAnchor, reset } = useAnchorScroll()
	const { isFix } = useHeaderFixed()

	const onOpenAuth = useCallback(()=> addOpenAuth(true), [])

	const onClick = useCallback((e: MouseEvent<HTMLAnchorElement>)=> {
		onClickAnchor(e)
		setIsOpen(false)
	}, [])

	const openMenu = useCallback(()=> setIsOpen(!isOpen), [isOpen])

	const closeMenu = useCallback(()=> {
		reset()
		if (isTablet) setIsOpen(false)
	}, [isTablet, setIsOpen])

	const cn = reformCn(st.header, (isFix || isOpen) ? st.header_fix : '')

 	return (
		<header className={cn} ref={headerRef}>
			{isTablet && createPortal(<NavMenu onClickAnchor={onClick} isOpen={isOpen} />, headerRef.current)}
			<div className="container">
				<div className={st.wrap} >
					<Link to="/" className={st.logo} onClick={closeMenu}>
						<picture>
							<source srcSet={logo2} media="(max-width: 500px)" width={40} height={40} type="image/svg+xml"/>
							<img src={logo} alt="" width={227} height={40} />
						</picture>
					</Link>
					{!isTablet && <NavMenu onClickAnchor={onClick} />}

					{!isLogged ? (
						<button className={st.auth_btn} onClick={onOpenAuth}>
							<span>Вход / Регистрация</span>
							<Auth />
						</button>
					) : (
						<Link to="/profile" className={st.auth_btn} onClick={closeMenu}>
							<span>Личный кабинет</span>
							<Auth1 />
						</Link>
					)}

					<button className={st.btn_menu} onClick={openMenu}>
						{ isOpen ? <ClearBtn/> : <PointsBtn /> }
					</button>
				</div>
			</div>
		</header>
	)
}
