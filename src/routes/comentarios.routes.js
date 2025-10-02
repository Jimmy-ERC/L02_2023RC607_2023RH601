import { Router } from "express";
import * as comentariosController from "../controllers/comentariosController.js";
import { runValidations, validarIDComentario, insertarComentarioValidator } from "../middlewares/validator.js";

const router = Router();
router.get("/", validarIDComentario, comentariosController.getObtenerTodosLosComentarios);

router.post(
    "/",
    runValidations(insertarComentarioValidator),
    comentariosController.postCrearComentario
);
router.put(
    "/:id_comentario", validarIDComentario,
    comentariosController.putActualizarComentario
);
router.delete("/:id_comentario", validarIDComentario, comentariosController.deleteEliminarComentario);

export default router;