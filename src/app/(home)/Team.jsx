"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Team = () => {
  return (
    <section className="space-bottom team-area-1 arrow-wrap shape-mockup-wrap">
      <div
        className="shape-mockup team-bg-shape1-1 spin d-xxl-block d-none"
        style={{ top: "0", right: "3%" }}
      >
        <img src="assets/img/shape/hand-group-shape1.png" alt="img" />
      </div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Volunteer</span>
          <h2 className="sec-title">Meet The Optimistic Volunteer</h2>
        </div>
        <div className="slider-area">
          <Swiper
            spaceBetween={50}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop
            pagination={{ clickable: true, el: ".slider-pagination" }}
            navigation={{
              nextEl: ".slider-arrow.slider-next",
              prevEl: ".slider-arrow.slider-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="swiper th-slider has-shadow team-slider1 swiper-initialized swiper-horizontal swiper-backface-hidden"
            id="teamSlider1"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="th-team team-card">
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_1.png" alt="Team" />
                    </div>
                    <div className="team-social-hover">
                      <a href="#" className="team-social-hover_btn">
                        <i className="far fa-plus"></i>
                      </a>
                      <div className="th-social">
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://behance.com/">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Michel Connor</a>
                    </h3>
                    <span className="team-desig">Volunteer</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="th-team team-card">
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_2.png" alt="Team" />
                    </div>
                    <div className="team-social-hover">
                      <a href="#" className="team-social-hover_btn">
                        <i className="far fa-plus"></i>
                      </a>
                      <div className="th-social">
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://behance.com/">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Joseph Alexander</a>
                    </h3>
                    <span className="team-desig">Volunteer</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="th-team team-card">
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_3.png" alt="Team" />
                    </div>
                    <div className="team-social-hover">
                      <a href="#" className="team-social-hover_btn">
                        <i className="far fa-plus"></i>
                      </a>
                      <div className="th-social">
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://behance.com/">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Jessica Lauren</a>
                    </h3>
                    <span className="team-desig">Volunteer</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="th-team team-card">
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_4.png" alt="Team" />
                    </div>
                    <div className="team-social-hover">
                      <a href="#" className="team-social-hover_btn">
                        <i className="far fa-plus"></i>
                      </a>
                      <div className="th-social">
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://behance.com/">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Daniel Thomas</a>
                    </h3>
                    <span className="team-desig">Volunteer</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="th-team team-card">
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_1.png" alt="Team" />
                    </div>
                    <div className="team-social-hover">
                      <a href="#" className="team-social-hover_btn">
                        <i className="far fa-plus"></i>
                      </a>
                      <div className="th-social">
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://behance.com/">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Michel Connor</a>
                    </h3>
                    <span className="team-desig">Volunteer</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="th-team team-card">
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_2.png" alt="Team" />
                    </div>
                    <div className="team-social-hover">
                      <a href="#" className="team-social-hover_btn">
                        <i className="far fa-plus"></i>
                      </a>
                      <div className="th-social">
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://behance.com/">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Joseph Alexander</a>
                    </h3>
                    <span className="team-desig">Volunteer</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="th-team team-card">
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_3.png" alt="Team" />
                    </div>
                    <div className="team-social-hover">
                      <a href="#" className="team-social-hover_btn">
                        <i className="far fa-plus"></i>
                      </a>
                      <div className="th-social">
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://behance.com/">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Jessica Lauren</a>
                    </h3>
                    <span className="team-desig">Volunteer</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="th-team team-card">
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_4.png" alt="Team" />
                    </div>
                    <div className="team-social-hover">
                      <a href="#" className="team-social-hover_btn">
                        <i className="far fa-plus"></i>
                      </a>
                      <div className="th-social">
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://behance.com/">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Daniel Thomas</a>
                    </h3>
                    <span className="team-desig">Volunteer</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="slider-pagination"></div>
          <button
            data-slider-prev="#teamSlider1"
            className="slider-arrow slider-prev"
          >
            <i className="far fa-arrow-left"></i>
          </button>
          <button
            data-slider-next="#teamSlider1"
            className="slider-arrow slider-next"
          >
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
