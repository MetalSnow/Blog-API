const { Router } = require('express');
const {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');
const commentRouter = Router();

commentRouter.get('/:postId/comments', getComments);
commentRouter.post('/:postId/comments', createComment);
commentRouter.patch('/:postId/comments/:commentId', updateComment);
commentRouter.delete('/:postId/comments/:commentId', deleteComment);

module.exports = commentRouter;
