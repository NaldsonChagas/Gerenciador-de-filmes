const express = require('express');
const router = express.Router();

const MovieDao = require('./../dao/MovieDao');
const dao = new MovieDao();

router.get('/', (req, res) => {
  dao.list()
    .then(result => {
      res.status(200).json(result);
    }, err => {
      res.status(400).json({ error: err });
    });
});

router.post('/', (req, res) => {
  dao.insert([req.body.title, req.body.description, req.body.author_id])
    .then(result => res.status(200).json(result),
      err => reject(err));
});

router.delete('/:id', (req, res) => {
  dao.delete(parseInt(req.params.id))
    .then(result => res.status(200).json(result),
      err => res.status(400).json(err));
});

module.exports = router;