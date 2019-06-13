const defaultState = { pages: [], isLoading: false };
export default function(state = defaultState, action) {
  switch (action.type) {
    case "LOAD_PAGES":
      return { ...state, isLoading: true };
    case "LOAD_PAGES_SUCCESS":
      return { ...state, pages: action.payload, isLoading: false };
    case "LOAD_PAGES_BY_PRIVACY":
      return { ...state, isLoading: true };
    case "LOAD_PAGES_BY_PRIVACY_SUCCESS":
      return {
        ...state,
        [`${action.private ? "privatePages" : "publicPages"}`]: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
