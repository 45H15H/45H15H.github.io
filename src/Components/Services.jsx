import React from "react";
import "./Services.css";

import vscode from "../images/services/vscode.png";

const serviceList = [
  {
    title: "Visual Studio Code",
    description: "Experience Coding & live-coding share with VSCode",
    image: vscode,
  },
  {
    title: "Visual Studio Code",
    description: "Experience Coding & live-coding share with VSCode",
    image: vscode,
  },
  {
    title: "Visual Studio Code",
    description: "Experience Coding & live-coding share with VSCode",
    image: vscode,
  },
  {
    title: "Visual Studio Code",
    description: "Experience Coding & live-coding share with VSCode",
    image: vscode,
  },
  {
    title: "Visual Studio Code",
    description: "Experience Coding & live-coding share with VSCode",
    image: vscode,
  },
  {
    title: "Visual Studio Code",
    description: "Experience Coding & live-coding share with VSCode",
    image: vscode,
  },
];

const Services = () => {
  return (
    <section className="padding" id="services">
      <h2 style={{ textAlign: "center" }}>Services</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="service-container">
          {serviceList.map((service) => (
            <div className="row-service-wrap">
              <div className="service-card">
                <div className="service-box">
                  <img className="service-img" src={service.image} alt="vscode" />
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                   </div>
                 </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
