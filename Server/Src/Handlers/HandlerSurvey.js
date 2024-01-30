const postSurvey = require("../Controllers/CrudSurvey/PostSurvey");

const handlerPostSurvey = async (req, res) => {
  const { id, title } = req.body;
  try {
    if (!id || !title) {
      return res.status(400).json({
        error:
          "Revise los campos nuevamente y verifique que todo esté correcto",
      });
    } else {
      const postSurveyResponse = await postSurvey(id, title);

      if (postSurveyResponse.error) {
        return res.status(409).json({ error: postSurveyResponse.error }); // 409 Conflict status code for already existing resource
      }

      return res.status(201).json({ message: "Usuario creado con éxito" });
    }
  } catch (error) {
    console.error("Ocurrió un error al crear su usuario", error);
    return res.status(500).json({ error: "Error de sevidor" });
  }
};

module.exports = {
  handlerPostSurvey,
};
