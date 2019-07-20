import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './configureStore'
import { RouteWithSubRoutes, routes } from './router'
import MainWrapper from './containers/MainWrapper'
import './styles/theme.scss'

const store = configureStore()

class App extends React.Component {
    render() {
        return (
			<Provider store={store}>
				<Router>
					<MainWrapper content={this.props.children}>
						{routes.map((route, i) => (
							<RouteWithSubRoutes key={i} {...route} />
						))}
					</MainWrapper>
				</Router>
			</Provider>
        )
    }
}

export default App
