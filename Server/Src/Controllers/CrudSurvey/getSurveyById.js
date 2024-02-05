const { Survey } = require("../../db");

async function getSurveyById(surveyId) {
  try {
    const survey = await Survey.findByPk(surveyId);

    if (!survey) {
      throw new Error("No se encontró la encuesta con el ID proporcionado");
    }

    return survey;
  } catch (error) {
    console.error("Error al buscar la encuesta:", error.message);
    throw error; // No es necesario relanzar el error aquí
  }
}

module.exports = getSurveyById;
