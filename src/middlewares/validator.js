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
    .withMessage("El apellido no debe estar vacío")
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
    .withMessage("El apellido no debe estar vacío")
]

export const validarIDUsuario = [
  param("usuarios_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .notEmpty()
    .withMessage("El ID del usuario no debe estar vacío"),
];