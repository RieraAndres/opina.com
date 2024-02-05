const { Survey } = require("../../db");

async function getAllSurveys() {
  try {
    const allSurveys = await Survey.findAll();

    if (!allSurveys) {
      throw new Error("No se encontraron las encuestas o no hay encuestas");
    }

    return allSurveys;
  } catch (error) {
    throw error;
  }
}

module.exports = getAllSurveys;
