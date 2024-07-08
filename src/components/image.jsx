import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      {" "}
      <a href={largeImage} data-lightbox-gallery="gallery1">
        <img src={smallImage} className="img-responsive" alt={title} />{" "}
      </a>{" "}
    </div>
  );
};
