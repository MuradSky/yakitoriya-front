import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Header} from './Header'
import {Footer} from './Footer'
import {Router} from 'pages/Router'
import {Loader} from 'components/Loader';
import { ResetPassword, ModalAuth, RegisterEmail, InviteModal, EmailConfirm } from 'components/ModalBox'
import {useGetIpAndUserAgent, useSaveKeysFromQuery} from 'hooks';

export const Layout = () => {
	useGetIpAndUserAgent()
	useSaveKeysFromQuery()
	return (
		<BrowserRouter>
			<Loader />
			<Header />
			<Router/>
			<Footer />

			<ResetPassword />
			<ModalAuth />
			<RegisterEmail />
			<InviteModal />
			<EmailConfirm />
		</BrowserRouter>
	)
}
