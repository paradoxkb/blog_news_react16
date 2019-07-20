import React from 'react'
import { connect } from 'react-redux'
import {changeArticlesFilter, getArticlesStarted} from '../../store/actions'
import './styles.scss'

const ArticleRow = (props) => {
	const { article, onArticleClick } = props

	return (
		<tr className='article-row' onClick={() => onArticleClick(article.id)}>
			<td>{article.id}</td>
			<td>{article.title}</td>
			<td>{article.createdAt}</td>
		</tr>
	)
}

class Articles extends React.PureComponent {
	componentDidMount() {
		this.props.getArticles()
	}

	onArticleClick = articleId => {
		this.props.history.push(`/article/${articleId}`)
	}

	render() {
		const { articles } = this.props

		return (
			<div className='articles-grid'>
				<div className='filter-row'>
					<input
						type='text'
						placeholder='Type to filter...'
						onChange={e => this.props.onChangeFilter(e.target.value || null)}
					/>
				</div>
				<table cellSpacing='0'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
					{articles.map((a, i) => (
						<ArticleRow
							key={i}
							article={a}
							onArticleClick={this.onArticleClick}
						/>
					))}
					</tbody>
				</table>
			</div>
		)
	}
}

export default connect(
	(state) => ({
		articles: state.articles.filterValue
			? state.articles.articles
				.filter(a => (
					a.title.includes(state.articles.filterValue) ||
					a.text.includes(state.articles.filterValue)
				))
			: state.articles.articles
	}),
	dispatch => ({
		getArticles: () =>
			dispatch(getArticlesStarted()),
		onChangeFilter: (val) =>
			dispatch(changeArticlesFilter(val))
	})
)(Articles)
