import {
  ADDFAV,
  DELETEFAV,
  FILTER_GENDER,
  RESET_FILTER,
} from "../actions/actions.js";

var initialState = {
  favorites: [],
  copyFavorites: [],
  characters: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDFAV:
      return {
        ...state,
        favorites:  action.payload,
        copyFavorites: action.payload
      };
    case DELETEFAV:
      return {
        ...state,
        favorites: action.payload
      };

    case FILTER_GENDER:
      return {
        ...state,
        favorites: state.copyFavorites.filter(
          (pj) => pj.gender == action.payload
        ),
      };
    case RESET_FILTER:
      return {
        ...state,
        favorites: [...state.copyFavorites],
      };
    default:
      return { ...state };
  }
}
