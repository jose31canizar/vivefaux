import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import { connect } from "react-redux";
import { closeLightBox, openLightBox } from "~/actions/lightbox";

const concat = (x, y) => x.concat(y);

const flatMap = (f, xs) => xs.map(f).reduce(concat, []);

Array.prototype.flatMap = function(f) {
  return flatMap(f, this);
};

export default connect(
  state => ({ count: state.count }),
  dispatch => ({
    openLightBox: ({ index, images, caption, suffix }) =>
      dispatch(openLightBox({ index, images, caption, suffix })),
    closeLightBox: () => dispatch(closeLightBox)
  })
)(
  class extends Component {
    state = {
      photoIndex: 0
    };
    static getInitialProps({ store, isServer, pathname, query }) {
      store.dispatch({ type: "FOO", payload: "foo" }); // component will be able to read from store's state when rendered
      return { custom: "custom" }; // you can pass some custom props to component from here
    }
    render() {
      const { photoIndex } = this.state;
      const { data, type, closeLightBox, openLightBox } = this.props;

      const images = Object.entries(data)
        .map(x =>
          x[1].map(y => ({
            ...y,
            image: "../../static/img/" + x[0] + y.image
          }))
        )
        .flatMap(y => y);

      return (
        <StackGrid
          data={data}
          gutterWidth={30}
          gutterHeight={30}
          columnWidth={150}
          style={{ width: "60%" }}
        >
          {images.map(({ image, caption }, i) => (
            <div key={`key${i}`}>
              <img
                src={`${image}.${type}`}
                onMouseDown={() =>
                  openLightBox({
                    index: i,
                    images,
                    caption,
                    suffix: type
                  })
                }
              />
            </div>
          ))}
        </StackGrid>
      );
    }
  }
);
