const nodemailer = require("nodemailer");
const { EmailCode } = require("../../../db");
const { EMAIL_PASSWORD, ADMIN_EMAIL, ADMIN_USER_EMAIL } = process.env;

const SendAndSaveCode = async (generatedCode) => {
  try {
    // Borramos los códigos anteriores de la base de datos
    await EmailCode.destroy({
      where: {},
      truncate: true, // Esto borra todos los registros de la tabla
    });

    // Creamos un nuevo registro en la base de datos con el código generado
    await EmailCode.create({ code: generatedCode });

    // Configuramos el transporter para enviar el correo
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: ADMIN_EMAIL,
        pass: EMAIL_PASSWORD,
      },
    });

    // Configuramos las opciones del correo con el código generado
    const mailOptions = {
      from: ADMIN_EMAIL,
      to: ADMIN_USER_EMAIL,
      subject: "Tu código para ingresar a Opina.com",
      text: `Hola! Tu código para ingresar a Opina.com es: ${generatedCode}`,
    };

    // Enviamos el correo
    await transporter.sendMail(mailOptions);

    // Retornamos un mensaje indicando que el correo se envió correctamente
    return "Correo enviado con éxito";
  } catch (error) {
    // Si hay algún error, devolvemos un mensaje de error
    throw new Error("Error al enviar el correo: " + error.message);
  }
};

module.exports = SendAndSaveCode;
