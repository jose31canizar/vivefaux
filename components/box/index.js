import styled from "styled-components";

const values = [
  "astretch",
  "astart",
  "aend",
  "acenter",
  "between",
  "evenly",
  "around",
  "jstretch",
  "jcenter",
  "jstart",
  "jend",
  "column",
  "row",
  "inline",
  "grid",
  "flex"
];

function alignItems(value) {
  switch (value) {
    case "astretch":
      return "stretch";
    case "astart":
      return "flex-start";
    case "aend":
      return "flex-end";
    case "acenter":
      return "center";
    default:
      return "none";
  }
}

function justifyContent(value) {
  switch (value) {
    case "between":
      return "space-between";
    case "evenly":
      return "space-evenly";
    case "around":
      return "space-around";
    case "jstretch":
      return "stretch";
    case "jstart":
      return "flex-start";
    case "jend":
      return "flex-end";
    case "jcenter":
      return "center";
    default:
      return "none";
  }
}

function flexDirection(value) {
  switch (value) {
    case "column":
      return "column";
    case "row":
      return "row";
    default:
      return "none";
  }
}

function display(value) {
  switch (value) {
    case "inline":
      return "inline-flex";
    case "grid":
      return "grid";
    case "flex":
      return "flex";
    default:
      return "none";
  }
}

function spacing(value) {
  if (typeof value === "undefined" || value === null) {
    return "0";
  }
  if (value.length === 4) {
    const [v1, v2, v3, v4] = value;
    return `${v1}rem ${v2}rem ${v3}rem ${v4}rem`;
  }
  if (value.length === 2) {
    const [v1, v2] = value;
    return `${v1}rem ${v2}rem`;
  }
  return `${value}rem`;
}

function prune(mapper) {
  return function(props) {
    return Object.entries(props)
      .filter(([_, v]) => typeof v !== "undefined" || v != null || v !== false)
      .filter(([k, _]) => values.includes(k))
      .map(([k, _]) => mapper(k))
      .filter(v => v !== "none")[0];
  };
}

function findDimension(dim) {
  if (!dim) return "auto";
  if (`${dim}`.includes("px")) return `${dim}`;
  return `${dim}%`;
}

const Box = styled.div`
  width: ${({ width }) => findDimension(width)};
  height: ${({ height }) => findDimension(height)};
  display: ${prune(display)};
  align-items: ${prune(alignItems)};
  justify-content: ${prune(justifyContent)};
  flex-direction: ${prune(flexDirection)};
  padding: ${({ padding }) => spacing(padding)};
  margin: ${({ margin }) => spacing(margin)};
  ${({ bb }) => (bb ? `border-bottom: ${bb}px solid black` : "")};
  ${({ br }) =>
    br
      ? `border-radius: ${br && `${br}`.includes("%") ? `${br}` : `${br}px`}`
      : ""};
  ${({ bs }) => (bs ? `border-style: ${bs}` : "")};
  ${({ bw }) => (bw ? `border-width: ${bw}px` : "")};
  ${({ bc }) => (bc ? `border-color: ${bc}px` : "")};
  ${({ bg }) => (bg ? `background-color: ${bg}` : "")};
  ${({ scroll }) => (scroll ? `overflow: scroll` : "")};
  ${({ pt }) => (pt ? `padding-top: ${pt}rem` : "")};
  ${({ pb }) => (pb ? `padding-bottom: ${pb}rem` : "")};
  ${({ pointer }) => (pointer ? "cursor: pointer" : "")};
  ${({ columns }) =>
    columns ? `grid-template-columns: repeat(${columns}, 1fr)` : ""};
  ${({ gap }) => (gap ? `grid-gap: ${gap}rem` : "")};
  ${({ wrap }) => (wrap ? `flex-wrap: wrap` : "")};
  ${({ z }) => (z ? `z-index: ${z}` : "")};
`;

export default Box;
