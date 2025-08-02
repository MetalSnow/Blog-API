const { PrismaClient } = require('../generated/prisma');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

const getUserInfo = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(user);
  res.json({ data: user });
});

const updateUserInfo = asyncHandler(async (req, res) => {
  const newName = req.body.username;
  const updateUser = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      username: newName,
    },
  });

  res.json({ data: updateUser });
});

module.exports = { getUserInfo, updateUserInfo };
