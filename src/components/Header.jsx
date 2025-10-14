import React from "react";

const Header = () => {
  // ✅ Define reusable mask style
  const bgShape = {
    WebkitMaskImage: "url('/assets/img/shape/info_card_icon_bg_shape_1_1.png')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "cover",
    maskImage: "url('/assets/img/shape/info_card_icon_bg_shape_1_1.png')",
    maskRepeat: "no-repeat",
    maskSize: "cover",
  };

  return (
    <header className="th-header header-default">
      {/* Top bar */}
      <div className="menu-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            {/* Logo */}
            <div className="col-auto d-none d-lg-block">
              <div className="header-logo">
                <a href="index.html">
                  <img src="/assets/img/logo.svg" alt="Donat" />
                </a>
              </div>
            </div>

            {/* Info cards */}
            <div className="col-auto d-none d-md-block">
              <div className="info-card-wrap">
                {/* Location Card */}
                <div className="info-card">
                  <div className="box-icon">
                    <i className="fal fa-map-marker-alt"></i>
                    <div className="bg-shape1 bg-mask" style={bgShape}></div>
                    <div className="bg-shape2" style={bgShape}></div>
                  </div>
                  <div className="box-content">
                    <p className="box-text">ঠিকানা :</p>
                    <h4 className="box-title">
                      <a href="https://www.google.com/maps">
                        ভেড়ামারা, কুষ্টিয়া, খুলনা।
                      </a>
                    </h4>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="info-card">
                  <div className="box-icon">
                    <i className="fal fa-phone"></i>
                    <div className="bg-shape1" style={bgShape}></div>
                    <div className="bg-shape2" style={bgShape}></div>
                  </div>
                  <div className="box-content">
                    <p className="box-text">আমাদের কল করুন:</p>
                    <h4 className="box-title">
                      <a href="tel:16336547896">+৮৮০-১২১৩-১২৩৪৫৬</a>
                    </h4>
                  </div>
                </div>

                {/* Email Card */}
                <div className="info-card">
                  <div className="box-icon">
                    <i className="fal fa-envelope-open"></i>
                    <div className="bg-shape1" style={bgShape}></div>
                    <div className="bg-shape2" style={bgShape}></div>
                  </div>
                  <div className="box-content">
                    <p className="box-text">আমাদের ইমেল করুন:</p>
                    <h4 className="box-title">
                      <a href="mailto:info@donat.com">info@exsadhs.com</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="col-auto header-social-col">
              <div className="th-social">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky navigation */}
      <div className="sticky-wrapper">
        <div className="container">
          <div className="menu-area">
            <div className="menu-area-wrap">
              {/* Mobile Logo */}
              <div className="col-auto d-inline-block d-lg-none">
                <div className="header-logo">
                  <a href="index.html">
                    <img src="/assets/img/logo-white.svg" alt="Donat" />
                  </a>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="main-menu d-none d-lg-block">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="#">Donations</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="#">Shop</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop-details.html">Shop Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="team.html">Volunteers</a>
                      </li>
                      <li>
                        <a href="team-details.html">Volunteer Details</a>
                      </li>
                      <li>
                        <a href="add-team.html">Become A Volunteer</a>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQS</a>
                      </li>
                      <li>
                        <a href="testimonial.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="error.html">Error Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>

              {/* Notice Text */}
              <p className="header-notice">
                <img
                  className="me-1"
                  src="/assets/img/icon/heart-icon.svg"
                  alt="img"
                />
                আসুন স্বেচ্ছাসেবক হই...
              </p>
            </div>

            {/* Buttons */}
            <div className="header-button">
              <button
                type="button"
                className="icon-btn style2 searchBoxToggler d-lg-block d-none"
              >
                <i className="far fa-user"></i>
              </button>
              {/* <button type="button" className="icon-btn sideMenuToggler">
                <span className="badge">5</span>
                <i className="fa-regular fa-cart-shopping"></i>
              </button> */}
              <a
                href="contact.html"
                className="th-btn style3 d-lg-block d-none"
              >
                <i className="fas fa-heart me-2"></i> Donate Now
              </a>
              <button
                type="button"
                className="icon-btn th-menu-toggle d-lg-none"
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
