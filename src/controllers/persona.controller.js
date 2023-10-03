import { Persona } from "../models/Persona.js";
import { Publicacion } from "../models/Publicacion.js";

export const getPersonas = async (req, res) => {
    try {
        const personas = await Persona.findAll()   
        res.json(personas)
    } catch (error) {
        return res.status(500).json({message: error.message});        
    }    
};

export const getPersona = async (req, res) => {
    try {
        const {personaid} = req.params
    const persona = await Persona.findOne({
        where: {
            personaid,
        },
    });

    if (!persona) 
        return res.status(404).json({message: 'Persona no existe'});

    res.json(persona);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createPersona = async (req, res) => {
    const {  nombre, apellido, contrasena, telefono, email, direccion, gustos, foto_perfil} = req.body;
    
try {
    const newPersona = await Persona.create({  
        nombre,
        apellido,
        contrasena,
        telefono,
        email,
        direccion,
        gustos,
        foto_perfil
    });

    res.json(newPersona)
} catch (error) {
    return res.status(500).json({message: error.message});  
}
};

export const updatePersona = async (req, res) => {
    try {
        const { personaid } = req.params;
    const { nombre, apellido, contrasena, telefono, email, direccion, gustos, foto_perfil} = req.body;
    
    const persona = await Persona.findByPk(personaid)
    persona.nombre = nombre
    persona.apellido = apellido
    persona.contrasena = contrasena
    persona.telefono = telefono
    persona.email = email
    persona.direccion = direccion
    persona.gustos = gustos
    persona.foto_perfil = foto_perfil
    await persona.save();

    res.json(persona);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deletePersona = async (req, res) => {
    try {
        const { personaid } = req.params;
    await Persona.destroy({
        where: {
            personaid,
        },
    });
    res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
};

export const getPersonaPublicaciones = async (req, res) => {
    const {personaid} = req.params;
    const publicaciones = await Publicacion.findAll({
        where: {personaid: personaid}
    });
    res.json(publicaciones);
};
