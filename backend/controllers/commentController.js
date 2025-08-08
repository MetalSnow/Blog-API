const { PrismaClient } = require('../generated/prisma');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

const getComments = asyncHandler(async (req, res) => {
  const comments = await prisma.comment.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  res.json({ data: comments });
});

const createComment = asyncHandler(async (req, res) => {
  const comment = await prisma.comment.create({
    data: {
      email: req.body.email,
      content: req.body.content,
      postId: Number(req.params.postId),
    },
  });

  res.json({ message: 'Comment created', data: comment });
});

const deleteComment = asyncHandler(async (req, res) => {
  const postId = Number(req.params.postId);
  const commentId = Number(req.params.commentId);
  const deletedComment = await prisma.comment.delete({
    where: {
      id: commentId,
      postId: postId,
    },
  });
  res.json({ message: 'Comment deleted', data: deletedComment });
});

module.exports = {
  getComments,
  createComment,
  deleteComment,
};
