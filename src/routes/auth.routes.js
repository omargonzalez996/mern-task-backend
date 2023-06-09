import { Router } from "express";
import { login, register, logout, profile } from '../controllers/auth.controller.js'
import { authRequired } from "../middlewares/validateToken.js";

const routerAuth = Router()

routerAuth.post('/register', register)

routerAuth.post('/login', login)

routerAuth.post('/logout', logout)

routerAuth.get('/profile', authRequired, profile)

export default routerAuth