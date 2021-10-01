var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.put('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

router.patch('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

router.delete('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
