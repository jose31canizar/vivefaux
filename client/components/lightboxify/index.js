import React, { Component } from "react";
import { connect } from "react-redux";
import { closeLightBox, nextLightBox, previousLightBox } from "../../actions";
import Arrow from "../../components/arrow";
import "./index.styl";

export function lightboxify(Wrapper) {
  return connect(
    state => ({
      lightBox: state.lightBox,
      i: state.index,
      images: state.images,
      suffix: state.suffix
    }),
    { closeLightBox, nextLightBox, previousLightBox }
  )(
    class extends Component {
      render() {
        const {
          lightBox,
          caption,
          images,
          i,
          suffix,
          closeLightBox,
          nextLightBox,
          previousLightBox
        } = this.props;
        return (
          <Wrapper {...this.props}>
            {this.props.children}
            {lightBox === "open" ? (
              <div className="lightbox-modal">
                <div className="close-button" onClick={closeLightBox}>
                  <svg width="20" viewBox="0 0 66.99 66.99">
                    <g>
                      <g>
                        <path
                          style={{
                            fill: "none",
                            stroke: "#000",
                            strokeLineCap: "round",
                            strokeWidth: 3
                          }}
                          d="M65.49 1.85L33.67 33.67M33.67 33.67L1.85 65.49M33.67 33.67l31.82 31.82M33.67 33.67L1.5 1.5"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <Arrow
                  direction="left"
                  color="white"
                  onMouseDown={previousLightBox}
                />
                <div className="modal-item">
                  <img src={`${images[i].image}.${suffix}`} />
                  {images[i].caption}
                </div>
                <Arrow
                  direction="right"
                  color="white"
                  onMouseDown={() => nextLightBox()}
                />
              </div>
            ) : null}
          </Wrapper>
        );
      }
    }
  );
}
