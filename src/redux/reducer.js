import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions/actions_types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload, allCharacters: action.payload
        
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter((char) => char.gender === action.payload),
      };

    case ORDER:
      const sortedFavorites = [...state.allCharacters];
      if (action.payload === "A") {
        sortedFavorites.sort((a, b) => (a.name > b.name ? 1: -1));
      } else if (action.payload === "D") {
        sortedFavorites.sort((a, b) => (b.name > a.name ? 1: -1));
      }
      return {
        ...state,
        myFavorites: sortedFavorites,
      };

    default:
      return { ...state };
  }
}
export default reducer;
