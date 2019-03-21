import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "28",
  className = "",
  viewBox = "0 0 40 40"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M17.9169 10.75L15.3906 13.2762L23.5965 21.5L15.3906 29.7237L17.9169 32.25L28.6669 21.5L17.9169 10.75Z" fill="#565656"/>
  </svg>
);

export default SVG;
