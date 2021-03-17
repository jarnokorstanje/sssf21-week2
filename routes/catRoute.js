'use strict';

const express = require('express');
const {cat_list_get} = require('../controllers/catController');
const router = express.Router();

router.get('/', cat_list_get);

router.get('/:id', (req, res) => {
  res.send('cat with id ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('post');
});

router.put('/', (req, res) => {
  res.send('put');
});

router.delete('/', (req, res) => {
  res.send('delete');
});

module.exports = router;
