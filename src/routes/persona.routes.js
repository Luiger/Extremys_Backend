import {Router} from 'express';
import {getPersonas, createPersona, updatePersona, deletePersona, getPersona, getPersonaPublicaciones} from "../controllers/persona.controller.js";

const router = Router();

router.get('/persona/api', getPersonas);
router.post('/persona/api', createPersona);
router.put('/persona/api/:personaid', updatePersona);
router.delete('/persona/api/:personaid', deletePersona);

router.get('/persona/api/:personaid', getPersona);

router.get('/persona/api/:personaid/publicacion', getPersonaPublicaciones);

export default router;