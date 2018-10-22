import { asyncActions } from '../utils'

export const { create, remove, update } = asyncActions(
	'CREATE',
	'UPDATE',
	'REMOVE'
)
