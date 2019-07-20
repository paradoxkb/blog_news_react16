import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

class Header extends React.Component {
	render() {
		return (
			<header>
				<Link to='/articles'>
					<h3>Articles Blog</h3>
				</Link>
			</header>
		)
	}
}

export default Header
