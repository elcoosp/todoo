import Todo from '../models/Todo'
import Crudable from './crudable'
export const { getAll, getById, create, remove, update } = Crudable(Todo)
