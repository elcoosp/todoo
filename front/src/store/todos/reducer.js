import { handleActions } from 'redux-actions'
import { create, remove, update } from './actions'
import Immutable from 'seamless-immutable'
const initialState = Immutable({
	byIds: [],
	allIds: {},
	meta: { pending: false, error: null }
})

const createReducer = {
	[create.request]: (state, { payload }) =>
		state.setIn(['meta', 'pending'], true),
	[create.success]: (state, { payload: todo }) =>
		state
			.setIn(['allIds', todo.id], todo)
			.updateIn(['byIds'], ids => ids.concat(todo.id))
			.setIn(['meta', 'pending'], false),
	[create.error]: (state, { payload }) =>
		state.setIn(['meta', 'error'], payload).setIn(['meta', 'pending'], false)
}
const reducer = handleActions(
	{
		...createReducer
	},
	initialState
)

export default reducer
