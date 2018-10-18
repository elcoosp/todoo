import m from 'mongoose'
import { req, withIdVirtual } from './utils'

const {
	Schema: { Types: ObjectId }
} = m
const todoSchema = withIdVirtual(
	new m.Schema({
		title: req(String),
		body: req(String),
		starred: req(Boolean, { default: false }),
		deadline: req(Date),
		category: { type: ObjectId, ref: 'Category' }
	})
)

const Todo = m.model('Todo', todoSchema)

export default Todo
