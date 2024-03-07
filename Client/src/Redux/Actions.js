import axios from "axios";

export const GET_SURVEYS = "GET_SURVEYS";
export const GET_DETAIL = "GET_DETAIL";
export const POST_RESPONSE = "POST_RESPONSE";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";

export function getSurveys() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/survey/all"); //traigo SURVEYS
      return dispatch({
        type: "GET_SURVEYS",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/survey/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function postResponse({ name, lastName, dni, whatsapp, surveyId }) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/response/postResponse",
        { name, lastName, dni, whatsapp, surveyId } // envolver input en un objeto con clave 'data'
      );
      return dispatch({
        type: "POST_RESPONSE",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function clearDetail() {
  return {
    type: "CLEAR_DETAIL",
  };
}

export function clearNotifications() {
  return {
    type: "CLEAR_NOTIFICATIONS",
  };
}
