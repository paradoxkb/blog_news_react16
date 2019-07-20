import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as services from './services'

function* fetchArticlesSaga(action) {
	try {
		const articles = yield call(services.fetchArticles)

		yield put(actions.getArticlesSuccess(articles))
	} catch (e) {
		yield put(actions.getArticlesFailed(e))
	}
}

function* fetchArticleSaga(action) {
	try {
		const article = yield call(services.fetchArticle, action.payload.id)
		const user = yield call(services.fetchUser, article.userId)

		yield put(actions.getArticleSuccess({ ...article, userDetails: user }))
	} catch (e) {
		yield put(actions.getArticleFailed(e))
	}
}

function* mySaga() {
	yield takeLatest(actions.actions.GET_ARTICLES_STARTED, fetchArticlesSaga)
	yield takeLatest(actions.actions.GET_ARTICLE_STARTED, fetchArticleSaga)
}

export default mySaga