import express from 'express';
import Customer from '../models/Customer';

const router = express.Router();
router.get('/', (req, res, next) => {
  Customer.findAll().then(
    (customers) => res.json(customers)
  )
});

router.get('/:id', (req, res, next) => {
  Customer.findByPk(req.params.id)
    .then((customer) => {
      if (customer) {
        res.json(customer)
      }
      else{
        res.json({
          message: 'There is no customer with that id'
        })
      }
    })
    .catch((error) => res.json(error));
});

router.post('/', (req, res, next) => {
  Customer.create(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      code: req.body.code,
      grade: req.body.grade,
      state: 'a'
    }
  ).then(
    (customer) => {
      res.json(customer);
    }
  ).catch((error) => {
    res.json(error);
  })
});

router.put('/:id', (req, res, next) => {
  Customer.update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    code: req.body.code,
    grade: req.body.grade,
    state: req.body.state,
  }, {
    where: {
      id: req.params.id
    }
  }).then(
    () => res.json({ message: 'Success' })
  )
});

router.patch('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

router.delete('/:id', (req, res, next) => {
  Customer.destroy({
    where: { id: req.params.id }
  }).then(
    () => res.json({ message: 'Success' })
  )
});

module.exports = router;