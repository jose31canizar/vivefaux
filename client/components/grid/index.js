import React, { Component } from "react";
import "./index.styl";
import Document from "next/document";
import Panel from "~/components/panel";

Math.clamp = function(number, min, max) {
  return Math.max(min, Math.min(number, max));
};

function getElementOffset(el) {
  let top = 0;
  let left = 0;
  let element = el;

  // Loop through the DOM tree
  // and add it's parent's offset to get page offset
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;

    element = element.offsetParent;
  } while (element);

  return {
    top,
    left
  };
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

export default class LabelGrid extends Component {
  state = {
    x: [0, 0, 0, 0],
    y: [0, 0, 0, 0],
    labelState: [0, 0, 0, 0].map(x => "closed"),
    gridItemWidth: 0,
    gridItemHeight: 0,
    x1: null,
    y1: null,
    dragging: false,
    dropInValues: [1, 1, 1, 1]
  };
  animate = (index, initial, max, delay) => {
    const step = y => {
      const y2 = (y += 0.025);
      this.setState(prev => ({
        dropInValues: prev.dropInValues.map((x, i) =>
          i === index ? y2 : easeInOutCubic(x)
        )
      }));
      if (y < max) {
        setTimeout(() => step(y2), 0);
      }
    };
    setTimeout(() => step(initial), delay);
  };
  calculateDimensions = () => {
    const { width, height } = document
      .querySelector(".grid-item")
      .getBoundingClientRect();
    let docel = document.documentElement;
    let w = Math.max(docel.clientWidth, window.innerWidth || 0);
    let h = Math.max(docel.clientHeight, window.innerHeight || 0);

    console.log("dim", w, h);

    this.setState({
      gridItemWidth: width,
      gridItemHeight: height,
      w,
      h
    });
  };
  componentDidMount() {
    // this.animate(0, 0, 1, 0);
    // this.animate(1, 0, 1, 350);
    // this.animate(2, 0, 1, 600);
    // this.animate(3, 0, 1, 850);
    this.calculateDimensions();
    window.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        console.log(this.state.labelState);

        const i = this.state.labelState.findIndex(x => x === "opened");
        console.log("closing", i);

        this.closeLabel(i);
      }
    });
  }
  toggleLabel = (e, i) => {
    // const { top, left } = e.target.getBoundingClientRect();
    const { top, left } = getElementOffset(e.target);
    const x = left + window.pageXOffset;
    const y = top + window.pageYOffset;

    this.setState((prev, props) => ({
      x: prev.x.map((pos, j) => (j !== i ? pos : pos !== 0 ? 0 : -x)),
      y: prev.y.map((pos, j) => (j !== i ? pos : pos !== 0 ? 0 : -y)),
      labelState: prev.labelState.map((state, j) =>
        i !== j || state == "closing" || state === "opening"
          ? state
          : state === "closed"
          ? "opening"
          : state === "opened"
          ? "closing"
          : "closed"
      )
    }));
  };
  closeLabel = i => {
    this.setState((prev, props) => ({
      x: [0, 0, 0, 0],
      y: [0, 0, 0, 0],
      labelState: prev.labelState.map((state, j) =>
        i !== j || state == "closing" || state === "opening"
          ? state
          : state === "closed"
          ? "opening"
          : state === "opened"
          ? "closing"
          : "closed"
      )
    }));
  };

  onTransitionFinish = (_, i) => {
    const { enableScroll, disableScroll } = this.props;
    this.setState(
      prev => ({
        labelState: prev.labelState.map((state, j) =>
          i !== j
            ? state
            : state === "opening"
            ? "opened"
            : state === "closing" || state === "first-render"
            ? "closed"
            : "closed"
        )
      }),
      () => {
        let allClosed = this.state.labelState.reduce(
          (acc, state) => acc && state === "closed",
          true
        );
        if (allClosed) {
          enableScroll();
        } else {
          disableScroll();
        }
      }
    );
  };
  containerClasses = i => {
    const { labelState } = this.state;
    const isOpen =
      labelState[i] === "opening" ||
      labelState[i] === "opened" ||
      labelState[i] === "closing";
    const isOpened = labelState[i] === "opened";
    return `
    grid-item-container ${isOpen ? "open" : ""} ${isOpened ? "opened" : ""}
    `;
  };
  calculateScale = (i, dim, gridDim, watchScroll) => {
    let scroll = 0;
    if (this.props.pageRef && watchScroll) {
      // console.log("calculate scale", this.props.pageRef.scrollTop);
      scroll = this.props.pageRef.scrollTop;
    }

    const { labelState, dropInValues } = this.state;
    return labelState[i] === "first-render"
      ? dropInValues[i]
      : labelState[i] === "opening" || labelState[i] === "opened"
      ? (dim + scroll) / gridDim
      : 1;
  };
  render() {
    const { labels } = this.props;
    const { toggleLabel, onTransitionFinish, closeLabel } = this;
    const {
      x,
      y,
      labelState,
      dragging,
      dropInValues,
      w,
      gridItemWidth,
      h,
      gridItemHeight
    } = this.state;

    return (
      <div className="grid-container">
        {labels.map(({ title, name, description, soundcloud }, i) => (
          <div
            className={this.containerClasses(i)}
            key={`grid-item-container-${i}`}
          >
            {labelState[i] === "opened" ? (
              <Panel
                title={title}
                name={name}
                description={description}
                soundcloud={soundcloud}
                onMouseDown={() => closeLabel(i)}
                onTouchEnd={() => closeLabel(i)}
              />
            ) : null}
            <div
              style={{
                opacity: dropInValues[i],
                transformOrigin:
                  labelState[i] === "first-render" ? "center" : "left top",
                transform: `translate3d(${x[i]}px,${
                  y[i]
                }px,0) scale(${this.calculateScale(
                  i,
                  w,
                  gridItemWidth,
                  false
                )},${this.calculateScale(i, h, gridItemHeight, true)})`
              }}
              key={"grid-item-" + i}
              className="grid-item"
              onMouseDown={e => toggleLabel(e, i)}
              onTouchEnd={e => !dragging && toggleLabel(e, i)}
              onTouchStart={e => this.setState({ dragging: false })}
              onTouchMove={e => this.setState({ dragging: true })}
              onTransitionEnd={e => onTransitionFinish(e, i)}
            >
              <h3>{title}</h3>
              <p>{description}</p>
              <a
                href={soundcloud}
                style={{ visibility: soundcloud ? "visible" : "hidden" }}
              >
                soundcloud
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
