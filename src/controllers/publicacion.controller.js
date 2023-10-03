import { Publicacion } from "../models/Publicacion.js";

export const getPublicaciones = async (req, res) => {
    try {
        const publicacion = await Publicacion.findAll()
        res.json(publicacion)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createPublicacion = async (req, res) => {
    try {
        const {personaid, descripcion, etiquetas} = req.body;

        const newPublicacion = await Publicacion.create({
            personaid,
            descripcion,
            etiquetas
        });

        res.json(newPublicacion)      
    } catch (error) {
        return res.status(500).json({message: error.message});
    }    
};

export const getPublicacion = async (req, res) => {
    const {publicacionid} = req.params
    try {
        const publicacion = await Publicacion.findOne({
            where: {publicacionid}
        })
        res.json(publicacion)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const updatePublicacion = async (req, res) => {
    try {
        const {publicacionid} = req.params;
    const publicacion = await Publicacion.findOne({
        where: {publicacionid}
    });
    publicacion.set(req.body);
    await publicacion.save();
    return res.json(publicacion);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deletePublicacion = async (req, res) => {
    const {publicacionid} = req.params;
    try {
        const result = await Publicacion.destroy({
            where: {publicacionid}
        });    
        console.log(result);
        return res.sendStatus(204);   
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};