const { Router } = require('express');
const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/userController');
const userRouter = Router();

userRouter.get('/', getUserInfo);

userRouter.patch('/update', updateUserInfo);

module.exports = userRouter;
