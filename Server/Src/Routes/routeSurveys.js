const { Router } = require("express");
const routerForSurveys = Router();

const {
  handlerPostSurvey,
  handlerChangeSurveyStatus,
  handlerGetSurveyResponses,
} = require("../Handlers/HandlerSurvey");

routerForSurveys.post("/", handlerPostSurvey);
routerForSurveys.put("/status", handlerChangeSurveyStatus);
routerForSurveys.get("/responses/:surveyId", handlerGetSurveyResponses);

module.exports = routerForSurveys;
