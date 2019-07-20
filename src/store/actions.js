const actionCreator = (type, payload) => ({
	type,
	payload
})

export const actions = {
	GET_ARTICLES_STARTED: 'GET_ARTICLES_STARTED',
	GET_ARTICLES_SUCCESS: 'GET_ARTICLES_SUCCESS',
	GET_ARTICLES_FAILED: 'GET_ARTICLES_FAILED',

	GET_ARTICLE_STARTED: 'GET_ARTICLE_STARTED',
	GET_ARTICLE_SUCCESS: 'GET_ARTICLE_SUCCESS',
	GET_ARTICLE_FAILED: 'GET_ARTICLE_FAILED',

	USER_CHANGE_ARTICLES_FILTER: 'USER_CHANGE_ARTICLES_FILTER',
}

export const getArticlesStarted = () => actionCreator(actions.GET_ARTICLES_STARTED)
export const getArticlesSuccess = payload => actionCreator(actions.GET_ARTICLES_SUCCESS, payload)
export const getArticlesFailed = e => actionCreator(actions.GET_ARTICLES_FAILED, e)

export const getArticleStarted = (id) => actionCreator(
	actions.GET_ARTICLE_STARTED, { id }
)
export const getArticleSuccess = payload => actionCreator(actions.GET_ARTICLE_SUCCESS, payload)
export const getArticleFailed = e => actionCreator(actions.GET_ARTICLE_FAILED, e)

export const changeArticlesFilter = val => actionCreator(actions.USER_CHANGE_ARTICLES_FILTER, val)
