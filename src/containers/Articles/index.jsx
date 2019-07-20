import React from 'react'
import { connect } from 'react-redux'
import { articlesInit } from '../../utils'
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
	constructor(props) {
		super(props)

		console.log(props)

		this.state = {
			articles: articlesInit
		}
	}

	onArticleClick = articleId => {
		this.props.history.push(`/article/${articleId}`)
	}

	render() {
		const { articles } = this.state

		return (
			<div className='articles-grid'>
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

// export default Articles

export default connect(
	(state) => ({
		articles: ['article n']
	}),
	null
)(Articles)
