const express = require('express');
const router = express.Router();

const response = require('../utils/response');
const Dao = require('../dao/Dao');
const dao = new Dao('Director');

router.get('/', (req, res) => {

  dao.list()
    .then(result => response(res, 200, result),
      err => response(res, 400, err));

});

router.post('/', (req, res) => {

  dao.insert([req.body.name])
    .then(result => response(res, 200, result),
      err => response(res, 400, err));

});

router.delete('/:id', (req, res) => {

  dao.delete([req.params.id])
    .then(result => response(res, 200, result),
      err => response(res, 400, err));

});

router.put('/:id', (req, res) => {

  dao.update([req.body.name, req.params.id])
    .then(result => response(res, 200, result),
      err => response(res, 400, err));

});

module.exports = router;