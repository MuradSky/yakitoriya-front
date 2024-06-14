import st from './ModalAuth.module.scss';
import Clear from 'assets/images/svg/clear.svg?react';
import {customStyles} from './customStyles';
import {Form, Formik} from 'formik';
import {Button, TextField} from '../UI';
import Email from 'assets/images/svg/email2.svg?react';
import ReactModal from 'react-modal';

export const FillForm = ({isOpen, onClosed }: TModal) => {
	return (
		<ReactModal
			isOpen={isOpen}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<div className={st.box}>
				<button className={st.closed} onClick={onClosed}>
					<Clear/>
				</button>
				<div className={st.body}>
					<div className={st.title}>
						Заполни анкету
					</div>
					<div className={[st.text, st.text_mb10].join(' ')}>
						Вы не указали свои данные при регистрации, заполните пожалуйста:
					</div>
					<Formik initialValues={{}} onSubmit={()=> {}}>
						<Form>
							<TextField name="name" placeholder="Имя*" />

							<div className={st.icon_sec}>
								<Email />
							</div>
							<div className={[st.text, st.text_mb10].join(' ')}>
								Подтверди свою почту, получи <br/>
								Гарантированный приз!
							</div>
							<TextField name="email" placeholder="E-mail*" />

							<Button type="submit" className={st.button_email}>
								Сохранить
							</Button>
						</Form>
					</Formik>
					<Button className={st.button_mt14} variant="empty">
						Заполнить позже
					</Button>
				</div>
			</div>
		</ReactModal>

	)
}
