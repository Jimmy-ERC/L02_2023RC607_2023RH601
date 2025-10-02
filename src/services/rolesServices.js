/*
Tabla roles
id_rol int8 PRIMARY KEY,
rol TEXT NOT NULL
*/

import { pool } from "../db.js";

export const getRoles = async () => {
  const [rows] = await pool.query("SELECT * FROM roles");

  console.log(rows);
  console.log(rows.rows);
  return rows.rows;
};

export const getRolById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM roles WHERE id = ?", [id]);

  return rows[0];
};

export const insertarRol = async (rol) => {
  const { p_rol } = rol;

  const [result] = await pool.query(
    "INSERT INTO roles (rol) VALUES (?) RETURNING *",
    [p_rol]
  );

  return result.rows[0];
};

export const actualizarRol = async (id, rol) => {
  const { p_rol } = rol;

  const [result] = await pool.query(
    "UPDATE roles SET rol = ? WHERE id_rol = ? RETURNING *",
    [p_rol, id]
  );

  return result.rows[0];
};

export const eliminarRol = async (id) => {
  const [result] = await pool.query(
    "DELETE FROM roles WHERE id_rol = ? RETURNING *",
    [id]
  );

  return result.rows[0];
};
