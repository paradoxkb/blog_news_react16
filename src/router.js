import React from 'react'
import { Route, Link } from 'react-router-dom'
import Articles from "./containers/Articles";
import Article from "./containers/Article";

function Sandwiches() {
	return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
	return (
		<div>
			<h2>Tacos</h2>
			<ul>
				<li>
					<Link to="/tacos/bus">Bus</Link>
				</li>
				<li>
					<Link to="/tacos/cart">Cart</Link>
				</li>
			</ul>

			{routes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
		</div>
	);
}

function Bus() {
	return <h3>Bus</h3>;
}

function Cart() {
	return <h3>Cart</h3>;
}

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
		path: "/articles",
		component: Articles
	},
	{
		path: "/article/:id",
		component: Article
	},
	{
		path: "/sandwiches",
		component: Sandwiches
	},
	{
		path: "/tacos",
		component: Tacos,
		routes: [
			{
				path: "/tacos/bus",
				component: Bus
			},
			{
				path: "/tacos/cart",
				component: Cart
			}
		]
	}
];
