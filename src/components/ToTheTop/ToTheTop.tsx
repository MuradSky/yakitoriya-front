import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {useScreenSize} from 'hooks';
import ArrowTop from 'assets/images/svg/icon-arrow-top.svg?react'
import st from './ToTheTop.module.scss'

export const ToTheTop = ({ isFixed, block }: { isFixed?: boolean, block?: any }) => {
	const { isMobile } = useScreenSize()
	const [isShow, setIsShow] = useState(false)
	useEffect(()=> {
		const handler = ()=> {
			const scrollY = window.scrollY > 700
			if (scrollY) return setIsShow(true)
			setIsShow(false)
		}

		handler()
		window.addEventListener('scroll', handler)
		return ()=> {
			window.removeEventListener('scroll', handler)
		}
	}, [setIsShow])

	const scrollToTop = ()=> window.scroll({ top: 0, behavior: 'smooth' })

	const cn = [st.wrap, isFixed? st.isFixed : st.isStatic,  isShow ? st.isShow : '' ].join(' ').trim()

	if (isMobile) return null

	return createPortal(
		<div className={cn}>
			<button onClick={scrollToTop}>
				<span>Наверх</span>
				<ArrowTop />
			</button>
		</div>,
		block || document.body
	)
}
