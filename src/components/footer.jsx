import React from "react";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Villa Mulino al Vento. Codice CIR
          19083041C237996. Codice CIN IT083041C222V2FDHL.
        </p>
      </div>
    </div>
  );
};
