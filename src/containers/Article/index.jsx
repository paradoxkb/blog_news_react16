import React from 'react'
import Comment from '../../components/Comment'
import { articlesInit } from '../../utils'
import './styles.scss'

class Article extends React.PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			article: articlesInit.filter(a => a.id === props.match.params.id)[0]
		}
	}

	onCommentSave = comment => {
		alert('comment ' + comment.id + ' saved')
	}

	render() {
		const { article } = this.state

		return (
			<div className='article'>
				<div className='article-head'>
					<h4>{article.title}</h4>
				</div>
				<div className='article-body'>
					{article.text}
				</div>
				<div className='article-comments'>
					{article.comments && article.comments.map((comment, i) => (
						<Comment
							key={i}
							comment={comment}
							onSave={this.onCommentSave}
						/>
					))}
					<Comment
						onSave={this.onCommentSave}
					/>
				</div>
			</div>
		)
	}
}

export default Article
