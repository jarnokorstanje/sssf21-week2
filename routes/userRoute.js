'use strict';

const express = require('express');
const {user_list_get, user_get} = require('../controllers/userController');
const router = express.Router();

// const authenticate = (req, res, next) => {
//   // authentication
// }

// router.get('/', authenticate, user_list_get);

router.get('/', user_list_get);

router.get('/:id', user_get);

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
