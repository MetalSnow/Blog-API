const { Router } = require('express');
const {
  getUserInfo,
  updateUserInfo,
  signupUser,
} = require('../controllers/userController');
const userRouter = Router();

userRouter.get('/', getUserInfo);
userRouter.patch('/update', updateUserInfo);

//authentication
userRouter.post('/sign-up', signupUser);

module.exports = userRouter;
