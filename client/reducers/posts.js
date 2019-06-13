const defaultState = {
  all: [],
  kamakura: [],
  blacq: [],
  soken: [],
  isLoading: false
};
export default function(state = defaultState, action) {
  switch (action.type) {
    case "LOAD_POSTS":
      return { ...state, isLoading: true };
    case "LOAD_POSTS_SUCCESS":
      return { ...state, all: action.payload, isLoading: false };
    case "LOAD_POSTS_BY_TAG":
      return { ...state, isLoading: true };
    case "LOAD_POSTS_BY_TAG_SUCCESS":
      return { ...state, [action.tag]: action.payload, isLoading: false };
    default:
      return state;
  }
}
