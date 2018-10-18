export default Model => ({
	getAll: async (ctx, next) => {
		await next()
		const data = await Model.find()
		ctx.body = data.toJSON()
	},
	getById: async (ctx, next) => {
		await next()
		const data = await Model.findById(ctx.params.id)
		ctx.body = data.toJSON()
	},

	create: async (ctx, next) => {
		await next()
		const data = await Model.create(ctx.request.fields)
		ctx.body = data.toJSON()
	},

	remove: async (ctx, next) => {
		await next()
		const data = await Model.findByIdAndRemove(ctx.params.id)
		ctx.body = data.toJSON()
	},

	update: async (ctx, next) => {
		await next()
		const data = await Model.findByIdAndUpdate(
			ctx.params.id,
			ctx.request.fields,
			{
				new: true
			}
		)
		ctx.body = data.toJSON()
	}
})
