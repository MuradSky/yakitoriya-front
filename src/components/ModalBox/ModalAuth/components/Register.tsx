import {useState} from 'react';
import {Form, Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import {SmsCode} from './SmsCode';
import {Button, Checkbox, CodeInputMask, PhoneMask, TextField} from 'components/UI';
import {useAuthStore, useCodeStore} from 'store';
import {useAxios} from 'hooks';
import {register} from '../../validation';
import Friend from 'assets/images/svg/friend.svg?react';
import st from 'components/ModalBox/ModalAuth.module.scss';

const iniValues = {
	name: '',
	phone: '',
	referral_code: '',
	personal_data_confirmation: true,
	subscriptions: true,
}

const isDisabled = (values: typeof iniValues) => (!values.name || values.phone.replace(/[^0-9]/g, '').length < 11 || !values.personal_data_confirmation)

export const Register = () => {
	const { saveReferralCode }: TCode = useCodeStore()
	const { addPhone, addRegisterData }: TAuth = useAuthStore()
	const { postData, isLoad } = useAxios()
	const [isSms, setIsSms] = useState(false)

	const sendPhone = (data: FormikValues, { setFieldError }: FormikHelpers<any>)=> {
		data.phone = data.phone.replace(/[^0-9]/g, '').slice(1)

		postData('/user/register', data)
			.then((res: any)=> {
				if (res?.data?.data?.error === 'Номер телефона уже используется') {
					return setFieldError('phone', 'Номер телефона уже используется')
				}
				if (res?.data?.data?.error) {
					return setFieldError('referral_code', res?.data?.data?.error)
				}
				if (res.status >= 200 && res.status < 300) {
					addPhone(data.phone)
					setIsSms(true)
					//@ts-ignore
					addRegisterData(data)
				}
			})
			.catch((err: any)=> {
				console.log(err)
			})
	}

	if (isSms) return <SmsCode />

	return (
		<div className={st.body}>
			<div className={[st.text, st.text_mb30].join(' ')}>На номер телефона придет СМС <br/> с подтверждением</div>
			<Formik validate={register} initialValues={iniValues} onSubmit={sendPhone}>
				{({ values }: FormikProps<any>)=> (
					<Form>
						<TextField
							name="name"
							placeholder="Имя*"
							disabled={isLoad}
							style={{ marginBottom: 16 }}
						/>

						<PhoneMask
							name="phone"
							disabled={isLoad}
							placeholder="+7 (___) ___-__-__"
							style={{ marginBottom: 30 }}
						/>

						<div className={st.referral}>
							<Friend />
							<p>Скопируйте в поле ниже приглашение <br/> от друга</p>

							<CodeInputMask
								name="referral_code"
								mask="999999"
								placeholder="Промокод от друга"
								isDisabled={isLoad}
								defaultValue={saveReferralCode}
							/>
						</div>
						<Checkbox
							isDisabled={isLoad}
							name="personal_data_confirmation"
							styled={{ marginTop: 30 }}
						>
							Согласен с <a href="/src/pages" target="_blank" rel="noreferrer noopener">условиями </a>
							обработки персональных данных и
							<a href="/src/pages" target="_blank" rel="noreferrer noopener"> правилами акции</a>
						</Checkbox>
						<Checkbox
							isDisabled={isLoad}
							name="subscriptions"
							styled={{ marginTop: 30 }}
							children="Я даю свое согласие на получение рекламных смс-сообщений"
						/>
						<Button
							className={st.button_reg}
							type="submit"
							isLoading={isLoad}
							isDisabled={isDisabled(values)}
							children="Зарегистрироваться"
						/>
					</Form>
				)}
			</Formik>
		</div>
	)
}
