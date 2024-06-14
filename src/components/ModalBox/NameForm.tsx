import st from './ModalAuth.module.scss';
import Clear from 'assets/images/svg/clear.svg?react';
import {customStyles} from './customStyles';
import {Form, Formik} from 'formik';
import {Button, TextField} from '../UI';
import ReactModal from 'react-modal';

export const NameForm = ({isOpen, onClosed }: TModal) => {
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
						Как вас зовут?
					</div>
					<Formik initialValues={{}} onSubmit={()=> {}}>
						<Form>
							<TextField name="name" placeholder="Ваше имя*" />
							<Button type="submit" className={st.button_email}>
								Сохранить
							</Button>
						</Form>
					</Formik>
				</div>
			</div>
		</ReactModal>

	)
}
