import {useState} from 'react';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

export const useAxios = ()=> {
	const [isLoad, setIsLoad] = useState(false)
	const [errors, setErrors] = useState<any>(null)
	const [extraErrorMessage, setMessage] = useState('')
	const postData = async (path: string, data: any, config?: AxiosRequestConfig)=> {
		setIsLoad(true)
		setMessage('')

		try {
			const res: Awaited<any> = await axios.post(path, {...data}, {...config})
			if (res?.data?.data?.error) {
				setMessage(res?.data?.data?.error)
			}

			return res
		} catch (err: any) {
			const extraMessage = err.response.data.message
			if (extraMessage) setMessage(extraMessage)
			setErrors(errors)
			return err
		} finally {
			setIsLoad(false)
		}
	}

	const getData = (path: string, callBack: (res: AxiosResponse)=> void)=> {

	}

	return {
		postData,
		isLoad,
		extraErrorMessage,
		errors,
	}
}
