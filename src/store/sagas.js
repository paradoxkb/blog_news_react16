import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import * as services from './services'
import { getCommentsStorageKey } from '../utils'

function* fetchArticlesSaga() {
	try {
		const articles = yield call(services.fetchArticles)

		if (Array.isArray(articles)) {
			yield put(actions.getArticlesSuccess(articles))
		} else if (articles.error) {
			console.error(articles.error)
			throw new Error(articles.error)
		}
	} catch (e) {
		yield put(actions.getArticlesFailed(e))
	}
}

function* fetchArticleSaga(action) {
	try {
		const article = yield call(services.fetchArticle, action.payload.id)
		const user = yield call(services.fetchUser, article.userId)
		const comments = getArticleComments(article.id)

		yield put(actions.getArticleSuccess({ ...article, userDetails: user, comments }))
	} catch (e) {
		yield put(actions.getArticleFailed(e))
	}
}

function getArticleComments(articleId) {
	const commentsKey = getCommentsStorageKey(articleId)

	return localStorage.getItem(commentsKey) ? JSON.parse(localStorage.getItem(commentsKey)) : []
}

function* onUserCommentedArticleSaga(action) {
	if (!action.payload.articleId) {
		throw new Error('Article Id required')
	}

	const comments = getArticleComments(action.payload.articleId)
	const prepared = Object.assign(action.payload, { id: Math.random().toString(36).slice(2) })

	comments.push(prepared)
	localStorage.setItem(
		getCommentsStorageKey(action.payload.articleId),
		JSON.stringify(comments)
	)

	yield put(actions.articleCommentsUpdated(comments))
}

function* mySaga() {
	yield all([
		takeLatest(actions.actions.GET_ARTICLES_STARTED, fetchArticlesSaga),
		takeLatest(actions.actions.GET_ARTICLE_STARTED, fetchArticleSaga),
		takeEvery(actions.actions.USER_COMMENTED_ARTICLE, onUserCommentedArticleSaga)
	])
}

export default mySaga