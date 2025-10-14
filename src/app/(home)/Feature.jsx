import React from "react";

const Feature = () => {
  return (
    <section class="feature-area-1 position-relative space-bottom">
      <div
        class="feature-bg-wrap background-image bg-mask"
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
        <div class="feature-bg-shape1-1"></div>
      </div>
      <div class="container">
        <div class="row gy-30 gx-30 justify-content-end">
          <div class="col-xl-3 col-lg-4">
            <div class="feature-card">
              <div class="feature-card-bg-shape">
                <img
                  src="assets/img/shape/feature-card-bg-shape1-1.png"
                  alt="img"
                />
              </div>
              <div class="box-icon">
                <img src="assets/img/icon/feature-icon1-1.svg" alt="icon" />
              </div>
              <h3 class="box-title">Fundraising Trust</h3>
              <p class="box-text">
                Stay updated with the latest news, events, and impact stories
                from our organization. Subscribe to our newsletter.
              </p>
              <a class="link-btn style2" href="about.html">
                View Details <i class="fa-solid fa-arrow-up-right ms-2"></i>
              </a>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4">
            <div class="feature-card">
              <div class="feature-card-bg-shape">
                <img
                  src="assets/img/shape/feature-card-bg-shape1-1.png"
                  alt="img"
                />
              </div>
              <div class="box-icon">
                <img src="assets/img/icon/feature-icon1-2.svg" alt="icon" />
              </div>
              <h3 class="box-title">Charity Donate</h3>
              <p class="box-text">
                Stay updated with the latest news, events, and impact stories
                from our organization. Subscribe to our newsletter.
              </p>
              <a class="link-btn style2" href="about.html">
                View Details <i class="fa-solid fa-arrow-up-right ms-2"></i>
              </a>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4">
            <div class="feature-card">
              <div class="feature-card-bg-shape">
                <img
                  src="assets/img/shape/feature-card-bg-shape1-1.png"
                  alt="img"
                />
              </div>
              <div class="box-icon">
                <img src="assets/img/icon/feature-icon1-1.svg" alt="icon" />
              </div>
              <h3 class="box-title">Treatment Help</h3>
              <p class="box-text">
                Stay updated with the latest news, events, and impact stories
                from our organization. Subscribe to our newsletter.
              </p>
              <a class="link-btn style2" href="about.html">
                View Details <i class="fa-solid fa-arrow-up-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
