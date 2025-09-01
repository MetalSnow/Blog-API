const { Router } = require('express');
const {
  getUserInfo,
  updateUserInfo,
  signupUser,
  createJWT,
} = require('../controllers/userController');
const authenticateLogin = require('../middlewares/authenticateLogin');
const passport = require('../config/passport');
const userRouter = Router();

userRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  getUserInfo
);
userRouter.patch(
  '/update',
  passport.authenticate('jwt', { session: false }),
  updateUserInfo
);

//authentication
userRouter.post('/sign-up', signupUser);
userRouter.post('/log-in', authenticateLogin, createJWT);

module.exports = userRouter;
