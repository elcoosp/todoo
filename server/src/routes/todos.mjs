import Router from 'koa-router'
import { getAll, getById, create, update, remove } from '../controllers/todos'

const router = new Router({ prefix: '/todos' })

router
	.get('/', getAll)
	.get('/:id', getById)
	.post('/', create)
	.put('/:id', update)
	.delete('/:id', remove)

export default router
