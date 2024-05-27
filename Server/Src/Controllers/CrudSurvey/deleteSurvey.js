const { Survey } = require("../../db");

async function deleteSurvey({ surveyId }) {
  try {
    // Buscar la encuesta por su ID
    const surveyToDelete = await Survey.findByPk(surveyId);

    // Verificar si la encuesta existe
    if (!surveyToDelete) {
      throw new Error("No se encontró la encuesta con el ID proporcionado");
    }

    // Eliminar la encuesta
    await surveyToDelete.destroy();

    return { message: "Encuesta eliminada exitosamente" };
  } catch (error) {
    throw error;
  }
}

module.exports = deleteSurvey;
