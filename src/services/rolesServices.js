import { pool } from "../db.js";

export const getRoles = async () => {
  const result = await pool.query("SELECT * FROM roles ORDER BY rol_id");

  return result.rows;
};

export const getRolById = async (rol_id) => {
  const result = await pool.query("SELECT * FROM roles WHERE rol_id = $1", [
    rol_id,
  ]);

  return result.rows[0];
};

export const insertarRol = async (rol) => {
  const result = await pool.query(
    "INSERT INTO roles (rol) VALUES ($1) RETURNING *",
    [rol]
  );

  return result.rows[0];
};

export const actualizarRol = async (rol_id, rol) => {
  const result = await pool.query(
    "UPDATE roles SET rol = $1 WHERE rol_id = $2 RETURNING *",
    [rol, rol_id]
  );

  return result.rows[0];
};

export const eliminarRol = async (rol_id) => {
  const result = await pool.query(
    "DELETE FROM roles WHERE rol_id = $1 RETURNING *",
    [rol_id]
  );

  return result.rows[0];
};
