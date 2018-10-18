import mongoose from 'mongoose'
const { DB_USER, DB_PWD } = process.env

const url = (user, pwd) =>
	`mongodb://${user}:${pwd}@ds135413.mlab.com:35413/todoo`

mongoose.connect(
	url(DB_USER, DB_PWD),
	{ useNewUrlParser: true }
)

const db = mongoose.connection

db.on('error', console.log)

export default db
