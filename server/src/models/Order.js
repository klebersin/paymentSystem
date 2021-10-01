import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/database';
import Shipment from './Shipment';

class Order extends Model { }
Order.init({
    customer_id: DataTypes.INTEGER,
    code: DataTypes.INTEGER,
    method: DataTypes.STRING,
    total_price: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    state: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
    modelName: 'order'
});

Order.hasMany(Shipment, { foreignKey: 'order_id', sourceKey:'id' });
Shipment.belongsTo(Order, { foreignKey: 'order_id', sourceKey:'id' });

export default Order;