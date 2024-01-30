const postUser = require("../Controllers/CrudUser/PostUser.js");

const handlerRegisterUser = async (req, res) => {
  const { id, name, lastName, whatsapp } = req.body;
  try {
    if (!id || !name || !lastName || !whatsapp) {
      return res.status(400).json({
        error:
          "Revise los campos nuevamente y verifique que todo esté correcto",
      });
    } else {
      const postUserResponse = await postUser(id, name, lastName);

      if (postUserResponse.error) {
        return res.status(409).json({ error: postUserResponse.error }); // 409 Conflict status code for already existing resource
      }

      return res.status(201).json({ message: "Usuario creado con éxito" });
    }
  } catch (error) {
    console.error("Ocurrió un error al crear su usuario", error);
    return res.status(500).json({ error: "Error de sevidor" });
  }
};

module.exports = {
  handlerRegisterUser,
};
