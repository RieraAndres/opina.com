const server = require("./Src/app");
const express = require("express");
const { conn } = require("./Src/db");

const port = process.env.PORT;

conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server escuchando en el puerto ${port}`);
  });
});
