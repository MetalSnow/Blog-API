const { Router } = require('express');
const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const passport = require('../config/passport');

const postRouter = Router();

postRouter.get('/', getAllPosts);
postRouter.get('/:postId', getPost);
postRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createPost
);
postRouter.patch(
  '/:postId',
  passport.authenticate('jwt', { session: false }),
  updatePost
);
postRouter.delete(
  '/:postId',
  passport.authenticate('jwt', { session: false }),
  deletePost
);

module.exports = postRouter;
