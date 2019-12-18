import actions from "./actions";

const initialState = {
  news: [],
  country: "",

};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_NEWS:
      return {
        ...state,
        news: action.news
      }
    default:
      return state;
  }
}
