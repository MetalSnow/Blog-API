const { PrismaClient } = require('../generated/prisma');
const asyncHandler = require('express-async-handler');
const posts = require('../mock-data/faker.js');

const prisma = new PrismaClient();

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await prisma.post.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  res.json({ data: posts });
});

const getPost = asyncHandler(async (req, res) => {
  const postId = Number(req.params.postId);
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });
  res.json({ data: post });
});

const createPost = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const createdPost = await prisma.post.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      authorId: userId,
    },
  });
  res.json({
    message: 'Post created successfully! View it',
    data: createdPost,
  });
});

const updatePost = asyncHandler(async (req, res) => {
  const postId = Number(req.params.postId);
  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      title: req.body.title,
      content: req.body.content,
      published: req.body.published,
    },
  });
  res.json({ message: 'Post Updated', data: updatedPost });
});

const deletePost = asyncHandler(async (req, res) => {
  const postId = Number(req.params.postId);
  const deletedPost = await prisma.post.delete({
    where: {
      id: postId,
    },
  });
  res.json({ message: 'Post deleted', data: deletedPost });
});

module.exports = {
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  createPost,
};
