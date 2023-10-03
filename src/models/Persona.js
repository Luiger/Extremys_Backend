import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {Publicacion} from './Publicacion.js';
import bcrypt from "bcryptjs";

 export const Persona = sequelize.define('personas', {    
    personaid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    gustos: {
        type: DataTypes.STRING
    },
    foto_perfil: {
        type: DataTypes.STRING        
    },
    estatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    }  
}, {
    timestamps: false
});

Persona.hasMany(Publicacion, {
    foreignKey: 'personaid',
    sourceKey: 'personaid'
});

Publicacion.belongsTo(Persona, {
    foreignKey: 'personaid',
    targetId: 'personaid'
});

Persona.encryptPassword = async (contrasena) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(contrasena, salt);
};

Persona.comparePassword = async (contrasena, receivedPassword) => {
    return await bcrypt.compare(contrasena, receivedPassword);
};


Persona.encryptPersonaid = async (personaid) => {
    const personaidString = personaid.toString();
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(personaidString, salt);
  };
  
  Persona.comparePersonaid = async (personaid, encryptedPersonaid) => {
    return await bcrypt.compare(personaid.toString(), encryptedPersonaid);
  };
  