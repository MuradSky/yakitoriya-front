import {Form, Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import {Button, Checkbox, TextField} from 'components/UI';
import {useAuthStore} from 'store';
import {useAxios, useGetIpAndUserAgent, useUser} from 'hooks';
import {Cookies} from 'utils';
import {emailValid} from '../validation';
import Email from 'assets/images/svg/email2.svg?react'
import st from '../ModalAuth.module.scss';
import {recordTimeFixed} from '../../../utils/renderTimer';

export const FirstStage = ({ stageChange }: any )=> {
	const { userID } = useGetIpAndUserAgent()
	const { addEmail, addOpenEmail }: TAuth = useAuthStore()
	const { mutationTrigger, mutationProfile } = useUser()
	const { postData, isLoad } = useAxios()

	const onSubmit = (data: FormikValues, { setFieldError }: FormikHelpers<any>)=> {
		if (!userID) return
		const headers = {
			Authorization: `Bearer ${Cookies.get('_yak_token')}`,
			"Accept": "application/json",
		}

		postData('/user/email/send-confirmation', {...data, ...userID}, { headers })
			.then((res: any)=> {
				if (res?.data?.data?.error) setFieldError('email', res.data.data?.error)
				if (res?.data?.data?.message === 'Success') {
					addEmail({
						isEmailSubscribed: res.data.data.isEmailSubscribed,
						isFirstSend: true,
					})
					res.data.data.isEmailSubscribed ? mutationTrigger() : mutationProfile()
					localStorage.setItem('_email_send', recordTimeFixed(30))
					stageChange(res.data.data.isEmailSubscribed)
				}
			})
	}

	return (
		<>
			<div className={st.title}>
				Получите гарантированный <br/> подарок за подписку на рассылку!
			</div>
			<Formik
				validate={emailValid}
				initialValues={{ email: '', subscriptions: false }}
				onSubmit={onSubmit}
			>
				{({ values }: FormikProps<any>) => (
					<Form>
						<div className={st.icon_sec}>
							<Email />
						</div>
						<TextField
							name="email"
							placeholder="E-mail*"
							disabled={isLoad}
						/>
						<Checkbox
							isDisabled={isLoad}
							name="subscriptions"
							styled={{ marginTop: 30 }}
						>
							Нажимая на кнопку "Подтвердить почту", соглашаюсь на получение рекламной e-mail рассылки.
						</Checkbox>
						<Button
							type="submit"
							className={st.button_email}
							children="Подвердить"
							isLoading={isLoad}
							isDisabled={values.email.length < 3 || !values.subscriptions}
						/>
					</Form>
				)}
			</Formik>

			<Button className={st.button_mt14} variant="empty" onClick={()=> addOpenEmail(false)}>
				Заполнить позже
			</Button>
		</>
	)
}
