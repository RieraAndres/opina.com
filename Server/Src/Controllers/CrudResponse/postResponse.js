const { User, Response } = require("../../db.js");
const registerUser = require("../CrudUser/PostUser.js");

const createSurveyResponse = async (
  name,
  lastName,
  dni,
  whatsapp,
  surveyId
) => {
  try {
    // Buscar el usuario en la base de datos
    let user = await User.findOne({
      where: { dni },
    });

    // Si el usuario no existe, crearlo
    if (!user) {
      user = await registerUser(name, lastName, dni, whatsapp);
    }

    // Crear la respuesta asociada a la encuesta y al usuario
    const response = await Response.create({
      SurveyId: surveyId,
      UserId: user.id,
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = createSurveyResponse;
