import { Router } from "express";
import * as publicacionesController from "../controllers/publicacionesController.js";
import {
  runValidations,
  validarIDPublicacion,
  insertarPublicacion,
  actualizarPublicacion,
  validarNumeroTop,
  validarIDUsuario,
} from "../middlewares/validator.js";

const router = Router();

router.get("/", publicacionesController.getPublicaciones);
router.get(
  "/:publicacion_id",
  runValidations(validarIDPublicacion),
  publicacionesController.getPublicacionById
);
router.get(
  "/usuario/:usuarios_id",
  runValidations(validarIDUsuario),
  publicacionesController.getPublicacionesByUsuarioId
);

router.get(
  "/top/:numero_top",
  runValidations(validarNumeroTop),
  publicacionesController.getTopPublicacionesConMasComentarios
);

router.post(
  "/",
  runValidations(insertarPublicacion),
  publicacionesController.insertarPublicacion
);
router.put(
  "/:publicacion_id",
  runValidations(actualizarPublicacion),
  publicacionesController.actualizarPublicacion
);
router.delete(
  "/:publicacion_id",
  runValidations(validarIDPublicacion),
  publicacionesController.eliminarPublicacion
);

export default router;
