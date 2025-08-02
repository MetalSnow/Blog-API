module.exports = (req, res, err, next) => {
  console.error(err);
  res.status(500).send(err.message);
};
