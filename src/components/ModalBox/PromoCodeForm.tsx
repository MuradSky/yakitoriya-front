import {Form, Formik, FormikProps, FormikValues} from 'formik';
import ReactModal from 'react-modal';
import st from './ModalAuth.module.scss';
import Clear from 'assets/images/svg/clear.svg?react';
import Ticket from 'assets/images/svg/ticket.svg?react';
import TicketBroken from 'assets/images/svg/ticket-broken.svg?react';
import {customStyles} from './customStyles';
import {Button, CodeInputMask, InputNumber} from '../UI';
import {Cookies} from '../../utils';
import {useAxios, useUser} from '../../hooks';
import {useCallback, useState} from 'react';

type TView = {
	message: string | null,
	type: string | null
}

const Error = ({ changeView, message }: {
	changeView: (param: TView) => void, message: string | null | undefined
})=> {
	return (
		<div className={st.body}>
			<div className={st.title}>Ошибка</div>
			<div className={st.icon_sec}>
				<TicketBroken width={56} height={56}  />
			</div>
			<div className={[st.text, st.text_mb30].join(' ')}>
				{message}
			</div>
			<Button className={st.button_email} variant="empty" onClick={()=> changeView({message: null, type: null})}>
				Ввести заново
			</Button>
		</div>
	)
}

const Success = ({ changeView }: { changeView: (param: TView) => void })=> {
	return (
		<div className={st.body}>
			<div className={st.title}>Спасибо!</div>
			<div className={st.icon_sec}>
				<Ticket width={56} height={56}  />
			</div>
			<div className={[st.text, st.text_mb30].join(' ')}>
				Код успешно добавлен
			</div>
			<Button className={st.button_ok} onClick={()=> changeView({ message: null, type: null })}>
				Хорошо
			</Button>
		</div>
	)
}

const FormBlock = ({ changeView }: { changeView: (param: TView) => void } )=> {
	const { mutationTrigger } = useUser()
	const { isLoad, postData } = useAxios()

	const onSubmit = (data: FormikValues)=> {
		postData('/user/promocode', data, {
			headers: {
				Authorization: `Bearer ${Cookies.get('_yak_token')}`,
				"Accept": "application/json",
			}
		}).then((res: any)=> {
			if (res.data.data.error) {
				return changeView({
					message: res.data.data.error,
					type: 'error'
				})
			}

			mutationTrigger()
			changeView({
				message: null,
				type: 'success'
			})
		})
	}

	return (
		<div className={st.body}>
			<div className={st.title}>Добавить код</div>
			<Formik initialValues={{ code: '' }} onSubmit={onSubmit}>
				{({ values }: FormikProps<any>)=> (
					<Form>
						<InputNumber
							name="code"
							format="########"
							placeholder="GAME_CODE"
							disabled={isLoad}
						/>
						<Button
							type="submit"
							className={st.button_email}
							isLoading={isLoad}
							isDisabled={values.code.length < 3}
						>
							Добавить код
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	)
}



export const PromoCodeForm = ({isOpen, onClosed }: TModal) => {
	const [view, setView] = useState<TView>({
		message: null,
		type: null
	})
	const onModalClose = useCallback(()=> {
		onClosed()
		setView({message: null, type: null})
	}, [isOpen])

	const changeView = useCallback((params: TView)=> {
		if (view?.type === 'success') onClosed()
		setView(params)
	}, [view])

	return (
		<ReactModal
			isOpen={isOpen}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<div className={st.box}>
				<button className={st.closed} onClick={onModalClose}>
					<Clear/>
				</button>
				{view?.type === 'success' ? <Success changeView={changeView} />
					: view?.type === 'error' ? <Error changeView={changeView} message={view?.message} /> :
						<FormBlock changeView={changeView} />
				}
			</div>
		</ReactModal>

	)
}
