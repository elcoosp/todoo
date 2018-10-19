import { createSelector } from 'reselect'

export const byIds = s => s.todos.byIds
export const allIds = s => s.todos.allIds
export const all = createSelector([byIds, allIds], (ids, all) =>
	ids.map(id => all[id])
)
