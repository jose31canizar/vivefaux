import React, { Component } from "react";
import "./index.styl";
import Document from "next/document";
import Labels from "../../constants/labels";
import LabelPanel from "../label-panel";

function getElementOffset(el) {
  let top = 0;
  let left = 0;
  let element = el;

  console.log(element);

  // Loop through the DOM tree
  // and add it's parent's offset to get page offset
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    console.log(
      `top is ${top} and left is ${left} and parent is ${element.offsetParent}`
    );
    console.log(element.offsetParent);

    element = element.offsetParent;
  } while (element);

  return {
    top,
    left
  };
}

export default class LabelGrid extends Component {
  state = {
    x: [0, 0, 0, 0],
    y: [0, 0, 0, 0],
    labelState: ["closed", "closed", "closed", "closed"],
    gridItemWidth: 0,
    gridItemHeight: 0,
    x1: null,
    y1: null,
    dragging: false
  };
  componentDidMount() {
    const { width, height } = document
      .querySelector(".label-grid-item")
      .getBoundingClientRect();

    let docel = document.documentElement;
    let w = Math.max(docel.clientWidth, window.innerWidth || 0);
    let h = Math.max(docel.clientHeight, window.innerHeight || 0);

    this.setState({
      gridItemWidth: width,
      gridItemHeight: height,
      w,
      h
    });
  }
  toggleLabel = (e, i) => {
    // const { top, left } = e.target.getBoundingClientRect();
    const { top, left } = getElementOffset(e.target);
    console.log(`top is ${top} and left is ${left}`);
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

  onTransitionFinish = (e, i) => {
    const { enableScroll, disableScroll } = this.props;
    this.setState(
      (prev, props) => ({
        labelState: prev.labelState.map((state, j) =>
          i !== j
            ? state
            : state === "opening"
            ? "opened"
            : state === "closing"
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
          console.log("enable scroll");

          enableScroll();
        } else {
          disableScroll();
        }
      }
    );
  };
  render() {
    const { toggleLabel, onTransitionFinish, closeLabel } = this;
    const {
      x,
      y,
      labelState,
      gridItemWidth,
      gridItemHeight,
      dragging,
      w,
      h
    } = this.state;

    console.log(this.state);

    return (
      <div class="label-grid-container">
        {Labels.map(({ title, name, description, soundcloud }, i) => (
          <div
            class={`label-grid-item-container ${
              labelState[i] === "opening" ||
              labelState[i] === "opened" ||
              labelState[i] === "closing"
                ? "open"
                : ""
            }`}
          >
            {labelState[i] === "opened" ? (
              <LabelPanel
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
                transform: `translate3d(${x[i]}px,${y[i]}px,0) scale(${
                  labelState[i] === "opening" || labelState[i] === "opened"
                    ? w / gridItemWidth
                    : 1
                },${
                  labelState[i] === "opening" || labelState[i] === "opened"
                    ? h / gridItemHeight
                    : 1
                })`
              }}
              key={"label-grid-item-" + i}
              class="label-grid-item"
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
