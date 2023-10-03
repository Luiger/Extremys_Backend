import Sequelize from 'sequelize';

export const sequelize = new Sequelize("extremysDB", "postgres", "3078",{
    host: "localhost",
    dialect: "postgres",
});