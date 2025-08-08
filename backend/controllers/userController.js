const { PrismaClient } = require('../generated/prisma');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

const createJWT = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '24h' },
    (err, token) => {
      if (err) throw new Error(err);
      res.json({ token });
    }
  );
});

module.exports = { getUserInfo, updateUserInfo, signupUser, createJWT };
