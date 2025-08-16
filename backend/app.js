const express = require('express');
const indexRouter = require('./routes/indexRoute');
const userRouter = require('./routes/userRouter');
const errorMiddleware = require('./middlewares/errorHandler');
const postRouter = require('./routes/postRouter');
const commentRouter = require('./routes/commentRouter');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/posts', postRouter);
app.use('/posts', commentRouter);

// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`API is listening on port: ${PORT}`));
