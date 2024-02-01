const postUser = require("../Controllers/CrudUser/PostUser.js");

const handlerRegisterUser = async (req, res) => {
  const { name, lastName, dni, whatsapp } = req.body;
  try {
    if (!name || !lastName || !dni || !whatsapp) {
      return res.status(400).json({
        error:
          "Revise los campos nuevamente y verifique que todo esté correcto",
      });
    } else {
      const postUserR = await postUser(name, lastName, dni, whatsapp);

      if (postUserR.error) {
        return res.status(409).json({ error: postUser.error }); // 409 Conflict status code for already existing resource
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
