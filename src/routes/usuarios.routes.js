import { Router } from "express";
import * as usuariosController from "../controllers/usuariosController.js";
import {
  runValidations,
  insertarUsuarioValidator,
  validarIDUsuario,
} from "../middlewares/validator.js";

const router = Router();

router.get(
  "/",
  validarIDUsuario,
  usuariosController.getObtenerTodosLosUsuarios
);
router.post(
  "/",
  runValidations(insertarUsuarioValidator),
  usuariosController.postCrearUsuario
);
router.put(
  "/:id_usuarios",
  validarIDUsuario,
  usuariosController.putActualizarUsuario
);
router.delete(
  "/:id_usuarios",
  validarIDUsuario,
  usuariosController.deleteEliminarUsuario
);
router.get("/buscarpornombre/:nombre", usuariosController.getUsuariosPorNombre);
router.get(
  "/buscarporapellido/:apellido",
  usuariosController.getUsuariosPorApellido
);
router.get("/buscarporrol/:rol_id", usuariosController.getUsuariosPorRol);

export default router;
