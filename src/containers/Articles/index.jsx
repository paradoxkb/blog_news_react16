import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../../components/Spinner'
import {changeArticlesFilter, getArticlesStarted} from '../../store/actions'
import './styles.scss'

const ArticleItem = (props) => {
	const { article } = props

	return (
		<div className='article-single'>
			<Link to={`/articles/${article.id}`}><h3>{article.title}</h3></Link>
			<div className='article-single-descr'>{article.description}</div>
		</div>
	)
}

class Articles extends React.PureComponent {
	componentDidMount() {
		this.props.getArticles()
	}

	render() {
		const { articles, isLoading } = this.props

		return (
			<div className='articles-grid'>
				<div className='filter-row'>
					<input
						type='text'
						placeholder='Type to filter...'
						defaultValue={this.props.filterValue || ''}
						onChange={e => this.props.onChangeFilter(e.target.value || null)}
					/>
				</div>
				{isLoading
					? <Spinner />
					: articles.map((a, i) => (
						<ArticleItem
							key={i}
							article={a}
						/>
					))
				}
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
			: state.articles.articles,
		filterValue: state.articles.filterValue,
		isLoading: state.articles.loading
	}),
	dispatch => ({
		getArticles: () =>
			dispatch(getArticlesStarted()),
		onChangeFilter: (val) =>
			dispatch(changeArticlesFilter(val))
	})
)(Articles)
