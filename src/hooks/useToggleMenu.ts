import { useEffect, useState} from 'react';

export const useToggleMenu = (isMobile: boolean) => {
	const [isOpen, setIsOpen] = useState(false)
	useEffect(()=> {
		if (isOpen && isMobile) {
			document.body.style.overflow = 'hidden'
		} else  {
			document.body.style.overflow = ''
		}
	}, [isOpen, isMobile])
	return {
		isOpen,
		setIsOpen,
	}
}
