import { Image } from "./image";
import React from "react";

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const renderImagesInGroups = (data) => {
  const titles = ["Residenza OVEST", "Residenza SUD", "Residenza EST"];
  const chunks = chunkArray(data, 6);

  return chunks.map((chunk, chunkIndex) => (
    <div key={`chunk-${chunkIndex}`}>
      <div className="residence-title">
        <h3>{titles[chunkIndex]}</h3>
      </div>
      <div className="row image-row">
        {chunk.map((d, i) => (
          <div
            key={`${chunkIndex}-${i}`}
            className="col-sm-6 col-md-4 col-lg-4"
          >
            <Image images={data} index={chunkIndex * 6 + i} />
          </div>
        ))}
      </div>
    </div>
  ));
};

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galleria</h2>
        </div>
        <div className="portfolio-item">
          {props.data ? renderImagesInGroups(props.data) : "Loading..."}
        </div>
      </div>
    </div>
  );
};
