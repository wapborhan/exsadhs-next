import React from "react";

const Breadcumb = () => {
  return (
    <div
      class="breadcumb-wrapper "
      data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      data-overlay="theme"
    >
      <div class="container">
        <div class="breadcumb-content">
          <h1 class="breadcumb-title">Error Page</h1>
          <ul class="breadcumb-menu">
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
