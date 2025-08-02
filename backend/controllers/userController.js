const { PrismaClient } = require('../generated/prisma');
const asyncHandler = require('async-handler');

const prisma = new PrismaClient();

const getUser = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  res.json({ user });
});

const updateUser = asyncHandler(async (req, res) => {
  const newName = req.body.username;
  const updateUser = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      username: newName,
    },
  });

  res.json({ updateUser });
});

module.exports = { getUser, updateUser };
