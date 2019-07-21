import { combineReducers } from 'redux'
import { actions } from './actions'

const initialArticles = {
	loading: false,
	articles: [],
	filterValue: null,
	error: null
}

const initialArticle = {
	loading: false,
	article: {
		id: null,
		description: null,
		title: null,
		text: null,
		createdAt: null,
		userId: null,
		userDetails: {
			id: null,
			name: null
		}
	},
	error: null
}

function articlesReducer (state = initialArticles, action) {
	switch (action.type) {
		case actions.GET_ARTICLES_STARTED:
			return {
				...state,
				loading: true
			}
		case actions.GET_ARTICLES_SUCCESS:
			return {
				...state,
				articles: action.payload,
				loading: false,
				error: null
			}
		case actions.GET_ARTICLES_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case actions.USER_CHANGE_ARTICLES_FILTER:
			return {
				...state,
				filterValue: action.payload
			}
		default:
			return state
	}
}

function articleReducer (state = initialArticle, action) {
	switch (action.type) {
		case actions.GET_ARTICLE_STARTED:
			return {
				...state,
				loading: true
			}
		case actions.GET_ARTICLE_SUCCESS:
			return {
				...state,
				article: action.payload,
				loading: false,
				error: null
			}
		case actions.GET_ARTICLE_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case actions.ARTICLE_COMMENTS_UPDATED:
			return {
				...state,
				article: {
					...state.article,
					comments: action.payload
				}
			}
		case actions.RESET_ARTICLE:
			return { ...initialArticle }
		default:
			return state
	}
}

export default combineReducers({
	articles: articlesReducer,
	article: articleReducer
})
