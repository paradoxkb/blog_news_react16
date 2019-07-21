import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const initComment = {
	userId: null,
	articleId: null,
	createdAt: new Date().toLocaleString(),
	text: '',
}

class Comment extends React.PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			comment: props.comment || { ...initComment }
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

	onSave = () => {
		this.props.onSave(this.state.comment)
		this.setState({
			comment: { ...initComment }
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
					<a className='btn-submit' onClick={this.onSave}>Save</a>
				</div>
			)

		return html
	}
}

Comment.propTypes = {
	comment: PropTypes.object,
	onSave: PropTypes.func
}

export default Comment
