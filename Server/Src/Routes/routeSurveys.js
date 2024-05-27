const { Router } = require("express");
const routerForSurveys = Router();

const {
  handlerPostSurvey,
  handlerChangeSurveyStatus,
  handlerGetSurveyResponses,
  handlerGetAllSurveys,
  handlerGetSurveyById,
  handlerDeleteSurvey,
} = require("../Handlers/HandlerSurvey");

routerForSurveys.post("/", handlerPostSurvey);
routerForSurveys.put("/status", handlerChangeSurveyStatus);
routerForSurveys.get("/responses/:surveyId", handlerGetSurveyResponses);
routerForSurveys.get("/all", handlerGetAllSurveys);
routerForSurveys.get("/:surveyId", handlerGetSurveyById);
routerForSurveys.delete("/delete/:surveyId", handlerDeleteSurvey);

module.exports = routerForSurveys;
