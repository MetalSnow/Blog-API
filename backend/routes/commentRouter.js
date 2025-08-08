const { Router } = require('express');
const {
  getComments,
  createComment,
  deleteComment,
} = require('../controllers/commentController');
const passport = require('../config/passport');

const commentRouter = Router();

commentRouter.get('/:postId/comments', getComments);
commentRouter.post('/:postId/comments', createComment);
commentRouter.delete(
  '/:postId/comments/:commentId',
  passport.authenticate('jwt', { session: false }),
  deleteComment
);

module.exports = commentRouter;
