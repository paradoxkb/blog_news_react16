import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import reducer from './store/reducer'
import saga from './store/sagas'

export default function configureStore(initialState) {
	const sagaMiddleWare = createSagaMiddleWare()
	const store = createStore(
		reducer,
		initialState,
		applyMiddleware(sagaMiddleWare)
	)
	sagaMiddleWare.run(saga, store.dispatch)

	return store
}
