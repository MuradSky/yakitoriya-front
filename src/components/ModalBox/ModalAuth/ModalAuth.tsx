import React, {useCallback, useState} from "react"
import ReactModal from 'react-modal'
import {Login} from './components/Login'
import {Register} from './components/Register'
import Clear from 'assets/images/svg/clear.svg?react'
import {customStyles} from '../customStyles'
import st from '../ModalAuth.module.scss'
import {useAuthStore} from 'store';
import {reformCn} from 'utils';

const Header = ({ isLogin, setIsLogin }: any )=> {
	const login  = reformCn(st.head_btn, isLogin ? st.head_btn_active : '')
	const register  = reformCn(st.head_btn, !isLogin ? st.head_btn_active : '')

	return (
		<div className={st.head}>
			<button className={login} onClick={()=> setIsLogin(true)}>Вход</button>
			<button className={register} disabled>Регистрация</button>
		</div>
	)
}

export const ModalAuth = ()=> {
	const { isOpenAuth, isRegister, addOpenAuth }: TAuth = useAuthStore()
	const [isLogin, setIsLogin] = useState(true)
	const handleClose = useCallback(()=> addOpenAuth(false), [])

	return (
		<ReactModal isOpen={isOpenAuth} style={customStyles} contentLabel="Auth Modal">
			<div className={st.box}>
				<button className={st.closed} onClick={handleClose}>
					<Clear/>
				</button>
				<Header isLogin={isLogin} setIsLogin={setIsLogin} />
				{isLogin ? <Login /> : <Register />}
			</div>
		</ReactModal>
	)
}

export default ModalAuth
