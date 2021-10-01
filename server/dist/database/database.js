"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sequelize = new _sequelize.default('database_payment_system', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 6,
    min: 0,
    require: 30000,
    idle: 1000
  }
});
exports.sequelize = sequelize;