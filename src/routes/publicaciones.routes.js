import {Router} from 'express';
import {getPublicaciones, createPublicacion, updatePublicacion, deletePublicacion, getPublicacion} from "../controllers/publicacion.controller.js";

const router = Router();

router.get('/publicacion/api', getPublicaciones);
router.post('/publicacion/api', createPublicacion);
router.put('/publicacion/api/:publicacionid', updatePublicacion);
router.delete('/publicacion/api/:publicacionid', deletePublicacion);
router.get('/publicacion/api/:publicacionid', getPublicacion);

export default router;