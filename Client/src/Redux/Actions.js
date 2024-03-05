import axios from "axios";

export const GET_SURVEYS = "GET_SURVEYS";

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
