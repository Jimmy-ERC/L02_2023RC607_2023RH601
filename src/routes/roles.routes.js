import { Router } from "express";
import * as rolesController from "../controllers/rolesController.js";
import {
  runValidations,
  validarIDRol,
  insertarRol,
  actualizarRol,
} from "../middlewares/validator.js";

const router = Router();

router.get("/", rolesController.getRoles);
router.get("/:id", runValidations(validarIDRol), rolesController.getRolById);
router.post("/", runValidations(insertarRol), rolesController.insertarRol);
router.put(
  "/:id",
  runValidations(actualizarRol),
  rolesController.actualizarRol
);
router.delete(
  "/:id",
  runValidations(validarIDRol),
  rolesController.eliminarRol
);

export default router;
