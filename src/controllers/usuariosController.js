import * as usuariosServices from "../services/usuariosServices.js";

export const getObtenerTodosLosUsuarios = async (req, res, next) => {
  try {
    const result = await usuariosServices.getAllUsuarios();

    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const getUsuarioById = async (req, res, next) => {
  try {
    const { usuarios_id } = req.params;

    const result = await usuariosServices.getUsuarioById(usuarios_id);

    if (!result) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(result);
  } catch (err) {
    return next(err);
  }
};


export const postCrearUsuario = async (req, res, next) => {
  try {
    const { rol_id, nombre_usuario, clave, nombre, apellido } = req.body;

    const result = await usuariosServices.postCrearUsuario(
      rol_id,
      nombre_usuario,
      clave,
      nombre,
      apellido
    );

    res.status(201).json(result);
  } catch (err) {
    return next(err);
  }
};

export const putActualizarUsuario = async (req, res, next) => {
  try {
    const { rol_id, email, nombre_usuario, clave, nombre, apellido } = req.body;

    const { id_usuarios } = req.params;

    const usuario = {
      rol_id,
      email,
      nombre_usuario,
      clave,
      nombre,
      apellido,
      id_usuarios,
    };

    const result = await usuariosServices.putActualizarUsuario(usuario);
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const deleteEliminarUsuario = async (req, res, next) => {
  try {
    const { id_usuarios } = req.params;

    const result = await usuariosServices.deleteEliminarUsuario(id_usuarios);

    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const getUsuariosPorNombre = async (req, res, next) => {
  try {
    const { nombre } = req.params;
    const result = await usuariosServices.getUsuariosPorNombre(nombre);
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const getUsuariosPorApellido = async (req, res, next) => {
  try {
    const { apellido } = req.params;
    const result = await usuariosServices.getUsuariosPorApellido(apellido);
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const getUsuariosPorRol = async (req, res, next) => {
  try {
    const { rol_id } = req.params;
    const result = await usuariosServices.getUsuariosPorRol(rol_id);
    res.json(result);
  } catch (err) {
    return next(err);
  }
};
