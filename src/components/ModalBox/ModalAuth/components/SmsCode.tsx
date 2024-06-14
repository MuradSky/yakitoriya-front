import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import {Button, InputNumber} from 'components/UI';
import {useAuthStore} from 'store';
import {useAxios, useCountDown, useGetIpAndUserAgent, useUser} from 'hooks';
import {Cookies, timerFormatter, reformCn} from 'utils';
import {smsCode} from '../../validation';
import st from '../../ModalAuth.module.scss';

const ResendSms = ()=> {
	const { registerData }: TAuth = useAuthStore()
	const [isDisabled, setIsDisabled] = useState(true)
	const {seconds, minutes, resetTimer} = useCountDown(4, 59)
	const { isLoad, postData } = useAxios()

	useEffect(()=> {
		if (!seconds) setIsDisabled(false)
	}, [setIsDisabled, seconds])

	const resend = ()=> {
		setIsDisabled(true)
		postData('/user/register', registerData)
			.then((res: any)=> {
				if (res.status >= 200 && res.status < 300) {

				}
			})
			.finally(()=> resetTimer())
	}

	return (
		<>
			<div className={st.resend_text}>
				Повторная отправка  через {timerFormatter(minutes, seconds)} секунд
			</div>
			<button
				className={st.resend}
				disabled={isDisabled || isLoad}
				onClick={resend}
				type="button"
			>
				{isLoad &&
                    <div className={st.loader_sm}>
                        <div className={st.lds}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
				}
				<span style={{ opacity: isLoad ? 0 : 1 }}>Отправить код повторно</span>
			</button>
		</>

	)
}

export const SmsCode = () => {
	const { userID } = useGetIpAndUserAgent()
	const navigate = useNavigate()
	const { mutationTrigger } = useUser()
	const { phone, addOpenAuth, addIsRegister }: TAuth = useAuthStore()
	const { isLoad, postData } = useAxios()

	const onSubmit = (data: FormikValues, { setFieldError }: FormikHelpers<any>)=> {
		if (!userID) return
		postData('/user/login', {phone, ...data, ...userID})
			.then((res: any)=> {
				if (res.data.data.error) {
					return setFieldError('password', res.data.data.error)
				}
				if (res.status >= 200 && res.status < 300) {
					addIsRegister(true)
					Cookies.set('_yak_token', res.data.data.token)
					mutationTrigger().then(()=> {
						addOpenAuth(false)
						navigate('/profile')
					})
				}
			})
	}

	return (
		<div className={st.body}>
			<div className={reformCn(st.text, st.text_mb30)}>Введите код, полученный в СМС <br/>на указанный вами номер</div>
			<Formik
				validate={smsCode}
				initialValues={{ password: '' }}
				onSubmit={onSubmit}
			>
				{({ values }: FormikProps<any>) => (
					<Form>
						<InputNumber
							name="password"
							format="# # # # # #"
							placeholder="_ _ _ _ _ _"
							disabled={isLoad}
						/>

						<Button
							className={st.button}
							type="submit"
							isDisabled={values.password.length < 5 || isLoad}
							isLoading={isLoad}
							children="Отправить"
						/>
					</Form>
				)}
			</Formik>
			<ResendSms />
		</div>
	)
}
