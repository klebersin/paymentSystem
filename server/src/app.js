import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { sequelize } from './database/database';

var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders');
var customersRouter = require('./routes/customers');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/customers', customersRouter);



app.listen(app.get('port'), ()=>{
    console.log('Server on port' , app.get('port'))
    sequelize.authenticate().then(()=>{
        console.log('Connect successfully');
    })
})