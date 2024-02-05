const { Survey } = require("../../db.js");

const postSurvey = async (title, description, imgUrl) => {
  try {
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
