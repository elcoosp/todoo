export const req = (type, opts = {}) => ({ type, required: true, ...opts })

export const withIdVirtual = schema => {
	schema.set('toJSON', {
		virtuals: true
	})

	schema.options.toJSON.transform = function(doc, ret, options) {
		ret.id = ret._id
		delete ret._id
		delete ret.__v
	}

	return schema
}
