import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const Role = sequelize.define('roles', {
    name: {
        type: DataTypes.STRING
    },
    versionKey: false
});