import { pool } from "../db.js";

export const getPublicaciones = async () => {
  const result = await pool.query(
    "SELECT * FROM publicacion ORDER BY publicacion_id"
  );

  return result.rows;
};

export const getPublicacionById = async (publicacion_id) => {
  const result = await pool.query(
    "SELECT * FROM publicacion WHERE publicacion_id = $1",
    [publicacion_id]
  );

  return result.rows[0];
};

export const getPublicacionesByUsuarioId = async (usuario_id) => {
  const result = await pool.query(
    "SELECT * FROM publicacion WHERE usuario_id = $1 ORDER BY publicacion_id",
    [usuario_id]
  );

  return result.rows;
};

export const getTopPublicacionesConMasComentarios = async (numero_top) => {
  const result = await pool.query(
    `SELECT p.*, COUNT(c.comentario_id) AS total_comentarios
    FROM publicacion p
    LEFT JOIN comentarios c ON p.publicacion_id = c.publicacion_id
    GROUP BY p.publicacion_id
    ORDER BY total_comentarios DESC
    LIMIT $1`,
    [numero_top]
  );

  return result.rows;
};

export const insertarPublicacion = async (publicacion) => {
  const result = await pool.query(
    "INSERT INTO publicacion (usuario_id, titulo, descripcion) VALUES ($1, $2, $3) RETURNING *",
    [publicacion.usuario_id, publicacion.titulo, publicacion.descripcion]
  );

  return result.rows[0];
};

export const actualizarPublicacion = async (publicacion_id, publicacion) => {
  const result = await pool.query(
    "UPDATE publicacion SET usuario_id = $1, titulo = $2, descripcion = $3 WHERE publicacion_id = $4 RETURNING *",
    [
      publicacion.usuario_id,
      publicacion.titulo,
      publicacion.descripcion,
      publicacion_id,
    ]
  );

  return result.rows[0];
};

export const eliminarPublicacion = async (publicacion_id) => {
  const result = await pool.query(
    "DELETE FROM publicacion WHERE publicacion_id = $1 RETURNING *",
    [publicacion_id]
  );

  return result.rows[0];
};
