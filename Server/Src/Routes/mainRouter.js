const { Router } = require("express");
const routes = Router();

//Imports rutas segun el modelo
const routerSurveys = require("./routeSurveys.js");
const routerUsers = require("./routeUsers.js");

routes.use("/survey", routerSurveys);
routes.use("/user", routerUsers);

module.exports = routes;
