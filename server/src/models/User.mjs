import m from 'mongoose'
import { req, withIdVirtual } from './utils'
const {
	Schema: { Types: ObjectId }
} = m
const userSchema = withIdVirtual(
	new m.Schema({
		pseudo: req(String),
		password: req(String),
		todos: [{ type: ObjectId, ref: 'Todo' }]
	})
)

const User = m.model('User', userSchema)

export default User
