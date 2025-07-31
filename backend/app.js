const express = require('express');
const indexRouter = require('./routes/indexRoute');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/', indexRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`API is listening on port: ${PORT}`));
