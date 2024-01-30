const { Router } = require("express");
const routerForSurveys = Router();

const { handlerPostSurvey } = require("../Handlers/HandlerSurvey");

routerForSurveys.post("/postSurvey", handlerPostSurvey);

module.exports = routerForSurveys;
