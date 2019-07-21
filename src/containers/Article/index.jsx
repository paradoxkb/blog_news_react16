import React from 'react'
import {connect} from 'react-redux'
import Comment from '../../components/Comment'
import Spinner from '../../components/Spinner'
import { getArticleStarted, resetArticle, userCommentedArticle } from '../../store/actions'
import './styles.scss'

class Article extends React.PureComponent {
	static getDerivedStateFromProps(props, state) {
		return {
			...state,
			article: props.article,
			isLoading: props.isLoading
		}
	}

	constructor(props) {
		super(props)

		this.state = {
			article: props.article,
			isLoading: props.isLoading
		}
	}

	componentDidMount() {
		this.props.getArticle(this.props.match.params.id)
	}

	onCommentSave = comment => {
		this.props.saveComment(
			{
				...comment,
				userId: this.props.article.userId,
				articleId: this.props.article.id
			}
		)
	}

	componentWillUnmount() {
		this.props.resetArticle()
	}

	render() {
		const { article, isLoading } = this.state

		return isLoading ? <Spinner /> : (
			<div className='article'>
				<div className='article-head'>
					<h4>{article.title}</h4>
				</div>
				<div className='article-info'>
					{article.id && `Created ${article.createdAt} by ${article.userDetails.name}`}
				</div>
				<div className='article-body'>
					{article.text}
				</div>
				<div className='article-comments'>
					{article.comments && article.comments.map((comment, i) => (
						<Comment
							key={i}
							comment={comment}
							onSave={null}
						/>
					))}
					{article.id && (
						<Comment
							onSave={this.onCommentSave}
						/>
					)}
				</div>
			</div>
		)
	}
}

export default connect(
	(state) => ({
		article: state.article.article,
		isLoading: state.article.loading
	}),
	dispatch => ({
		getArticle: (articleId) =>
			dispatch(getArticleStarted(articleId)),
		resetArticle: () =>
			dispatch(resetArticle()),
		saveComment: (data) =>
			dispatch(userCommentedArticle(data))
	})
)(Article)
