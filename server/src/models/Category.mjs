import m from 'mongoose'
import { req, withIdVirtual } from './utils'

const categorySchema = withIdVirtual(
	new m.Schema({
		title: req(String)
	})
)

const Category = m.model('Category', categorySchema)

export default Category
