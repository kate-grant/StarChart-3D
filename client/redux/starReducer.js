import axios from "axios";

const SET_STARS = "SET_STARS";

export const setStars = (stars) => ({
  type: SET_STARS,
  stars,
});

export const fetchStars = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/stars");
      dispatch(setStars(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = { stars: [] };

export default function starReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STARS:
      return { ...state, stars: action.stars };
    default:
      return state;
  }
}
