import React from 'react'
import Header from '../../components/Header'
import './styles.scss'

class MainWrapper extends React.PureComponent {
	render() {
		return (
			<div className='main-wrapper'>
				<Header/>
				<div className='content'>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default MainWrapper
