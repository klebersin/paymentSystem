import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/database';
import Order from './Order';

class Customer extends Model { }
Customer.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    code: DataTypes.INTEGER,
    grade: DataTypes.STRING,
    state: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
    modelName: 'customer'
});

Customer.hasMany(Order, { foreignKey: 'customer_id', sourceKey: 'id'});
Order.belongsTo(Customer, { foreignKey: 'customer_id', sourceKey: 'id'});

export default Customer;