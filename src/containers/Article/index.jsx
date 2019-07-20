import React from 'react'
import { } from 'react-redux'
import Comment from '../../components/Comment'
import './styles.scss'
import {connect} from "react-redux";
import { getArticleStarted } from "../../store/actions";

class Article extends React.PureComponent {
	componentDidMount() {
		this.props.getArticle(this.props.match.params.id)
	}

	onCommentSave = comment => {
		alert('comment ' + comment.id + ' saved')
	}

	render() {
		const { article = {} } = this.props
		console.log(this.props)
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

export default connect(
	(state) => ({
		article: state.article.article
	}),
	dispatch => ({
		getArticle: (articleId) =>
			dispatch(getArticleStarted(articleId))
	})
)(Article)
