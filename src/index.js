import express from "express";
import dotenv from "dotenv";
import rolesRoutes from "./routes/roles.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import publicacionesRoutes from "./routes/publicaciones.routes.js";
import comentariosRoutes from "./routes/comentarios.routes.js";
import calificacionesRoutes from "./routes/calificaciones.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

app.use("/api/roles", rolesRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/publicaciones", publicacionesRoutes);
app.use("/api/comentarios", comentariosRoutes);
app.use("/api/calificaciones", calificacionesRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto: ${PORT}`);
});
