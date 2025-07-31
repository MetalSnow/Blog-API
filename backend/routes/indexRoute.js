const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.json({ message: 'Hello API!' });
});

module.exports = indexRouter;
