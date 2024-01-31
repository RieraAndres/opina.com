const { Survey } = require("../../db.js");

const changeSurveyStatus = async (id) => {
  try {
    const survey = await Survey.findByPk(id);

    if (!survey) {
      throw new Error("La encuesta no fue encontrada");
    }

    survey.status = !survey.status;

    await survey.save();

    return survey;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = changeSurveyStatus;
