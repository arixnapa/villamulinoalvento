import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Servizi</h2>
          <p>
            Villa Mulino al Vento dispone di un grande terrazzo con griglia
            barbecue, una doccia solare, uno spazio-garage con 4 posti auto
            coperti, un giardino, una cucina e una lavanderia - 2 lavatrici e 1
            a asciugatrice - a uso comune.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="service-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
