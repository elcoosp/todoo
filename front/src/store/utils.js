import { createAction } from 'redux-actions'
import cc from 'camelcase'

const types = {
	request: t => `${t}_REQUEST`,
	success: t => `${t}_SUCCESS`,
	error: t => `${t}_ERROR`
}
const toAsyncActionCreators = t => ({
	request: createAction(types.request(t)),
	success: createAction(types.success(t)),
	error: createAction(types.error(t))
})

export const asyncActions = (...actionTypes) =>
	actionTypes.reduce(
		(acc, type) => ((acc[cc(type)] = toAsyncActionCreators(type)), acc),
		{}
	)
