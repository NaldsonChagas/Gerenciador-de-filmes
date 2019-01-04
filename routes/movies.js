const express = require('express');
const router = express.Router();

const response = require('./../utils/response');
const Dao = require('../dao/Dao');
const dao = new Dao('Movies');

router.get('/', (req, res) => {
  dao.list()
    .then(result => {
      response(res, 200, result);
    }, err => {
      response(res, 400, err);
    });
});

router.post('/', (req, res) => {
  dao.insert([req.body.title, req.body.description, req.body.author_id])
    .then(result => response(res, 200, result),
      err => response(res, 400, err));
});

router.get('/:id', (req, res) => {
  dao.listOne(req.params.id)
    .then(result => response(res, 200, result),
      err => response(res, 400, err));
});

router.delete('/:id', (req, res) => {
  dao.delete(parseInt(req.params.id))
    .then(result => response(res, 200, result),
      err => response(res, 400, err));
});

router.put('/:id', (req, res) => {
  dao.update([
    req.body.title,
    req.body.description,
    req.body.author_id,
    req.params.id
  ]).then(result => response(res, 200, result),
    err => response(res, 400, err));
});

module.exports = router;