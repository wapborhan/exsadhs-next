import Link from "next/link";
import React from "react";

const Footer = () => {
  const bgShape = {
    WebkitMaskImage: "url('/assets/img/shape/info_card_icon_bg_shape_1_1.png')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "cover",
    maskImage: "url('/assets/img/shape/info_card_icon_bg_shape_1_1.png')",
    maskRepeat: "no-repeat",
    maskSize: "cover",
  };
  return (
    <footer
      className="footer-wrapper footer-default"
      style={{
        backgroundImage: `url("assets/img/bg/footer-default-bg-mask.png")`,
      }}
      data-bg-src="assets/img/bg/footer-default-bg-mask.png"
    >
      <div
        className="footer-bg-shape2 shape-mockup jump"
        style={{ top: "30%", right: "0" }}
      >
        <img src="assets/img/shape/footer-bg-shape3.png" alt="img" />
      </div>
      <div
        className="footer-bg-shape3 shape-mockup d-none"
        style={{ bottom: "0", right: "0" }}
      >
        <img src="assets/img/shape/footer-bg-shape2.png" alt="img" />
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="subscribe-box">
            <div className="row gy-40 align-items-center justify-content-center">
              <div className="col-xl-6">
                <h4 className="subscribe-box_title">
                  আমাদের নিউজলেটারে সাবস্ক্রাইব করুন
                </h4>
                <p className="subscribe-box_text">
                  নিয়মিত পরিদর্শন এবং প্রতিক্রিয়া ব্যবস্থা
                </p>
              </div>
              <div className="col-xl-6 col-lg-8">
                <form className="newsletter-form">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Email Address"
                      required=""
                    />
                  </div>
                  <button type="submit" className="th-btn style3">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link href="/">
                      <img src="assets/img/logo.png" alt="EX-SADHS" />
                    </Link>
                  </div>
                  <p className="about-text">
                    সদস্যদের প্রতি নিবেদিত একটি অলাভজনক সংস্থা,শিক্ষা ও সমাজের
                    সেবায় চিরকাল ঐক্যবদ্ধ।
                  </p>
                  <a href="contact.html" className="th-btn">
                    <i className="fas fa-heart me-2"></i>
                    এখনই দান করুন
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">দ্রুত লিঙ্ক</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="about.html">আমাদের সম্পর্কে</a>
                    </li>
                    <li>
                      <a href="blog.html">আমাদের সংবাদ</a>
                    </li>
                    <li>
                      <a href="about.html">আমাদের প্রচারাভিযান</a>
                    </li>
                    <li>
                      <a href="contact.html">গোপনীয়তা নীতি</a>
                    </li>
                    <li>
                      <a href="contact.html">আমাদের সাথে যোগাযোগ করুন</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">আমাদের পরিষেবা</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="donate-now.html">অনুদান দিন</a>
                    </li>
                    <li>
                      <a href="faq.html">শিক্ষা সহায়তা</a>
                    </li>
                    <li>
                      <a href="faq.html">স্বাস্থ্য সহায়তা</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <div className="th-widget-contact">
                  <h3 className="widget_title">আমাদের সাথে যোগাযোগ করুন</h3>
                  <div className="info-card">
                    <div className="box-icon">
                      <i className="fal fa-phone"></i>
                      <div
                        className="bg-shape1"
                        style={bgShape}
                        data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                      ></div>
                      <div
                        className="bg-shape2"
                        style={bgShape}
                        data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                      ></div>
                    </div>
                    <div className="box-content">
                      <p className="box-text">আমাদের ফোন করুন:</p>
                      <h4 className="box-title">
                        <a href="tel:16336547896">+163-3654-7896</a>
                      </h4>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="box-icon">
                      <i className="fal fa-envelope-open"></i>
                      <div
                        className="bg-shape1"
                        style={bgShape}
                        data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                      ></div>
                      <div
                        className="bg-shape2"
                        style={bgShape}
                        data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                      ></div>
                    </div>
                    <div className="box-content">
                      <p className="box-text">আমাদের ইমেল করুন:</p>
                      <h4 className="box-title">
                        <a href="mailto:info@donat.com">info@donat.com</a>
                      </h4>
                    </div>
                  </div>
                  <div className="th-social style2">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-center gy-3 align-items-center">
            <div className="col-lg-12">
              <p className="copyright-text text-center">
                <i className="fal fa-copyright"></i> কপিরাইট ২০২৬ -{" "}
                {new Date().getFullYear().toLocaleString("bn-BD", {
                  year: "numeric",
                  useGrouping: false,
                })}{" "}
                EX-SADHS সর্বস্বত্ব সংরক্ষিত। ডিজাইন করেছেন{" "}
                <Link href="https://www.wapborhan.com">Borhan Uddin</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
