import React from "react";

import "./Clients.css";

export default function Clients() {
  return (
    <section className="section" id="clients">
      <div className="container">
        <div className="client-boxes">
          <div className="client-box">
            <img
              src={require("../../images/clients/client-1.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/clients/client-2.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/clients/client-3.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/clients/client-4.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/clients/client-5.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/clients/client-6.png")}
              alt=""
              className="client-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
