const { User } = require("../../db.js");

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll();

    if (!allUsers) {
      throw new Error("No se encontraron las usuarios o no las hay");
    }

    return allUsers;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllUsers;
