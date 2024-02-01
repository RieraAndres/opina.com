const { User } = require("../../db.js");

const registerUser = async (name, lastName, whatsapp, dni) => {
  try {
    const [user, created] = await User.findOrCreate({
      where: { dni },
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
