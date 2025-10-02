import * as comentariosServices from "../services/comentarios.Services.js";

export const getObtenerTodosLosComentarios = async (req, res, next) => {
  try {
    const result = await comentariosServices.getAllComentarios();

    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const postCrearComentario = async (req, res, next) => {
  try {
    const { publicacion_id, comentario, usuario_id } = req.body;

    const result = await comentariosServices.postCrearComentario(
      publicacion_id,
      comentario,
      usuario_id
    );

    res.status(201).json(result);
  } catch (err) {
    return next(err);
  }
};

export const putActualizarComentario = async (req, res, next) => {
  try {
    const { publicacion_id, comentario, usuario_id } = req.body;

    const { id_comentario } = req.params;

    const result = await comentariosServices.putActualizarComentario({
      id_comentario,
      publicacion_id,
      comentario,
      usuario_id,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const deleteEliminarComentario = async (req, res, next) => {
  try {
    const { id_comentario } = req.params;

    const result = await comentariosServices.deleteEliminarComentario(
      id_comentario
    );

    res.json(result);
  } catch (err) {
    return next(err);
  }
};
