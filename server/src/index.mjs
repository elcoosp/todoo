import './env.mjs'
import Koa from 'koa'
import body from 'koa-better-body'
import logger from 'koa-logger'
import db from './db.mjs'
import { todos, categories, users } from './routes'

const { PORT } = process.env
const app = new Koa()

app
	.use(body())
	.use(logger())
	.use(todos.routes())
	.use(categories.routes())
	.use(users.routes())
	.listen(PORT)
