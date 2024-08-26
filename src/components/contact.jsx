import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

export const Contact = (props) => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("SERVICE_ID:", SERVICE_ID);
        console.log("TEMPLATE_ID:", TEMPLATE_ID);
        console.log("PUBLIC_KEY:", PUBLIC_KEY);

        console.log("SUCCESS!", result.text);
        setStatus("SUCCESS"); // Update status on success
        form.current.reset(); // Clear form after successful submission
      },
      (error) => {
        console.log("FAILED...", error.text);
        setStatus("FAILED"); // Update status on failure
      }
    );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contattaci</h2>
                <p>
                  Contattaci oggi stesso per prenotare il tuo soggiorno presso
                  Villa Mulino al Vento e vivere un'esperienza indimenticabile
                  sull'isola di Lipari.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        className="form-control"
                        placeholder="Nome"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="reply_to"
                        name="reply_to"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Messaggio"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Invia richiesta
                </button>
              </form>
              {status === "SUCCESS" && (
                <p className="text-success">
                  La tua email è stata inviata con successo!
                </p>
              )}
              {status === "FAILED" && (
                <p className="text-danger">
                  C'è stato un errore, riprova più tardi.
                </p>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contatti</h3>
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
    </div>
  );
};
