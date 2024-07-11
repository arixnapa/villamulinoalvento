import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <div className="section-title">
                <h2>Contattaci</h2>
              </div>
              <p>
                <a href="https://maps.app.goo.gl/uxbGfFNpwz7G2ToQA">
                  <span>
                    <i className="fa fa-map-marker"></i>{" "}
                    <u>Indirizzo su Google Maps</u>
                  </span>
                </a>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefono (Whatsapp)
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Villa Mulino al Vento. Numero di registrazione
            19083041C237996
          </p>
        </div>
      </div>
    </div>
  );
};
