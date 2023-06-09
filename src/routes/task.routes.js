import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, updateTask, createTask, deleteTasks } from '../controllers/task.controller.js'

const routerTask = Router()

routerTask.get('/tasks', authRequired, getTasks)
routerTask.get('/tasks/:id', authRequired, getTask)
routerTask.post('/tasks', authRequired, createTask)
routerTask.put('/tasks/:id', authRequired, updateTask)
routerTask.delete('/tasks/:id', authRequired, deleteTasks)

export default routerTask