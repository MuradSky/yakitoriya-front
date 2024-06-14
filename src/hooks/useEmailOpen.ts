import {useAxios} from './useAxios';
import {Cookies} from '../utils';
import {useUser} from './useUser';
import {useAuthStore} from '../store';
import {useCallback} from 'react';

export const useEmailOpen = ()=> {
	const { isLoad, postData } = useAxios()
	const { user, mutationTrigger } = useUser()
	const { addOpenEmail, addConfirmEmail }: TAuth = useAuthStore()

	const onOpenEmail = useCallback(()=> {
		if (user?.email && user?.need_confirmation) {
			postData('/user/email/check-confirmation', { email: user?.email }, {
				headers: {
					Authorization: `Bearer ${Cookies.get('_yak_token')}`,
					"Accept": "application/json",
				}
			}).then((res: any)=> {
				if (res.data.data?.isEmailSubscribed) {
					addConfirmEmail(true)
					return mutationTrigger()
				}
				addOpenEmail(true)
			})
			return
		}
		user?.need_confirmation && addOpenEmail(true)
	}, [user])

	return {
		isLoad,
		onOpenEmail,
		isDisabledModal: !user?.need_confirmation
	}
}
