import React, { useState } from "react";

export const Image = ({ images, index }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="portfolio-item">
      <a>
        <img
          src={images[index].smallImage}
          className="img-responsive"
          alt="villa"
          onClick={() => handleClick(index)}
        />
      </a>

      {showModal && (
        <div
          className="modal fade in"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">Galleria</h4>
              </div>
              <div className="modal-body">
                <div
                  id="carousel-example-generic"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {images.map((image, idx) => (
                      <div
                        className={`item ${
                          idx === currentIndex ? "active" : ""
                        }`}
                        key={idx}
                      >
                        <img
                          src={image.largeImage}
                          alt="..."
                          style={{
                            width: "1000px",
                            height: "667px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    className="left carousel-control"
                    role="button"
                    onClick={handlePrev}
                  >
                    <span
                      className="glyphicon glyphicon-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control"
                    role="button"
                    onClick={handleNext}
                  >
                    <span
                      className="glyphicon glyphicon-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  onClick={handleClose}
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
