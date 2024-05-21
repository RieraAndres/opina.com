const { Survey, Response, User } = require("../../db");

async function getSurveyResponses(surveyId) {
  try {
    const survey = await Survey.findByPk(surveyId, {
      include: [
        {
          model: Response,
          include: User,
        },
      ],
    });

    if (!survey) {
      throw new Error("No se encontró la encuesta con el ID proporcionado");
    }

    const responsesWithUsers = survey.Responses.map((response) => ({
      name: response.User.name,
      lastName: response.User.lastName,
      dni: response.User.dni,
      whatsapp: response.User.whatsapp,
    }));

    return {
      title: survey.title,
      users: responsesWithUsers,
    };
  } catch (error) {
    throw error; // No necesitas lanzar un nuevo error aquí
  }
}

module.exports = getSurveyResponses;
