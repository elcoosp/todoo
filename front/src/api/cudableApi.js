import http from 'superagent'

const getBody = x => x.body

export default ressource => ({
	getAll: () => http.get(`/${ressource}`).then(getBody),

	getById: id => http.get(`/${ressource}/${id}`).then(getBody),

	create: todo =>
		http
			.post(`/${ressource}`)
			.send(todo)
			.then(getBody),

	update: (id, todo) =>
		http
			.put(`/${ressource}/${id}`)
			.send(todo)
			.then(getBody),

	remove: id => http.delete(`/${ressource}/${id}`).then(getBody)
})
