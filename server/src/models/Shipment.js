import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

class Shipment extends Model { }
Shipment.init({
    order_id: DataTypes.INTEGER,
    product: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    amount: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
    modelName: 'shipment'
});


export default Shipment;