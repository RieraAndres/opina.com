export function validator(input) {
  let errors = {};

  // Validaciones para el formulario de registro
  if (!input.name || input.name.length < 3) {
    errors.name = "Ingresa tu nombre";
  }
  if (!input.lastName) {
    errors.lastName = "Ingresa tu apellido";
  }

  if (!input.dni || input.dni.length < 7) {
    errors.dni = "Ingresa tu DNI";
  }

  if (!input.whatsapp || input.whatsapp.length < 10) {
    errors.whatsapp = "Escribe tu telefono";
  }

  return errors;
}
