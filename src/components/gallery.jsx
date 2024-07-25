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

  return chunks.map((chunk, index) => (
    <div key={`chunk-${index}`}>
      <div className="residence-title">
        <h3>{titles[index]}</h3>
      </div>
      <div className="row">
        {chunk.map((d, i) => (
          <div key={`${index}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
            <Image largeImage={d.largeImage} smallImage={d.smallImage} />
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
          {/* <video controls={false} muted autoPlay loop>
              <source src="img/villa1280x720.mp4" type="video/mp4" /> Video non
              supportato
            </video> */}
        </div>
        <div className="portfolio-item">
          {props.data ? renderImagesInGroups(props.data) : "Loading..."}
        </div>
      </div>
    </div>
  );
};
