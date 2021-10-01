"use strict";

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _database = require("./database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = require('morgan');

var usersRouter = require('./routes/users');

var paymentsRouter = require('./routes/payments');

var clientsRouter = require('./routes/clients');

var app = (0, _express.default)();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)());
app.use('/api/users', usersRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/clients', clientsRouter);
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));

  _database.sequelize.authenticate().then(() => {
    console.log('Connect successfull');
  });
});