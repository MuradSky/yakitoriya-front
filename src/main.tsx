import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal';
import {Layout} from 'layout/Layout';
import 'assets/styles/index.scss'
import 'config/http'

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Layout/>
    </React.StrictMode>,
)
