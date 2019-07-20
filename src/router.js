import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

export const RouteWithSubRoutes = (route) => (
	<Route
		path={route.path}
		exact={route.exact}
		render={props => (
			// pass the sub-routes down to keep nesting
			<route.component {...props} routes={route.routes} />
		)}
	/>
)

export const routes = [
	{
		path: ['/articles', '/'],
		exact: true,
		component: lazy(() => import('./containers/Articles'))
	},
	{
		path: '/article/:id',
		exact: true,
		component: lazy(() => import('./containers/Article'))
	}
];
