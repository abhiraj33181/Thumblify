import express from 'express'
import { loginUser, logoutuser, registerUser, verifyUser } from '../controllers/AuthController.js'
import protect from '../middlewares/auth.js'

const AuthRouter = express.Router()

AuthRouter.post('/register' , registerUser)
AuthRouter.post('/login' , loginUser)
AuthRouter.get('/verify' , protect, verifyUser)
AuthRouter.get('/logout' , protect, logoutuser)

export default AuthRouter;