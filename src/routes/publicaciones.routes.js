import {Router} from 'express';
import {getPublicaciones, createPublicacion, updatePublicacion, deletePublicacion, getPublicacion} from "../controllers/publicacion.controller.js";

const router = Router();

router.get('/publicacion', getPublicaciones);
router.post('/publicacion', createPublicacion);
router.put('/publicacion/:publicacionid', updatePublicacion);
router.delete('/publicacion/:publicacionid', deletePublicacion);
router.get('/publicacion/:publicacionid', getPublicacion);

export default router;