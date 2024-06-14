import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ReactModal from 'react-modal';
import {Form, Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import {PhoneField, Button, InputNumber, PhoneMask} from 'components/UI';
import {useAuthStore} from 'store';
import {useAxios, useGetIpAndUserAgent, useUser} from 'hooks';
import Clear from 'assets/images/svg/clear.svg?react';
import st from '../ModalAuth.module.scss';
import {customStyles} from '../customStyles';
import {Cookies, reformCn} from 'utils';


const LoginByNewPass = ({ onClose, changeView }: any)=> {
	const { userID } = useGetIpAndUserAgent()
	const navigate = useNavigate()
	const { mutationTrigger } = useUser()
	const { phone, addIsLogin }: TAuth = useAuthStore()
	const { postData, isLoad } = useAxios()

	const onSubmit = ({ password }: FormikValues, { setFieldError }: FormikHelpers<any>)=> {
		if (!userID) return
		postData('/user/login', { phone, password, ...userID })
			.then((res: any)=> {
				if (res?.data?.data?.error) {
					return setFieldError('password', res?.data?.data?.error)
				}
				if (res.data.data.message === 'Success') {
					Cookies.set('_yak_token', res.data.data.token)
					mutationTrigger().then(()=> {
						navigate('/profile')
						onClose()
						addIsLogin(false)
						changeView()
					})
				}
			})
	}

	return (
		<>
			<div className={reformCn(st.title, st.text_mb30)}>Войти в Личный кабинет</div>
			<div className={reformCn(st.text, st.text_mb30)}>
				Введите пароль, полученный в СМС <br/>
				на указанный вами номер
			</div>
			<Formik initialValues={{ password: '' }} onSubmit={onSubmit}>
				{({ values, errors }: FormikProps<any>) => (
					<Form>
						<InputNumber
							name="password"
							format="# # # # # #"
							placeholder="_ _ _ _ _ _"
							disabled={isLoad}
						/>

						{errors?.password &&
							<button className={reformCn(st.resend, st.mt_1)} onClick={changeView}>
                                Сменить номер
							</button>
						}

						<Button
							className={st.button_mt14}
							type="submit"
							isLoading={isLoad}
							isDisabled={values.password.length < 4}
						>
							Войти
						</Button>
					</Form>
				)}
			</Formik>
		</>
	)
}

const PhoneForm = ({ changeView }: any)=> {
	const { addPhone } = useAuthStore()

	const { postData, isLoad } = useAxios()
	const onSubmit = (data: FormikValues, { setFieldError }: FormikHelpers<any>)=> {
		data.phone = data.phone.replace(/[^0-9]/g, '').slice(1)
		postData('/user/restore-password', data)
			.then((res: any)=> {
				if (res.data.data.error) {
					return setFieldError('phone', res.data.data.error)
				}

				if (res.data.data.message === 'Success') {
					changeView()
					addPhone(data.phone)
				}
			})
	}

	return (
		<>
			<div className={reformCn(st.title, st.text_mb30)}>Забыли пароль?</div>

			<div className={reformCn(st.text, st.text_mb30)}>
				На номер телефона придет СМС <br/>
				с паролем для доступа в Личный Кабинет
			</div>

			<Formik initialValues={{ phone: '' }} onSubmit={onSubmit}>
				{({ values }: FormikProps<any>) => (
					<Form>
						<PhoneMask
							name="phone"
							style={{ marginBottom: 30 }}
							disabled={isLoad}
							placeholder="+7 (___) ___-__-__"
						/>

						<Button
							className={st.button_mt14}
							type="submit"
							isLoading={isLoad}
							isDisabled={values.phone.replace(/[^0-9]/g, '').length < 10}
						>
							Подтверждаю
						</Button>
					</Form>
				)}
			</Formik>
		</>
	)
}

export const ResetPassword = () => {
	const [isPass, setIsPass] = useState(false)
	const { isResetPass, addRestPass } = useAuthStore()
	const onClose = useCallback(()=> {
		setIsPass(false)
		addRestPass(false)
	}, [])

	return (
		<ReactModal
			isOpen={isResetPass}
			style={customStyles}
			contentLabel="Auth Modal"
		>
			<div className={st.box}>
				<button className={st.closed} onClick={onClose}>
					<Clear/>
				</button>
				<div className={st.body}>
					{isPass ? <LoginByNewPass onClose={onClose} changeView={()=> setIsPass(false)} />
						: <PhoneForm changeView={()=> setIsPass(true)} />
					}
				</div>
			</div>
		</ReactModal>
	)
}


export default ResetPassword
