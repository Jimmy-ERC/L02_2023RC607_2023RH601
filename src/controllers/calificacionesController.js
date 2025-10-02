import * as calificacionesServices from "../services/calificacionesServices.js";

export const getCalificaciones = async (req, res, next) => {
  try {
    const calificaciones = await calificacionesServices.getCalificaciones();

    res.json(calificaciones);
  } catch (error) {
    next(error);
  }
};

export const getCalificacionById = async (req, res, next) => {
  const { calificacion_id } = req.params;

  try {
    const calificacion = await calificacionesServices.getCalificacionById(
      calificacion_id
    );

    if (!calificacion) {
      return res.status(404).json({ message: "Calificación no encontrada" });
    }

    res.json(calificacion);
  } catch (error) {
    next(error);
  }
};

export const insertarCalificacion = async (req, res, next) => {
  const { usuario_id, publicacion_id, calificacion } = req.body;

  try {
    const nuevaCalificacion = await calificacionesServices.insertarCalificacion(
      usuario_id,
      publicacion_id,
      calificacion
    );

    res.status(201).json(nuevaCalificacion);
  } catch (error) {
    next(error);
  }
};

export const actualizarCalificacion = async (req, res, next) => {
  const { calificacion_id } = req.params;
  const { usuario_id, publicacion_id, calificacion } = req.body;

  try {
    const calificacionActualizada =
      await calificacionesServices.actualizarCalificacion(
        calificacion_id,
        usuario_id,
        publicacion_id,
        calificacion
      );

    if (!calificacionActualizada) {
      return res.status(404).json({ message: "Calificación no encontrada" });
    }

    res.json(calificacionActualizada);
  } catch (error) {
    next(error);
  }
};

export const eliminarCalificacion = async (req, res, next) => {
  const { calificacion_id } = req.params;

  try {
    const calificacionEliminada =
      await calificacionesServices.eliminarCalificacion(calificacion_id);

    if (!calificacionEliminada) {
      return res.status(404).json({ message: "Calificación no encontrada" });
    }

    res.json(calificacionEliminada);
  } catch (error) {
    next(error);
  }
};
