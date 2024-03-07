import { GET_DETAIL, GET_SURVEYS } from "./Actions";

let initialState = {
  allSurveys: [],
  detail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SURVEYS:
      return {
        ...state,
        allSurveys: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
