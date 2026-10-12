import Breadcumb from "@/components/Breadcumb";
import React from "react";

const NotFound = () => {
  return (
    <>
      {" "}
      {/* <Breadcumb /> */}
      <section className="space" style={{ background: "#fff" }}>
        <div className="container">
          <div className="error-img">
            <img src="assets/img/theme-img/error.svg" alt="404 image" />
          </div>
          <div className="error-content">
            <h2 className="error-title fw-extrabold mt-50">
              Opp’s That Page Can’t be Found
            </h2>
            <p className="error-text">
              It looks like nothing was found at this location. Maybe try one of
              the links below or a search?
            </p>
            <a href="index.html" className="th-btn">
              <i className="fas fa-home me-2"></i> Back To Home
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
