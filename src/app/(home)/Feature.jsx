import React from "react";

const Feature = () => {
  return (
    <section className="feature-area-1 position-relative space-bottom">
      <div
        className="feature-bg-wrap background-image bg-mask"
        data-bg-src="assets/img/bg/gray-bg2.png"
        style={{
          backgroundImage: `url("assets/img/bg/gray-bg2.png")`,
          WebkitMaskImage: "url('assets/img/bg/feature-bg-mask-1.png')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: "url('assets/img/bg/feature-bg-mask-1.png')",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
        data-mask-src="assets/img/bg/feature-bg-mask-1.png"
      >
        <div className="feature-bg-shape1-1"></div>
      </div>
      <div className="container">
        <div className="row gy-30 gx-30 justify-content-end">
          <div className="col-xl-3 col-lg-4">
            <div className="feature-card">
              <div className="feature-card-bg-shape">
                <img
                  src="assets/img/shape/feature-card-bg-shape1-1.png"
                  alt="img"
                />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/feature-icon1-1.svg" alt="icon" />
              </div>
              <h3 className="box-title">Fundraising Trust</h3>
              <p className="box-text">
                Stay updated with the latest news, events, and impact stories
                from our organization. Subscribe to our newsletter.
              </p>
              <a className="link-btn style2" href="about.html">
                View Details <i className="fa-solid fa-arrow-up-right ms-2"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="feature-card">
              <div className="feature-card-bg-shape">
                <img
                  src="assets/img/shape/feature-card-bg-shape1-1.png"
                  alt="img"
                />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/feature-icon1-2.svg" alt="icon" />
              </div>
              <h3 className="box-title">Charity Donate</h3>
              <p className="box-text">
                Stay updated with the latest news, events, and impact stories
                from our organization. Subscribe to our newsletter.
              </p>
              <a className="link-btn style2" href="about.html">
                View Details <i className="fa-solid fa-arrow-up-right ms-2"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="feature-card">
              <div className="feature-card-bg-shape">
                <img
                  src="assets/img/shape/feature-card-bg-shape1-1.png"
                  alt="img"
                />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/feature-icon1-1.svg" alt="icon" />
              </div>
              <h3 className="box-title">Treatment Help</h3>
              <p className="box-text">
                Stay updated with the latest news, events, and impact stories
                from our organization. Subscribe to our newsletter.
              </p>
              <a className="link-btn style2" href="about.html">
                View Details <i className="fa-solid fa-arrow-up-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
