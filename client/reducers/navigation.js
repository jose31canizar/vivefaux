const defaultState = { sidebar: "closed" };
export default function(state = defaultState, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { sidebar: state.sidebar === "open" ? "closed" : "open" };
    default:
      return state;
  }
}
