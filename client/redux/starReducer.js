import axios from "axios";

const SET_STARS = "SET_STARS";
const SET_SINGLE_CONSTELLATION = "SET_SINGLE_CONSTELLATION";

export const setStars = (stars) => ({
  type: SET_STARS,
  stars,
});
export const setSingleConstellation = (constellation) => ({
  type: SET_SINGLE_CONSTELLATION,
  constellation,
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

const initialState = { stars: [], constellation: "" };

export default function starReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STARS:
      return { ...state, stars: action.stars };
    case SET_SINGLE_CONSTELLATION:
      return { ...state, constellation: action.constellation };
    default:
      return state;
  }
}
