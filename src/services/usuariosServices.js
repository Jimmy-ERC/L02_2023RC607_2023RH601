import { pool } from "../db.js";

export const getAllUsuarios = async (req, res) => {
  const result = await pool.query("SELECT * FROM usuarios");

  return result.rows;
};

export const postCrearUsuario = async (
  rol_id,
  nombre_usuario,
  clave,
  nombre,
  apellido
) => {
  const query = `INSERT INTO usuarios (rol_id, nombre_usuario, clave, nombre, apellido) VALUES ($1, $2, $3, $4, $5) RETURNING *;`;

  const result = await pool.query(query, [
    rol_id,
    nombre_usuario,
    clave,
    nombre,
    apellido,
  ]);
  return result.rows[0];
};

export const putActualizarUsuario = async (usuario) => {
  const query = `UPDATE usuarios
                    SET rol_id=$1,
                        nombre_usuario=$2,
                        clave=$3,
                        nombre=$4,
                        apellido=$5
                    WHERE usuarios_id=$6
                    RETURNING *;`;

  const result = await pool.query(query, [
    usuario.rol_id,
    usuario.nombre_usuario,
    usuario.clave,
    usuario.nombre,
    usuario.apellido,
    usuario.id_usuarios,
  ]);

  if (result.rowCount === 0)
    return result.status(404).json({ message: "Usuario no encontrado" });

  return result.rows[0];
};

export const deleteEliminarUsuario = async (id_usuario) => {
  const usuarioAEliminar = await pool.query(
    `SELECT * FROM usuarios WHERE usuarios_id=$1`,
    [id_usuario]
  );

  if (usuarioAEliminar.rowCount === 0) throw new Error("Usuario no encontrado");

  const result = await pool.query(`DELETE FROM usuarios WHERE usuarios_id=$1`, [
    id_usuario,
  ]);
  return {
    message: "Usuario eliminado correctamente",
    usuario: usuarioAEliminar.rows[0],
  };
};

export const getUsuariosPorNombre = async (nombre) => {
  const result = await pool.query(
    `SELECT * FROM usuarios WHERE nombre ILIKE $1`,
    [nombre]
  );

  return result.rows;
};

export const getUsuariosPorApellido = async (apellido) => {
  const result = await pool.query(
    `SELECT * FROM usuarios WHERE apellido ILIKE $1`,
    [apellido]
  );

  return result.rows;
};

export const getUsuariosPorRol = async (rol_id) => {
  const result = await pool.query(`SELECT * FROM usuarios WHERE rol_id = $1`, [
    rol_id,
  ]);

  return result.rows;
};
