import {useAxios} from './useAxios';
import {Cookies} from 'utils';
import {useCodeStore} from 'store';
import {useCallback} from 'react';

export const useRefCodeGen = ()=> {
	const { addOpenInvite, addInviteCode }: TCode = useCodeStore()
	const { postData, isLoad } = useAxios()

	const genHandler = useCallback(()=> {
		postData('/user/referral/code', {}, {
			headers: {
				Authorization: `Bearer ${Cookies.get('_yak_token')}`,
				"Accept": "application/json",
			}
		})
			.then((res: any)=> {
				addInviteCode(res.data.data)
				addOpenInvite(true)
			})
	}, [])

	return {
		isLoad,
		genHandler,
	}
}
