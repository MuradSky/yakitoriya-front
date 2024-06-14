import {useCallback, useRef, useState} from 'react';
import {Form, Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import {CodeInfo} from './CodeInfo';
import {useAxios, useUser} from 'hooks';
import {Cookies} from 'utils';
import CodeIcon from 'assets/images/svg/code.svg?react'
import PlusIcon  from 'assets/images/svg/plus-icon.svg?react'
import InfoIcon  from 'assets/images/svg/info-icon.svg?react'
import st from './EnterTheCode.module.scss'
import {Button, InputNumber} from '../UI';
import {PromoCodeRes} from '../ModalBox';

type TRView = {
	message: null | string,
	type: null | string
}

export const EnterTheCode = () => {
	const { mutationTrigger } = useUser()
	const [resView, setResView] = useState<TRView>({
		message: null,
		type: null
	})
	const { isLoad, postData } = useAxios()
	const container = useRef<any>(null)
	const [openCodeInfo, setOpen] = useState(false)

	const onCloseModal = useCallback(()=> {
		setResView({
			message: null,
			type: null
		})
	}, [resView])

	const onSubmit = (data: FormikValues, { setFieldValue }: FormikHelpers<any>)=> {

		// postData('/user/promocode', data, {
		// 	headers: {
		// 		Authorization: `Bearer ${Cookies.get('_yak_token')}`,
		// 		"Accept": "application/json",
		// 	}
		// })
		// 	.then((res: any)=> {
		// 		setFieldValue('code', ' ')
		// 		if (res.data.data.error) {
		// 			return setResView({
		// 				message: res.data.data.error,
		// 				type: 'error'
		// 			})
		// 		}
		//
		// 		mutationTrigger()
		// 		setResView({message: null, type: 'success'})
		// 	})
	}

	return (
		<>
			<div className={st.block} ref={container}>
				<div className={st.wrap}>
					<div className={st.wrap_left}>
						<CodeIcon className={st.icon} />
						<div className={st.title}>Введите код с чека:
							<span
								className={st.info}
								onClick={()=> setOpen(true)}
								style={{color: openCodeInfo ? '#ed1b34' : 'rgba(0, 0, 0, .3)'}}
							>
								<InfoIcon/>
							</span>
						</div>
					</div>

					<Formik initialValues={{ code: '' }} onSubmit={onSubmit}>
						{({ values }: FormikProps<any>)=> (
							<Form className={st.form}>
								<InputNumber
									name="code"
									placeholder="GAME_CODE"
									format="########"
									disabled={true}
								/>

								<Button
									isLoading={isLoad}
									className={st.btn}
									isDisabled={true}
								>
									<span>Добавить</span>
									<PlusIcon />
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>

			<p className={st.text}>
				<sup>*</sup>Максимально можно получить 5 гарантированных подарков за приглашенных друзей
			</p>

			{openCodeInfo && <CodeInfo onClose={()=> setOpen(false)} container={container.current} />}

			<PromoCodeRes
				isOpen={!!resView?.type}
				onClosed={onCloseModal}
				view={resView}
			/>
		</>
	)
}
