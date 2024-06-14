import {useEffect, useState} from 'react';

export const useHeaderFixed = ()=> {
	const [isFix, setFix] = useState(false)
	useEffect(()=> {
		const onFix = ()=> {
			if (window.pageYOffset > 0) {
				setFix(true)
			} else {
				setFix(false)
			}
		}
		onFix()
		window.addEventListener('scroll', onFix)
		return ()=> {
			window.removeEventListener('scroll', onFix)
		}
	}, [setFix])

	return {
		isFix
	}
}
