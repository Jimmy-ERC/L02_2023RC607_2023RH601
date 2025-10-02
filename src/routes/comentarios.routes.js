import { Router } from "express";
import * as comentariosController from "../controllers/comentariosController.js";
import {
  runValidations,
  validarIDComentario,
  validarIDPublicacion,
  validarIDUsuario,
  insertarComentarioValidator,
} from "../middlewares/validator.js";

const router = Router();

router.get(
  "/",
  validarIDComentario,
  comentariosController.getObtenerTodosLosComentarios
);
router.get(
  "/:id_comentario",
  validarIDComentario,
  comentariosController.getComentarioById
);
router.get(
  "/publicacion/:publicacion_id",
  runValidations(validarIDPublicacion),
  comentariosController.getComentariosByPublicacionId
);
router.get(
  "/usuario/:usuarios_id",
  runValidations(validarIDUsuario),
  comentariosController.getComentariosByUsuarioId
);
router.post(
  "/",
  runValidations(insertarComentarioValidator),
  comentariosController.postCrearComentario
);
router.put(
  "/:id_comentario",
  validarIDComentario,
  comentariosController.putActualizarComentario
);
router.delete(
  "/:id_comentario",
  validarIDComentario,
  comentariosController.deleteEliminarComentario
);

export default router;
