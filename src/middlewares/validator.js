import { param, body, validationResult } from "express-validator";

export const runValidations = (validations) => {
  return async (req, res, next) => {
    for (const validation of validations) {
      await validation.run(req);
    }

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({ status: "Error", errors: errors.array() });
  };
};

//Validaciones para roles
export const validarIDRol = [
  param("id_rol")
    .isInt({ min: 1 })
    .withMessage("El ID del rol debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del rol no debe estar vacío"),
];

export const insertarRol = [
  body("rol")
    .isString()
    .withMessage("El nombre del rol debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El nombre del rol no debe estar vacío"),
];

export const actualizarRol = [
  param("id_rol")
    .isInt({ min: 1 })
    .withMessage("El ID del rol debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del rol no debe estar vacío"),
  body("rol")
    .isString()
    .withMessage("El nombre del rol debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El nombre del rol no debe estar vacío"),
];

//Validaciones para usuarios
export const validarIDUsuario = [
  param("usuarios_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del usuario no debe estar vacío"),
];

export const insertarUsuarioValidator = [
  body("rol_id")
    .isInt({ min: 1 })
    .withMessage("El ID del rol debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del rol no debe estar vacío"),
  body("nombre_usuario")
    .isString()
    .withMessage("El nombre del usuario debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El nombre del usuario no debe estar vacío"),
  body("clave")
    .isString()
    .withMessage("La clave debe ser una cadena de texto")
    .notEmpty()
    .withMessage("La clave no debe estar vacía")
    .isLength({ min: 8 })
    .withMessage("La clave debe tener al menos 8 caracteres"),
  body("nombre")
    .isString()
    .withMessage("El nombre debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El nombre no debe estar vacío"),
  body("apellido")
    .isString()
    .withMessage("El apellido debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El apellido no debe estar vacío"),
];

export const actualizarUsuarioValidator = [
  param("usuarios_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del usuario no debe estar vacío"),
  body("nombre_usuario")
    .isString()
    .withMessage("El nombre del usuario debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El nombre del usuario no debe estar vacío"),
  body("clave")
    .isString()
    .withMessage("La clave debe ser una cadena de texto")
    .notEmpty()
    .withMessage("La clave no debe estar vacía")
    .isLength({ min: 8 })
    .withMessage("La clave debe tener al menos 8 caracteres"),
  body("nombre")
    .isString()
    .withMessage("El nombre debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El nombre no debe estar vacío"),
  body("apellido")
    .isString()
    .withMessage("El apellido debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El apellido no debe estar vacío"),
];

//Validaciones para comentarios
export const validarIDComentario = [
  param("id_comentario")
    .isInt({ min: 1 })
    .withMessage("El ID del comentario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del comentario no debe estar vacío"),
];

export const insertarComentarioValidator = [
  body("publicacion_id")
    .isInt({ min: 1 })
    .withMessage("El ID de la publicación debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID de la publicación no debe estar vacío"),
  body("comentario")
    .isString()
    .withMessage("El comentario debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El comentario no debe estar vacío"),
  body("usuario_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del usuario no debe estar vacío"),
];
export const actualizarComentarioValidator = [
  param("id_comentario")
    .isInt({ min: 1 })
    .withMessage("El ID del comentario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del comentario no debe estar vacío"),
  body("publicacion_id")
    .isInt({ min: 1 })
    .withMessage("El ID de la publicación debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID de la publicación no debe estar vacío"),
  body("comentario")
    .isString()
    .withMessage("El comentario debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El comentario no debe estar vacío"),
  body("usuario_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del usuario no debe estar vacío"),
];



//Validaciones para publicaciones
export const validarIDPublicacion = [
  param("publicacion_id")
    .isInt({ min: 1 })
    .withMessage("El ID de la publicación debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID de la publicación no debe estar vacío"),
];

export const insertarPublicacion = [
  body("usuario_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del usuario no debe estar vacío"),
  body("titulo")
    .isString()
    .withMessage("El título debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El título no debe estar vacío"),
  body("descripcion")
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .notEmpty()
    .withMessage("La descripción no debe estar vacía"),
];

export const actualizarPublicacion = [
  param("publicacion_id")
    .isInt({ min: 1 })
    .withMessage("El ID de la publicación debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID de la publicación no debe estar vacío"),
  body("usuario_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del usuario no debe estar vacío"),
  body("titulo")
    .isString()
    .withMessage("El título debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El título no debe estar vacío"),
  body("descripcion")
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .notEmpty()
    .withMessage("La descripción no debe estar vacía"),
];

export const validarNumeroTop = [
  param("numero_top")
    .isInt({ min: 1 })
    .withMessage("El número debe ser un entero positivo")
    .notEmpty()
    .withMessage("El número no debe estar vacío"),
];

//Validaciones para calificaciones
export const validarIDCalificacion = [
  param("calificacion_id")
    .isInt({ min: 1 })
    .withMessage("El ID de la calificación debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID de la calificación no debe estar vacío"),
];

export const insertarCalificacion = [
  body("usuario_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del usuario no debe estar vacío"),
  body("publicacion_id")
    .isInt({ min: 1 })
    .withMessage("El ID de la publicación debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID de la publicación no debe estar vacío"),
  body("calificacion")
    .isInt({ min: 1, max: 5 })
    .withMessage("La calificación debe ser un número entero entre 1 y 5")
    .notEmpty()
    .withMessage("La calificación no debe estar vacía"),
];

export const actualizarCalificacion = [
  param("calificacion_id")
    .isInt({ min: 1 })
    .withMessage("El ID de la calificación debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID de la calificación no debe estar vacío"),
  body("usuario_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del usuario no debe estar vacío"),
  body("publicacion_id")
    .isInt({ min: 1 })
    .withMessage("El ID de la publicación debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID de la publicación no debe estar vacío"),
  body("calificacion")
    .isInt({ min: 1, max: 5 })
    .withMessage("La calificación debe ser un número entero entre 1 y 5")
    .notEmpty()
    .withMessage("La calificación no debe estar vacía"),
];
