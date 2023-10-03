import express from "express";
import personaRoutes from './routes/persona.routes.js';
import publicacionesRoutes from './routes/publicaciones.routes.js';
import authRoutes from  './routes/auth.routes.js';

const app = express();

//middlewares
app.use(express.json());

app.use(personaRoutes);
app.use(publicacionesRoutes);
app.use(authRoutes);

export default app;