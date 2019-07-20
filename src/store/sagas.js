import { call, put, takeLatest } from 'redux-saga/effects'
// import Api from '...'

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
function* fetchUser(action) {
	try {
		const user = yield call('/get.com', action.payload.userId);
		yield put({type: "USER_FETCH_SUCCEEDED", user: user});
	} catch (e) {
		yield put({type: "USER_FETCH_FAILED", message: e.message});
	}
}

function* mySaga() {
	yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;