import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('database_payment_system', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});