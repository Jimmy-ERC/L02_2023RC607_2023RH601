import { pool } from "../db.js";

export const getCalificaciones = async () => {
  const result = await pool.query(
    "SELECT * FROM calificaciones ORDER BY calificacion_id"
  );

  return result.rows;
};

export const getCalificacionById = async (calificacion_id) => {
  const result = await pool.query(
    "SELECT * FROM calificaciones WHERE calificacion_id = $1",
    [calificacion_id]
  );

  return result.rows[0];
};

export const insertarCalificacion = async (
  usuario_id,
  publicacion_id,
  calificacion
) => {
  const result = await pool.query(
    "INSERT INTO calificaciones (usuario_id, publicacion_id, calificacion) VALUES ($1, $2, $3) RETURNING *",
    [usuario_id, publicacion_id, calificacion]
  );

  return result.rows[0];
};

export const actualizarCalificacion = async (
  calificacion_id,
  usuario_id,
  publicacion_id,
  calificacion
) => {
  const result = await pool.query(
    "UPDATE calificaciones SET usuario_id = $1, publicacion_id = $2, calificacion = $3 WHERE calificacion_id = $4 RETURNING *",
    [usuario_id, publicacion_id, calificacion, calificacion_id]
  );

  return result.rows[0];
};

export const eliminarCalificacion = async (calificacion_id) => {
  const result = await pool.query(
    "DELETE FROM calificaciones WHERE calificacion_id = $1 RETURNING *",
    [calificacion_id]
  );

  return result.rows[0];
};
