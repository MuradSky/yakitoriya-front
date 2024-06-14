import { ReactElement } from 'react'
import {Navigate, useRoutes} from "react-router-dom";
import { Profile } from "./Profile";
import { Main } from './Main';
import {useScrollTop, useUser} from 'hooks';

const ProtectedRoute = ({children}: { children: ReactElement }) => {
	const {isLogged} = useUser()
	return !isLogged ? <Navigate to="/" replace/> : children
}

const routes = [
	{
		path: "/",
		element: <Main />,
	},
	{
		path: "/profile",
		element: <ProtectedRoute children={<Profile />} />,
	},
	{
		path: "*",
		element: <Navigate to="/" replace/>,
	},

]

export const Router = ()=> {
	useScrollTop()
	const element = useRoutes(routes)
	return element
}
