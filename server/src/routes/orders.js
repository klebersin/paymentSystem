import { Router } from 'express';
import Order from '../models/Order';
const router = Router();

router.get('/', (req, res, next) => {
  Order.findAll().then(
    (orders) => res.json(orders)
  )
});

router.get('/:id', (req, res, next) => {
  Order.findByPk(req.params.id)
    .then((order)=>{
      if(order) res.json(order);
      else res.json({
        message: 'There is no order with that id'
      })
    })
});

router.post('/', (req, res, next) => {
  const { customer_id, code, method, date } = req.body;
  Order.create(
    {
      customer_id,
      code,
      method,
    },
    {
      fields: [customer_id, code, method, date]
    }
  ).then(
    (order) => res.json(order)
  )
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