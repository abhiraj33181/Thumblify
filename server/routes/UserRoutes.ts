import express from 'express'
import { getThumbnailbyId, getUsersThumbnail } from '../controllers/UserController.js'
import protect from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.get('/thumbnails', protect, getUsersThumbnail)
userRouter.get('/thumbnail/:id', protect,  getThumbnailbyId)

export default userRouter;