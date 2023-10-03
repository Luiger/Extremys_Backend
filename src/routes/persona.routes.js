import {Router} from 'express';
import {getPersonas, createPersona, updatePersona, deletePersona, getPersona, getPersonaPublicaciones} from "../controllers/persona.controller.js";

const router = Router();

router.get('/persona', getPersonas);
router.post('/persona', createPersona);
router.put('/persona/:personaid', updatePersona);
router.delete('/persona/:personaid', deletePersona);

router.get('/persona/:personaid', getPersona);

router.get('/persona/:personaid/publicacion', getPersonaPublicaciones);

export default router;