export const openLightBox = ({ index, images, caption, suffix }) => dispatch =>
  dispatch({ type: "OPEN_LIGHTBOX", index, images, caption, suffix });

export const closeLightBox = () => dispatch =>
  dispatch({ type: "CLOSE_LIGHTBOX" });

export const nextLightBox = () => dispatch =>
  dispatch({ type: "NEXT_LIGHTBOX" });

export const previousLightBox = () => dispatch =>
  dispatch({ type: "PREVIOUS_LIGHTBOX" });
