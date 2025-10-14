import React from "react";

const Services = () => {
  return (
    <section
      className="overflow-hidden space background-image shape-mockup-wrap"
      id="service-sec"
      style={{ backgroundImage: `url("assets/img/bg/gray-bg3.png")` }}
      data-bg-src="assets/img/bg/gray-bg1.png"
      data-overlay="gray"
      data-opacity="6"
    >
      <div
        className="shape-mockup service-bg-shape1-1 d-xxl-inline-block d-none"
        style={{ top: "15%", left: "0" }}
      >
        <div className="color-masking">
          <div
            className="masking-src bg-mask"
            style={{
              WebkitMaskImage: "url('assets/img/shape/hand-shape1.png')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskImage: "url('assets/img/shape/hand-shape1.png')",
              maskRepeat: "no-repeat",
              maskSize: "cover",
            }}
            data-mask-src="assets/img/shape/hand-shape1.png"
          ></div>
          <img src="assets/img/shape/hand-shape1.png" alt="img" />
        </div>
      </div>
      <div
        className="shape-mockup service-bg-shape1-2 d-xxl-inline-block d-none"
        style={{ top: "35%", left: "0" }}
      >
        <div className="color-masking">
          <div
            className="masking-src bg-mask"
            style={{
              WebkitMaskImage: "url('assets/img/shape/hand-shape2.png')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskImage: "url('assets/img/shape/hand-shape2.png')",
              maskRepeat: "no-repeat",
              maskSize: "cover",
            }}
            data-mask-src="assets/img/shape/hand-shape2.png"
          ></div>
          <img src="assets/img/shape/hand-shape2.png" alt="img" />
        </div>
      </div>
      <div className="service-bg-shape1-3 d-xxl-inline-block d-none"></div>
      <div className="service-bg-shape1-4 d-xxl-inline-block d-none"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">Charity Services</span>
              <h2 className="sec-title">
                We Do it for all People Humanist Services
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30 gx-30 justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="service-card">
              <div className="box-icon">
                <img
                  src="assets/img/icon/service-icon/service-card-icon1-1.svg"
                  alt="Icon"
                />
              </div>
              <div className="box-content">
                <h3 className="box-title">
                  <a href="about.html">Healthy Foods</a>
                </h3>
                <p className="box-text">
                  Share stories and experiences from current volunteers to
                  inspire others to join. Allow user to sign up for volunteer
                  opportunities.
                </p>
                <a href="about.html" className="th-btn">
                  Learn More<i className="fas fa-arrow-up-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-card">
              <div className="box-icon">
                <img
                  src="assets/img/icon/service-icon/service-card-icon1-2.svg"
                  alt="Icon"
                />
              </div>
              <div className="box-content">
                <h3 className="box-title">
                  <a href="about.html">Educations</a>
                </h3>
                <p className="box-text">
                  Explore our charity website to discover impactful projects,
                  opportunities, and ways to donate, helping those in need
                  thrive.
                </p>
                <a href="about.html" className="th-btn">
                  Learn More<i className="fas fa-arrow-up-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-card">
              <div className="box-icon">
                <img
                  src="assets/img/icon/service-icon/service-card-icon1-3.svg"
                  alt="Icon"
                />
              </div>
              <div className="box-content">
                <h3 className="box-title">
                  <a href="about.html">Medical Help</a>
                </h3>
                <p className="box-text">
                  Join us in making a difference! Our charity website connects
                  you with volunteer, donation options, and inspiring stories.
                </p>
                <a href="about.html" className="th-btn">
                  Learn More<i className="fas fa-arrow-up-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
