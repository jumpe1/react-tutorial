import React from "react";

// const ColorfulMessage = (props) => {
export const ColorfulMessage = (props) => {
  console.log("colorful");
  const { color, message } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{message}</p>;
  // return <p style={contentStyle}>{props.children}</p>;
};

// export default ColorfulMessage;
