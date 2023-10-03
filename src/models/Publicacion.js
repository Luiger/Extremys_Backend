import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const Publicacion = sequelize.define('publicaciones', {
    publicacionid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fotos: {
        type: DataTypes.STRING
    },
    etiquetas: {
        type: DataTypes.INTEGER
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    estatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    }
}, {
    timestamps: false
})