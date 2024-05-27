export function validate(input) {
  let error = {};

  // Validaciones para el formulario de registro
  if (!input.title) {
    error.title = "*Se requiere un título";
  }

  if (!input.description) {
    error.description = "*Se requiere una descripción";
  }
  return error;
}
