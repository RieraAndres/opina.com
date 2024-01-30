const { User } = require("../../db.js");

const registerUser = async (id, name, lastName, whatsapp) => {
  try {
    // Verificar si el usuario ya existe por su dirección de correo electrónico
    const [user, created] = await User.findOrCreate({
      where: { id },
      defaults: {
        name,
        lastName,
        whatsapp,
      },
    });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = registerUser;
