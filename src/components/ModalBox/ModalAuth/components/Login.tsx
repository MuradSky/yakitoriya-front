import {Form, Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import {Button, InputNumber, PhoneMask} from 'components/UI';
import {useAuthStore} from 'store';
import {useAxios, useGetIpAndUserAgent, useUser} from 'hooks';
import st from 'components/ModalBox/ModalAuth.module.scss';
import {Cookies, reformCn} from 'utils';
import {useNavigate} from 'react-router-dom';

const initValues = {
	phone: '',
	password: ''
}

const isDisabled = (values: typeof initValues)=> {

	return values.phone.replace(/[^0-9]/g, '').length < 10 || values.password.length < 4
}

export const Login = () => {
	const navigate = useNavigate()
	const { userID } = useGetIpAndUserAgent()
	const { addRestPass, addOpenAuth }: TAuth = useAuthStore()
	const { mutationTrigger } = useUser()
	const { isLoad, postData, extraErrorMessage } = useAxios()

	const sendPhone = (data: FormikValues, { setFieldError }: FormikHelpers<any>)=> {
		if (!userID) return
		const formData = {
			phone: data.phone.replace(/[^0-9]/g, '').slice(1),
			password: data.password,
			...userID
		}
		postData('/user/login', formData)
			.then((res: any)=> {
				if ((res?.status >= 200 && res?.status < 300) && !res?.data?.data?.error) {
					Cookies.set('_yak_token', res.data.data.token)
					addOpenAuth(false)
					return mutationTrigger().then(()=> navigate('/profile'))
				}
				if (res?.message) {
					const errors = res?.response?.data.errors
					Object.keys(errors).forEach((key: string) => setFieldError(key, errors[key]))
				}
			})
	}

	return (
		<div className={st.body}>
			<div className={reformCn(st.text, st.text_mb30)}>Войти в Личный кабинет</div>
			<Formik initialValues={initValues} onSubmit={sendPhone}>
				{({ values }: FormikProps<any>) => (
					<Form>
						<PhoneMask
							name="phone"
							disabled={isLoad}
							placeholder="+7 (___) ___-__-__"
							style={{ marginBottom: 30 }}
						/>

						<InputNumber
							name="password"
							format="# # # # # #"
							placeholder="_ _ _ _ _ _"
							disabled={isLoad}
						/>

						{extraErrorMessage && <p className={st.extra_error} children={extraErrorMessage} />}

						<button
							type="button"
							className={reformCn(st.resend, st.mt_1)}
							onClick={()=> addRestPass(true)}
							children="Забыли пароль?"
						/>

						<div className={st.info}>
							Авторизуясь на сайте, вы соглашаетесь <br/>
							с <a href="/src/pages" target="_blank" rel="noreferrer noopener">Политикой конфедециальности</a> и <br/>
							<a href="/src/pages" rel="noreferrer noopener">Условиями использования</a> промо-сайта
						</div>
						<Button
							type="submit"
							className={st.button}
							isLoading={isLoad}
							isDisabled={isDisabled(values)}
							children="Войти"
						/>
					</Form>
				)}
			</Formik>
		</div>
	)
}
