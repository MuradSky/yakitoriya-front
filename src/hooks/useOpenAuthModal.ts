import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuthStore} from 'store';
import {Cookies} from '../utils';

export const useOpenAuthModal = ()=> {
	const navigate = useNavigate()
	const { isLogin, addOpenAuth } = useAuthStore()
	const onOpenAuth = useCallback(()=> {
		if (isLogin && Cookies.get('_yak_token')) {
			window.scroll({ top: 0 })
			return navigate('/profile')
		}
		addOpenAuth(true)
	},[])
	return { isLogin, onOpenAuth }
}
