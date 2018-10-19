import { takeEvery, call, put } from 'redux-saga/effects'
import * as A from './actions'
import { todos as todosApi } from '../../api'

function* createSaga({ payload }) {
	try {
		const todo = yield call(todosApi.create, payload)

		yield put(A.create.success(todo))
	} catch (error) {
		console.log(error)
		yield put(A.create.error('An error occured'))
	}
}

export default function* rootSaga() {
	yield takeEvery(A.create.request.toString(), createSaga)
}
