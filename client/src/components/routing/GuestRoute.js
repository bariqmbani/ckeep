import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const GuestRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext)
	const { isAuthenticated, loading } = authContext
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	)
}

export default GuestRoute
