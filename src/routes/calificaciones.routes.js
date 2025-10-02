import { Router } from "express";
import * as calificacionesController from "../controllers/calificacionesController.js";
import {
  runValidations,
  validarIDCalificacion,
  insertarCalificacion,
  actualizarCalificacion,
} from "../middlewares/validator.js";

const router = Router();

router.get("/", calificacionesController.getCalificaciones);
router.post(
  "/",
  runValidations(insertarCalificacion),
  calificacionesController.insertarCalificacion
);
router.put(
  "/:calificacion_id",
  runValidations(actualizarCalificacion),
  calificacionesController.actualizarCalificacion
);
router.delete(
  "/:calificacion_id",
  runValidations(validarIDCalificacion),
  calificacionesController.eliminarCalificacion
);
router.get(
  "/:calificacion_id",
  runValidations(validarIDCalificacion),
  calificacionesController.getCalificacionById
);

export default router;
