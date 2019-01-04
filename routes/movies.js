const express = require('express');
const router = express.Router();
const conn = require('../utils/createConnection');
const MovieDao = require('./../dao/MovieDao');

const movieDao = new MovieDao(conn);

router.get('/', (req, res) => {
  movieDao.list()
    .then(result => {
      res.status(200).json(result);
    }, err => {
      res.status(400).json({ error: err });
    });
});



module.exports = router;