module.exports = function response(response, status, result) {
  response.status(status).json(result);
}