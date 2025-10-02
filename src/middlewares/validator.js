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
