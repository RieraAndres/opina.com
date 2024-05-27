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
      order: [["createdAt", "DESC"]], // Ordenar por fecha de creación en orden descendente
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
      createdAt: survey.createdAt, // Incluir la fecha de creación
      responseCount: survey.dataValues.responseCount,
    }));
  } catch (error) {
    throw error;
  }
}

module.exports = getAllSurveys;
