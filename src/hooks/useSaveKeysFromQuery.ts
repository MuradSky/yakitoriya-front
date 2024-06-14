import {useAuthStore, useCodeStore} from '../store';
import {useEffect} from 'react';

export const useSaveKeysFromQuery = ()=> {
	const { addReferralCode }: TCode = useCodeStore()
	const { addEmailToken }: TAuth = useAuthStore()

	useEffect(()=> {

		const { search: query, pathname, origin } = window.location
		const search = new URLSearchParams(decodeURIComponent(query))
		const urlCode = search.get('code')
		const urlEmailToken  = search.get('direct-crm-ticket')
		if (urlEmailToken) {
			window.history.pushState({}, document.title, origin+pathname)
			addEmailToken(urlEmailToken)
		}

		if (urlCode) {
			window.history.pushState({}, document.title, origin+pathname)
			addReferralCode(urlCode)
		}
	})
}
