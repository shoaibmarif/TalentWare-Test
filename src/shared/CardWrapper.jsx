import React from "react";

export const CardWrapper = ({ classes, children }) => {
  return <div className={`card__wrapper ${classes}`}>{children}</div>;
};
