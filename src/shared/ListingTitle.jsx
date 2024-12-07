import React from "react";

export const ListingTitle = ({ title, subTitle }) => {
  return (
    <div className="list__header">
      <h2>{title}</h2>
      <span>{subTitle}</span>
    </div>
  );
};
