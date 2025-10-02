import * as publicacionesServices from "../services/publicacionesServices.js";

export const getPublicaciones = async (req, res, next) => {
  try {
    const publicaciones = await publicacionesServices.getPublicaciones();

    res.json(publicaciones);
  } catch (error) {
    next(error);
  }
};

export const getPublicacionById = async (req, res, next) => {
  const { publicacion_id } = req.params;

  try {
    const publicacion = await publicacionesServices.getPublicacionById(
      publicacion_id
    );

    if (!publicacion) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }

    res.json(publicacion);
  } catch (error) {
    next(error);
  }
};

export const getPublicacionesByUsuarioId = async (req, res, next) => {
  const { usuarios_id } = req.params;

  try {
    const publicaciones =
      await publicacionesServices.getPublicacionesByUsuarioId(usuarios_id);

    res.json(publicaciones);
  } catch (error) {
    next(error);
  }
};

export const getTopPublicacionesConMasComentarios = async (req, res, next) => {
  const { numero_top } = req.params;

  try {
    const publicaciones =
      await publicacionesServices.getTopPublicacionesConMasComentarios(
        numero_top
      );

    res.json(publicaciones);
  } catch (error) {
    next(error);
  }
};

export const insertarPublicacion = async (req, res, next) => {
  const { usuario_id, titulo, descripcion } = req.body;

  try {
    const nuevaPublicacion = await publicacionesServices.insertarPublicacion({
      usuario_id,
      titulo,
      descripcion,
    });

    res.status(201).json(nuevaPublicacion);
  } catch (error) {
    next(error);
  }
};

export const actualizarPublicacion = async (req, res, next) => {
  const { publicacion_id } = req.params;
  const { usuario_id, titulo, descripcion } = req.body;

  try {
    const publicacionActualizada =
      await publicacionesServices.actualizarPublicacion(publicacion_id, {
        usuario_id,
        titulo,
        descripcion,
      });

    if (!publicacionActualizada) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }

    res.json(publicacionActualizada);
  } catch (error) {
    next(error);
  }
};

export const eliminarPublicacion = async (req, res, next) => {
  const { publicacion_id } = req.params;

  try {
    const publicacionEliminada =
      await publicacionesServices.eliminarPublicacion(publicacion_id);

    if (!publicacionEliminada) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }

    res.json({ message: "Publicación eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};
