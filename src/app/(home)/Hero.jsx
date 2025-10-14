import React from "react";

const Hero = () => {
  return (
    <>
      <div className="th-hero-wrapper hero-1" id="hero">
        <div
          className="swiper th-slider hero-slider1"
          id="heroSlide1"
          data-slider-options='{"effect":"fade", "autoHeight": "true"}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="hero-inner background-image"
                style={{
                  backgroundImage: `url("assets/img/hero/hero_bg_4_1.jpg")`,
                }}
                data-bg-src="assets/img/hero/hero_bg_1_1.jpg"
                data-overlay="black4"
                data-opacity="5"
              >
                <div className="hero-bg-shape1-1">
                  <img src="assets/img/hero/hero-bg-shape1-1.png" alt="img" />
                </div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-12">
                      <div className="hero-style1 text-center">
                        <span
                          className="sub-title justify-content-center"
                          data-ani="slideinup"
                          data-ani-delay="0.2s"
                        >
                          Give Hope For Homeless
                        </span>
                        <h1 className="hero-title text-white">
                          <span
                            className="title1"
                            data-ani="slideinup"
                            data-ani-delay="0.4s"
                          >
                            Helping Each Other Can
                          </span>
                          <span
                            className="title1"
                            data-ani="slideinup"
                            data-ani-delay="0.4s"
                          >
                            Make World Better
                          </span>
                        </h1>
                        <div
                          className="btn-wrap justify-content-center"
                          data-ani="slideinup"
                          data-ani-delay="0.7s"
                        >
                          <a href="contact.html" className="th-btn style4">
                            Discover Now
                            <i className="fas fa-arrow-up-right ms-2"></i>
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                            className="th-btn style5 popup-video"
                          >
                            <i className="fas fa-play me-2"></i> Watch Video
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="th-hero-wrapper hero-3" id="hero">
        <div
          class="shape-mockup hero-shape-3-1 d-lg-block d-none"
          style={{ top: "20%", left: "50%" }}
        >
          <div class="color-masking shake">
            <div
              class="masking-src bg-mask"
              data-mask-src="assets/img/hero/hero-bg-shape2-3.png"
              style={{
                WebkitMaskImage: "url('assets/img/hero/hero-bg-shape2-3.png')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskImage: "url('assets/img/hero/hero-bg-shape2-3.png')",
                maskRepeat: "no-repeat",
                maskSize: "cover",
              }}
            ></div>
            <img src="assets/img/hero/hero-bg-shape2-3.png" alt="shape" />
          </div>
        </div>
        <div
          class="shape-mockup hero-shape-3-2 jump"
          style={{ top: "25%", left: "5%" }}
        >
          <div class="color-masking">
            <div
              class="masking-src bg-mask"
              style={{
                WebkitMaskImage: "url('assets/img/hero/hero-bg-shape2-1.png')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskImage: "url('assets/img/hero/hero-bg-shape2-1.png')",
                maskRepeat: "no-repeat",
                maskSize: "cover",
              }}
              data-mask-src="assets/img/hero/hero-bg-shape2-1.png"
            ></div>
            <img src="assets/img/hero/hero-bg-shape2-1.png" alt="shape" />
          </div>
        </div>
        <div
          class="shape-mockup hero-shape-3-3 jump"
          style={{ left: "-2%", bottom: "0" }}
        >
          <div class="color-masking2">
            <div
              class="masking-src bg-mask"
              style={{
                WebkitMaskImage: "url('assets/img/shape/hand-shape3.png')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskImage: "url('assets/img/shape/hand-shape3.png')",
                maskRepeat: "no-repeat",
                maskSize: "cover",
              }}
              data-mask-src="assets/img/shape/hand-shape3.png"
            ></div>
            <img src="assets/img/shape/hand-shape3.png" alt="shape" />
          </div>
        </div>
        <div
          class="hero-bg-3-1 background-image bg-mask"
          data-bg-src="assets/img/hero/hero_bg_3_1.jpg"
          style={{
            backgroundImage: `url("assets/img/hero/hero_bg_3_1.jpg")`,
            WebkitMaskImage: "url('assets/img/hero/hero-bg-shape3-1.png')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage: "url('assets/img/hero/hero-bg-shape3-1.png')",
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
          data-mask-src="assets/img/hero/hero-bg-shape3-1.png"
        ></div>
        <div class="container">
          <div class="row gx-40 align-items-center">
            <div class="col-lg-6">
              <div class="hero-style3">
                <span class="sub-title after-none">Give Hope For Homeless</span>
                <h1 class="hero-title">
                  <span class="title1">Donate For A</span>
                  <span class="title2">
                    Better <span class="text-theme2 d-inline-block">World</span>
                  </span>
                </h1>
                <p class="hero-text">
                  Explore the variety of volunteer opportunities available. From
                  event planning and fundraising to fieldwork and administrative
                  support
                </p>
                <div class="btn-wrap">
                  <a href="about.html" class="th-btn">
                    Discover Now<i class="fa-solid fa-arrow-up-right ms-2"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    class="play-btn style3 popup-video"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
