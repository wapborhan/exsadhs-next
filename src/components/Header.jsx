import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const session = useSession();

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
              <Link href="/" className="header-logo d-flex align-items-center">
                <img src="/assets/img/logo.png" alt="Logo" width={50} />
                <h6 className="m-0 d-flex flex-column fs-6">
                  <span>EX-Student</span>
                  <span>Association</span>
                </h6>
              </Link>
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
                    <Link href="/">মুলপাতা </Link>
                  </li>
                  <li>
                    <Link href="/about">আমাদের সম্পর্কে</Link>
                  </li>
                  <li>
                    <Link href="/events">ইভেন্টস</Link>
                  </li>{" "}
                  <li>
                    <Link href="/volunteer">ভলেন্টিয়ার</Link>
                  </li>
                  <li>
                    <Link href="/contact">যোগাযোগ</Link>
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
                  </li>{" "}
                  {session?.status === "authenticated" && (
                    <li>
                      <button onClick={() => signOut()}>Logout</button>
                    </li>
                  )}
                </ul>
              </nav>

              {/* Notice Text */}
              <p className="header-notice"></p>
            </div>

            {/* Buttons */}
            <div className="header-button">
              {session?.status === "authenticated" ? (
                <Link href="/profile" className="icon-btn style2">
                  <i className="far fa-user"></i>
                </Link>
              ) : (
                <Link href="/auth" className="icon-btn style2">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
              )}

              <Link
                href="/become-volunteer"
                className="th-btn style1 d-lg-block d-none"
              >
                <img
                  className="me-1"
                  src="/assets/img/icon/heart-icon.svg"
                  alt="img"
                />
                আসুন স্বেচ্ছাসেবক হই
              </Link>

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
