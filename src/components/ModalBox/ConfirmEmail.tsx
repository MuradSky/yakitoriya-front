import ReactModal from 'react-modal';
import {customStyles} from './customStyles';
import st from './ModalAuth.module.scss';
import Clear from 'assets/images/svg/clear.svg?react';
import {Form, Formik} from 'formik';
import {Button, TextField} from '../UI';
import Email from 'assets/images/svg/email2.svg?react';

export const ConfirmEmail = ({ isOpen, onClosed }: TModal) => {
	return (
		<ReactModal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
			<div className={st.box}>
				<button className={st.closed} onClick={onClosed}>
					<Clear/>
				</button>
				<div className={st.body}>
					<div className={st.title}>
						Подтвердите почту
					</div>
					<div className={[st.text, st.text_mb10].join(' ')}>
						Вы не указали данные свой e-mail
					</div>

					<Formik initialValues={{}} onSubmit={()=> {}}>
						<Form>
							<div className={st.icon_sec}>
								<Email />
							</div>
							<div className={[st.text, st.text_mb10].join(' ')}>
								Подтверди свою почту, получи <br/>
								Гарантированный приз!
							</div>
							<TextField name="email" placeholder="E-mail*" />

							<Button type="submit" className={st.button_email}>
								Подтвердить почту
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
