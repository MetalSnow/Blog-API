const { Router } = require('express');
const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const postRouter = Router();

postRouter.get('/', getAllPosts);
postRouter.get('/:postId', getPost);
postRouter.post('/', createPost);
postRouter.patch('/:postId', updatePost);
postRouter.delete('/:postId', deletePost);

module.exports = postRouter;
