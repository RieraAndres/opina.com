const { Router } = require("express");
const routerForSurveys = Router();

const {
  handlerPostSurvey,
  handlerChangeSurveyStatus,
} = require("../Handlers/HandlerSurvey");

routerForSurveys.post("/", handlerPostSurvey);
routerForSurveys.put("/status", handlerChangeSurveyStatus);

module.exports = routerForSurveys;
