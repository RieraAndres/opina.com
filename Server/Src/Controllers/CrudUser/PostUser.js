const { User } = require("../../db.js");

const registerUser = async (name, lastName, dni, whatsapp) => {
  try {
    const [user, created] = await User.findOrCreate({
      where: { dni },
      defaults: {
        name,
        lastName,
        dni,
        whatsapp,
      },
    });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = registerUser;
