import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

class Comment extends React.PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			comment: props.comment || {
				userId: null,
				createdAt: new Date().toLocaleString(),
				text: '',
			}
		}
	}

	onChangeText = (event) => {
		this.setState({
			comment: {
				...this.state.comment,
				text: event.target.value
			}
		})
	}

	render() {
		const { comment } = this.state
		const html = comment.id
			? (
				<div className='comment'>
					<div className='comment-head'>
						Created at {comment.createdAt} by user {comment.userId}
					</div>
					<div className='comment-body'>
						{comment.text}
					</div>
				</div>
			)
			: (
				<div className='comment-new'>
					<textarea rows={7} value={comment.text} onChange={this.onChangeText}></textarea>
					<a className='btn-submit' onClick={() => this.props.onSave(comment)}>Save</a>
				</div>
			)

		return html
	}
}

Comment.propTypes = {
	comment: PropTypes.object,
	onSave: PropTypes.func.isRequired
}

export default Comment
