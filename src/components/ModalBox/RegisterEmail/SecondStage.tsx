import {useEffect, useState} from 'react';
import {Form, Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import {Button, TextField} from '../../UI';
import {useAuthStore} from 'store';
import {useAxios, useCountDown, useGetIpAndUserAgent, useUser} from 'hooks';
import {Cookies, reformCn, renderTimer, timerFormatter} from 'utils';
import {emailValid} from '../validation';
import Email from 'assets/images/svg/email2.svg?react'
import st from '../ModalAuth.module.scss';
import {recordTimeFixed} from 'utils/renderTimer';

const emailSend = localStorage.getItem('_email_send')

export const SecondStage = () => {
	const { userID } = useGetIpAndUserAgent()
	const timer = renderTimer(emailSend)
	const { email, addEmail }: TAuth = useAuthStore()
	const [isDisabled, setIsDisabled] = useState(email.isFirstSend)
	const {seconds, minutes, setTimer} = useCountDown(timer.min, timer.sec)
	const { postData, isLoad } = useAxios()
	const { mutationTrigger, user } = useUser()

	useEffect(()=> {
		if (minutes === 0 && seconds === 0) {
			return setIsDisabled(false)
		}
		if (minutes !== 0 && seconds !== 0) return setIsDisabled(true)
	}, [seconds, minutes])


	const onSubmit = (data: FormikValues, { setFieldError }: FormikHelpers<any>)=> {
		if (!userID) return
		const headers = {
			Authorization: `Bearer ${Cookies.get('_yak_token')}`,
			"Accept": "application/json",
		}

		const formData = {
			email: data.email,
			subscriptions: user?.email_subscription,
			...userID
		}

		postData('/user/email/send-confirmation', formData, { headers })
			.then((res: any)=> {
				if (res.data.data?.error) setFieldError('email', res.data.data?.error)
				if (res.data.data.message === 'Success') {
					setIsDisabled(true)
					setTimer(30, 0)
					mutationTrigger().then(()=> (
						addEmail({
							isEmailSubscribed: res.data.data.isEmailSubscribed,
							isFirstSend: false,
						})
					))
					localStorage.setItem('_email_send', recordTimeFixed(30))
				}
			})
	}

	return (
		<>
			<div className={st.title}>Спасибо!</div>
			<Formik initialValues={{ email: '' }} onSubmit={onSubmit} validate={emailValid}>
				{({ values }: FormikProps<any>)=> (
					<Form>
						<div className={st.icon_sec}>
							<Email />
						</div>

						<div className={reformCn(st.text, st.text_mb30)}>
							Мы отправили подтверждение на
							<div style={{ color: '#ED1B34', padding: '3px 0' }}>{user?.email}</div>
							Перейдите по ссылке в письме.
						</div>

						<div className={reformCn(st.text, st.text_mb10)}>
							Если Вы указали не верный адрес электронной почты, можете заменить его
						</div>

						<TextField name="email" placeholder="E-mail*" disabled={isDisabled}/>

						{isDisabled ?
                            <div className={st.resend_text}>
                                Повторная отправка  через {timerFormatter(minutes, seconds)} секунд
                            </div> :
							<>
								<div className={st.text} style={{ margin: '15px 0 30px'}}>Отправить письмо повторно?</div>
								<Button
									type="submit"
									className={st.button_email}
									children="Отправить"
									isLoading={isLoad}
									isDisabled={values.email.length < 3}
								/>
							</>
						}
					</Form>
				)}
			</Formik>
		</>
	)
}
