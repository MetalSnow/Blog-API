const { PrismaClient } = require('../generated/prisma');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

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
      id: 2,
    },
    data: {
      username: newName,
    },
  });

  res.json({ data: updateUser });
});

const signupUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  res.json({ data: user });
});

module.exports = { getUserInfo, updateUserInfo, signupUser };
