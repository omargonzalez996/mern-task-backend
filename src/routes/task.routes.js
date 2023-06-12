import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, updateTask, createTask, deleteTasks } from '../controllers/task.controller.js'
import { createTaskSchema } from '../schemas/task.schema.js'
import { validateSchema } from '../middlewares/validator.middleware.js'

const routerTask = Router()

routerTask.get('/tasks', authRequired, getTasks)
routerTask.get('/tasks/:id', authRequired, getTask)
routerTask.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask)
routerTask.put('/tasks/:id', authRequired, updateTask)
routerTask.delete('/tasks/:id', authRequired, deleteTasks)

export default routerTask