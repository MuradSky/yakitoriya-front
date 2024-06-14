import {useNavigate} from 'react-router-dom'
import useSWRImmutable from 'swr/immutable'
import axios from 'axios'
import {useAuthStore} from 'store';
import { Cookies } from 'utils'

const COOKIE_VALUE_TOKEN = '_yak_token'

const defaultSwrParams = {
	revalidateIfStale: false,
	revalidateOnFocus: false,
	revalidateOnReconnect: false,
}

const fetcher = async (url: string)=> {
	const accessToken = Cookies.get(COOKIE_VALUE_TOKEN)
	if (!accessToken) throw Error('Missing token')
	return await axios.get(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Accept": "application/json",
		}
	})
}

const getByIdPrizes = (data: any)=> {
	if (!data) return []
	const forCranes = data?.filter((item: any) => item.action !== 'Подтверждение почты')
							.filter((item: any) => item.action !== 'Совершение покупки рефералом' )
							.slice(0, 5).map((item: any)=> item.id)
	return forCranes
}

const emailConfirmFetcher = async ()=> {
 	return await axios.post('/user/email/confirm', {}, {
		headers: {
			Authorization: `Bearer ${Cookies.get(COOKIE_VALUE_TOKEN)}`,
			"Accept": "application/json",
		}
	})
}

const isAddRefCode = (data: any)=> {
	if (!data) return false
	return 	[...data]
		.reverse()
		.findIndex((item: any)=> item.action === 'Совершение покупки рефералом') !== -1
}

export const useUser = ()=> {
	const token = Cookies.get(COOKIE_VALUE_TOKEN)
	const { addIsLogin, emailToken, addEmailToken, addEmail }: TAuth = useAuthStore()
	const navigate = useNavigate()
	const { data: prizeData, mutate: prizeMutate, isLoading: prizeIsLoading, isValidating } = useSWRImmutable('/user/prizes', fetcher, defaultSwrParams)

	const { data, isLoading, error, mutate } = useSWRImmutable('/user/profile', fetcher, {
		...defaultSwrParams,
		onSuccess(data) {

			if (!data.data.data.email) {
				addEmail({
					isEmailSubscribed: false,
					isFirstSend: false
				})
			}
			if (emailToken) {
				emailConfirmFetcher().then(()=> {
					mutationTrigger()
					addEmailToken(null)
				})
			}
			addIsLogin(true)
		},
		onError(err) {
			if (err?.response?.status === 401) {
				Cookies.delete(COOKIE_VALUE_TOKEN)
				navigate('/')
			}
		}
	})

	const mutationProfile = async ()=> await mutate()
	const mutatePrizes = async ()=> await prizeMutate()

	const mutationTrigger = async (token?: string) => {
		if (typeof token === 'string') Cookies.set(COOKIE_VALUE_TOKEN, token)
		return await mutate().then(()=> {
			setTimeout(async ()=> {
				prizeMutate().then(()=> {
					setTimeout(async ()=> await prizeMutate(), 5000)
				})
			}, 1000)
		})
	}

	const config = {
		user: data?.data?.data,
		isLoading: isLoading || !data?.data?.data,
		isLogged: !token ? false : true,
		mutationTrigger,
		prizeData: prizeData?.data?.data,
		prizesNumbers: getByIdPrizes(prizeData?.data?.data),
		prizeIsLoading: prizeIsLoading || isValidating,
		isAddRef: isAddRefCode(prizeData?.data?.data),
		mutationProfile,
		mutatePrizes
	}

	if (!!error) {
		return {
			...config,
			user: null
		}
	}

	return config
}
