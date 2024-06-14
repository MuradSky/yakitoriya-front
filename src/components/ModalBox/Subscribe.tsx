import ReactModal from 'react-modal'
import {Form, Formik, FormikValues} from 'formik'
import {Button, Checkbox} from '../UI'
import {useAxios, useGetIpAndUserAgent, useUser} from 'hooks'
import {customStyles} from './customStyles'
import Clear from 'assets/images/svg/clear.svg?react'
import st from './ModalAuth.module.scss'
import {Cookies} from 'utils'

export const Subscribe = ({ isOpen, onClosed }: TModal) => {
	const { userID } = useGetIpAndUserAgent()
	const { user, mutationTrigger } = useUser()
	const { isLoad, postData } = useAxios()
	const onSubmit = (data: FormikValues)=> {
		const headers = {
			Authorization: `Bearer ${Cookies.get('_yak_token')}`,
			"Accept": "application/json",
		}
		postData('/user/subscribe', {...data, ...userID}, { headers }).then((res: any)=> {
			if (res.data.message === 'Success') {
				mutationTrigger().then(()=>onClosed())
			}
		})
	}


	return (
		<ReactModal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
			<div className={st.box}>
				<button className={st.closed} onClick={onClosed}>
					<Clear/>
				</button>

				<div className={st.body}>
					<div className={st.title}>Подписка на Рекламу</div>

					<Formik initialValues={{
						sms: user?.sms_subscription,
						email: user?.email_subscription
					}} onSubmit={onSubmit}>
						<Form>
							<Checkbox
								isDisabled={isLoad}
								name="sms"
								styled={{ marginBottom: 30, fontSize: '16px', }}
								children="Согласие на SMS-рассылку"
							/>
							<Checkbox
								isDisabled={isLoad || user?.need_confirmation}
								name="email"
								styled={{
									marginBottom: 30,
									fontSize: '16px',
									cursor: isLoad || user?.need_confirmation ? 'no-drop' : 'pointer'
								}}
								children="Согласие на E-mail рассылку"
							/>

							<Button
								className={st.button_ok}
								isLoading={isLoad}
							>
								Сохранить
							</Button>
						</Form>
					</Formik>
				</div>
			</div>
		</ReactModal>
	)
}
