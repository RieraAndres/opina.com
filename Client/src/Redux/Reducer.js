import { GET_SURVEYS } from "./Actions";

let initialState = {
  allSurveys: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SURVEYS:
      return {
        ...state,
        allSurveys: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
