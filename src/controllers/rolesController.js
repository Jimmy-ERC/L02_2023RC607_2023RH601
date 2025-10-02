import * as roleServices from "../services/rolesServices.js";

export const getRoles = async (req, res, next) => {
  try {
    const roles = await roleServices.getRoles();

    res.json(roles);
  } catch (error) {
    next(error);
  }
};

export const getRolById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const rol = await roleServices.getRolById(id);

    if (!rol) {
      return res.status(404).json({ error: "Rol no encontrado" });
    }

    res.json(rol);
  } catch (error) {
    next(error);
  }
};

export const insertarRol = async (req, res, next) => {
  const rol = req.body;

  try {
    const nuevoRol = await roleServices.insertarRol(rol);

    res.status(201).json(nuevoRol);
  } catch (error) {
    next(error);
  }
};

export const actualizarRol = async (req, res, next) => {
  const { id } = req.params;
  const rol = req.body;

  try {
    const rolActualizado = await roleServices.actualizarRol(id, rol);

    if (!rolActualizado) {
      return res.status(404).json({ error: "Rol no encontrado" });
    }

    res.json(rolActualizado);
  } catch (error) {
    next(error);
  }
};

export const eliminarRol = async (req, res, next) => {
  const { id } = req.params;

  try {
    const rolEliminado = await roleServices.eliminarRol(id);

    if (!rolEliminado) {
      return res.status(404).json({ error: "Rol no encontrado" });
    }

    res.json(rolEliminado);
  } catch (error) {
    next(error);
  }
};
