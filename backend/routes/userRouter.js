const { Router } = require('express');
const { getUser, updateUser } = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/', getUser);

userRouter.patch('/update', updateUser);

module.exports = userRouter;
