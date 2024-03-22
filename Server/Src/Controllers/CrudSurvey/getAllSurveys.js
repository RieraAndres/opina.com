const { Survey, Response } = require("../../db");
const { Sequelize } = require("sequelize");

async function getAllSurveys() {
  try {
    const allSurveys = await Survey.findAll({
      include: [
        {
          model: Response,
          attributes: [],
        },
      ],
      attributes: {
        include: [
          [
            Sequelize.literal(
              '(SELECT COUNT(*) FROM "Responses" WHERE "Responses"."SurveyId" = "Survey"."id")'
            ),
            "responseCount",
          ],
        ],
      },
    });

    if (!allSurveys) {
      throw new Error("No se encontraron las encuestas o no hay encuestas");
    }

    return allSurveys.map((survey) => ({
      id: survey.id,
      title: survey.title,
      description: survey.description,
      imgUrl: survey.imgUrl,
      status: survey.status,
      responseCount: survey.dataValues.responseCount, // Agregar el número de respuestas asociadas
    }));
  } catch (error) {
    throw error;
  }
}

module.exports = getAllSurveys;
