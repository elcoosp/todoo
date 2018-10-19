import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { all } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import todos from './todos/reducer'
import watchTodos from './todos/sagas'

const sagaMiddleware = createSagaMiddleware()

function* rootSaga(params) {
	yield all([watchTodos()])
}
const rootReducer = combineReducers({
	todos
})

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
