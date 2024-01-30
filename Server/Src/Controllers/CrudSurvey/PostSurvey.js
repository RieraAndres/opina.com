const { Survey } = require("../../db.js");

const postSurvey = async (id, title) => {
  try {
    // Verificar si el usuario ya existe por su dirección de correo electrónico
    const [survey, created] = await Survey.findOrCreate({
      where: { id },
      defaults: {
        title,
      },
    });

    return survey;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = postSurvey;
