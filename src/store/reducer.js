import { combineReducers } from 'redux'

function articlesReducer (state = {}, action) {
	return state
	// switch (action.type) {
	//
	// }
}

function articleReducer (state = {}, action) {
	return state
	// switch (action.type) {
	//
	// }
}

export default combineReducers({
	articles: articlesReducer,
	article: articleReducer
})
