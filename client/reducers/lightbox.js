const initialState = {
  lightbox: "close",
  images: [],
  caption: ""
};

const mod = (x, n) => ((x % n) + n) % n;

export default function(
  state = initialState,
  { type, index, images, caption, suffix }
) {
  switch (type) {
    case "OPEN_LIGHTBOX":
      return {
        ...state,
        lightbox: "open",
        index,
        images,
        caption,
        suffix
      };
    case "CLOSE_LIGHTBOX":
      return { ...state, lightbox: "closed" };
    case "NEXT_LIGHTBOX":
      return { ...state, index: (state.index + 1) % state.images.length };
    case "PREVIOUS_LIGHTBOX":
      return { ...state, index: mod(state.index - 1, state.images.length) };
    default:
      return state;
  }
}
