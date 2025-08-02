const express = require('express');
const indexRouter = require('./routes/indexRoute');
const userRouter = require('./routes/userRouter');
const errorMiddleware = require('./middlewares/errorHandler');
const postRouter = require('./routes/postRouter');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/posts', postRouter);

// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`API is listening on port: ${PORT}`));
