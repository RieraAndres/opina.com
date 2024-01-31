const { Survey } = require("../../db.js");

const postSurvey = async (id, title, description, imgUrl) => {
  try {
    // Verificar si el usuario ya existe por su dirección de correo electrónico
    const [survey, created] = await Survey.findOrCreate({
      where: { title },
      defaults: {
        description,
        imgUrl,
      },
    });
    if (!created) {
      return { error: "Ya existe una encuesta con ese Titulo." };
    }
    return survey;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = postSurvey;
