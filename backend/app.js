const express = require('express');
const indexRouter = require('./routes/indexRoute');
const userRouter = require('./routes/userRouter');
const { errorMiddleware } = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/', indexRouter);
app.use('/user', userRouter);

// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`API is listening on port: ${PORT}`));
