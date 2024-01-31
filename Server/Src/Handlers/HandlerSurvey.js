const postSurvey = require("../Controllers/CrudSurvey/PostSurvey");
const changeSurveyStatus = require("../Controllers/CrudSurvey/changeSurveyStatus");

const handlerPostSurvey = async (req, res) => {
  const { title, description, imgUrl } = req.body;
  try {
    if (!title || !description || !imgUrl) {
      return res.status(400).json({
        error:
          "Revise los campos nuevamente y verifique que todo esté correcto",
      });
    } else {
      const postSurveyResponse = await postSurvey(title, description, imgUrl);

      if (postSurveyResponse.error) {
        return res.status(409).json({ error: postSurveyResponse.error }); // 409 Conflict status code for already existing resource
      }

      return res.status(201).json({ message: "Encuesta creada con éxito" });
    }
  } catch (error) {
    console.error("Ocurrió un error al crear su Encuesta", error);
    return res.status(500).json({ error: "Error de sevidor" });
  }
};

const handlerChangeSurveyStatus = async (req, res) => {
  const { id } = req.body;
  try {
    const survey = await changeSurveyStatus(id);
    return res.status(200).json(survey);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  handlerPostSurvey,
  handlerChangeSurveyStatus,
};
