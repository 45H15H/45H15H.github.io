
import React from "react";

const Services = () => {
    return (
        <section>
            <div className="container">
                <div className="section-head">
                    <h2>Services</h2>
                </div>
                <div className="row-service-wrap">
                    <div className="service-card">
                        <div className="service-box">
                            <img className="service-img" src="src/images/services/vscode.png" alt="vscode" />
                            <div className="service-content">
                                <h3>Visual Studion Code</h3>
                                <p>Experience Coding & live-coding share with VSCode</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-box">
                            <img className="service-img" src="src/images/services/vscode.png" alt="vscode" />
                            <div className="service-content">
                                <h3>Visual Studion Code</h3>
                                <p>Experience Coding & live-coding share with VSCode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;