import { useReducer } from "react";
const ACTIONS = {
  UPDATE_KEYBOARD: "update_keyboard",
  UPDATE_RATING: "update_rating",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYBOARD:
      return {
        ...state,
        keyword: action.payload,
      };
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };

    default:
      return state;
  }
};

export const useForm = ({ initialKeyword, initialRating }) => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  });

  const { keyword, rating } = state;

  return {
    keyword,
    rating,
    updateKeyboard: (keyword) =>
      dispatch({ type: ACTIONS.UPDATE_KEYBOARD, payload: keyword }),
    updateRating: (rating) =>
      dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
  };
};
