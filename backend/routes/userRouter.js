const { Router } = require('express');
const {
  getUserInfo,
  updateUserInfo,
  signupUser,
  createJWT,
} = require('../controllers/userController');
const authenticateLogin = require('../middlewares/authenticateLogin');
const userRouter = Router();

userRouter.get('/', getUserInfo);
userRouter.patch('/update', updateUserInfo);

//authentication
userRouter.post('/sign-up', signupUser);
userRouter.post('/log-in', authenticateLogin, createJWT);

module.exports = userRouter;
