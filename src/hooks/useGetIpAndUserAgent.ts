import {useEffect, useState} from 'react';

export const useGetIpAndUserAgent = ()=> {
	const [userID, setUserID] = useState<any>(null)
	useEffect(()=> {
		const fetcher = async ()=> {
			const res = await fetch('https://api.ipify.org?format=json')
			return await res.json()
		}
		fetcher().then((data) => setUserID({ ...data, user_agent: navigator.userAgent }))
		// eslint-disable-next-line
	}, [setUserID])

	return {
		userID
	}
}
