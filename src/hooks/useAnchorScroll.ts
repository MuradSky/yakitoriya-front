import {useCallback, useRef, MouseEvent, useLayoutEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const elementPosition = (obj: any) => {
	let currentTop = 0;
	if (obj.offsetParent){
		do {
			currentTop += obj.offsetTop
		} while ((obj = obj.offsetParent));
	}
	return currentTop;
}

export const useAnchorScroll = ()=> {
	const navigation = useNavigate()
	const currentAnchor = useRef<any>(null)
	useLayoutEffect(()=> {
		const { pathname, hash } = window.location
		if (pathname === '/' && hash) {
			navigation('/')
			onClick(hash)
		}
	})

	const onClickAnchor = useCallback((e: MouseEvent<HTMLAnchorElement>)=> {
		e.preventDefault()

		//@ts-ignore
		const hash = e.target.hash
		const { pathname } = window.location
		if (pathname !== '/') {
			navigation('/')
			setTimeout(()=> onClick(hash), 500)
			return
		}
		if (hash) onClick(hash)
	}, [])

	const onClick = (hash: string)=> {
		if (currentAnchor.current === hash) return
		const element = document.querySelector(`${hash}`)
		if (element) {
			setTimeout(()=> {
				window.scrollTo({
					top: elementPosition(element) - 100,
					behavior: "smooth"
				})
			}, 300)
			currentAnchor.current = hash
		}
	}

	const reset = ()=> currentAnchor.current = null

	return {
		onClickAnchor,
		reset
	}
}
