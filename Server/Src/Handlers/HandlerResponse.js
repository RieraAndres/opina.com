const postResponse = require("../Controllers/CrudResponse/postResponse");

const handlerPostResponse = async (req, res) => {
  const { name, lastName, dni, whatsapp, surveyId, agreed } = req.body;
  try {
    if (!name || !lastName || !dni || !whatsapp || !surveyId || !agreed) {
      return res.status(400).json({
        error:
          "Revise los campos nuevamente y verifique que todo esté correcto",
      });
    } else {
      const postResponseR = await postResponse(
        name,
        lastName,
        dni,
        whatsapp,
        surveyId,
        agreed
      );

      if (postResponseR.error) {
        return res.status(500).json({ error: postResponseR.error });
      }

      return res.status(201).json({ message: "Respuesta guardada con exito" });
    }
  } catch (error) {
    console.error("Ocurrió un error al guardar su respuesta", error);
    return res.status(500).json({ error: "Error de sevidor" });
  }
};

module.exports = {
  handlerPostResponse,
};
