module.exports = (err, req, res, next) => {
  console.error(err.message);
  let message = 'Internal Server Error'
  if(err.message && process.env.NODE_ENV !== 'production'){
    message = err.message
  }
  res.status(500).send({
    message
  });
};