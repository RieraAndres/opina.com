const postUser = require("../Controllers/CrudUser/PostUser.js");
const SendAndSaveCode = require("../Controllers/CrudUser/TwoStepVerification/SendAndSaveCode.js");
const verifyUserCode = require("../Controllers/CrudUser/TwoStepVerification/VerifyEmailCode.js");

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

const generateRandom4DigitNumber = () => {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const handlerSendEmailCode = async (req, res) => {
  const generatedCode = generateRandom4DigitNumber();
  try {
    await SendAndSaveCode(generatedCode); // Pasar el código generado como parámetro
    return res.status(200).send("Correo enviado y código guardado con éxito");
  } catch (error) {
    console.error("Error al verificar el codigo:", error);
    return res.status(500).send("Error al verificar el codigo");
  }
};

const handlerVerifyCode = async (req, res) => {
  const { userCode } = req.body;

  // Verifica si el código ingresado por el usuario está presente y es válido
  if (!userCode) {
    return res.status(400).json({
      error: "Por favor, ingrese un código de verificación válido.",
    });
  }

  try {
    const isValidCode = await verifyUserCode(userCode);

    if (isValidCode) {
      // El código de verificación es válido
      return res.status(200).json({ valid: true });
    } else {
      // El código de verificación es inválido
      return res.status(400).json({ valid: false });
    }
  } catch (error) {
    console.error("Error al verificar el código:", error);
    return res.status(500).json({ error: "Error al verificar el código." });
  }
};

module.exports = {
  handlerRegisterUser,
  handlerSendEmailCode,
  handlerVerifyCode,
};
