import React from "react";

const Breadcumb = () => {
  return (
    <div
      className="breadcumb-wrapper "
      data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      data-overlay="theme"
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Error Page</h1>
          <ul className="breadcumb-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Error Page</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcumb;
