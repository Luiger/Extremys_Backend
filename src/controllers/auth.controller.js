import { Persona } from "../models/Persona.js";
import jwt from "jsonwebtoken";
import config from "../config.js";


const generateUniquePersonaid = () => {
  // Lógica para generar un personaid único, por ejemplo, un timestamp actual
  return Date.now();
};

export const signUp = async (req, res) => {
  try {
    const { nombre, apellido, contrasena, telefono, email, direccion, gustos, foto_perfil } = req.body;

    const personaid = generateUniquePersonaid();

    // Encriptar el personaid
    const encryptedPersonaid = await Persona.encryptPersonaid(personaid);

    // Encriptar la contraseña
    const contrasenaEncriptada = await Persona.encryptPassword(contrasena);

    const newPersona = await Persona.create({
      personaid: encryptedPersonaid,  
      nombre,
      apellido,
      contrasena: contrasenaEncriptada,
      telefono,
      email,
      direccion,
      gustos,
      foto_perfil,
    });

    const savedPersona = await newPersona.save();
    console.log(savedPersona);

    const token = jwt.sign({ id: newPersona.comparePersonaid }, config.SECRET, {
      expiresIn: 86400, // 24 horas
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

  

export const signIn = async (req, res) => {
    const { email, contrasena } = req.body;
  
    try {
      const personaFound = await Persona.findOne({
        where: {
          email: email,
        },
      });
  
      if (!personaFound) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      const matchPassword = await Persona.comparePassword(contrasena, personaFound.contrasena);
  
      if (!matchPassword) {
        return res.status(401).json({ token: null, message: 'Invalid contraseña' });
      }
  
      const token = jwt.sign({id: personaFound.personaid}, config.SECRET, {
        expiresIn: 86400, // 24 horas
      });

      res.json({token});
    } catch (error) {
      console.error('Error during sign-in:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  