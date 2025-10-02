import * as comentariosServices from "../services/comentarios.Services.js";

export const getObtenerTodosLosComentarios = async (req, res, next) => {
  try {
    const result = await comentariosServices.getAllComentarios();

    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const getComentarioById = async (req, res, next) => {
  try {
    const { id_comentario } = req.params;

    const result = await comentariosServices.getComentarioById(id_comentario);

    if (!result) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }

    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const getComentariosByPublicacionId = async (req, res, next) => {
  try {
    const { publicacion_id } = req.params;

    const result = await comentariosServices.getComentariosByPublicacionId(
      publicacion_id
    );

    if (!result || result.length === 0) {
      return res
        .status(404)
        .json({
          message: "No se encontraron comentarios para esta publicación",
        });
    }

    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const getComentariosByUsuarioId = async (req, res, next) => {
  try {
    const { usuario_id } = req.params;

    const result = await comentariosServices.getComentariosByUsuarioId(
      usuario_id
    );

    if (!result || result.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron comentarios para este usuario" });
    }

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
