const { Router } = require('express');
const {
  getUserInfo,
  updateUserInfo,
  signupUser,
  createJWT,
} = require('../controllers/userController');
const passport = require('../config/passport');
const userRouter = Router();

userRouter.get('/', getUserInfo);
userRouter.patch('/update', updateUserInfo);

//authentication
userRouter.post('/sign-up', signupUser);
userRouter.post(
  '/log-in',
  passport.authenticate('local', { session: false }),
  createJWT
);

module.exports = userRouter;
