"use strict";

const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'database_payment_system'
});
pool.getConnection(error => {
  if (error) throw error;
  console.log('Db connect Successfully');
});
module.exports = pool;