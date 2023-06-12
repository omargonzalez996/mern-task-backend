import { Router } from "express";
import { login, register, logout, profile } from '../controllers/auth.controller.js'
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const routerAuth = Router()

routerAuth.post('/register', validateSchema(registerSchema), register)

routerAuth.post('/login', validateSchema(loginSchema), login)

routerAuth.post('/logout', logout)

routerAuth.get('/profile', authRequired, profile)

export default routerAuth