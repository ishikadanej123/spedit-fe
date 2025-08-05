import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area footer-four pt-85 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 custom-width-20">
              <div className="footer-widget-four mb-30">
                <h5>Get In Touch</h5>
                <div className="address-four">
                  <div className="single-add mb-20">
                    <div className="add-icon">
                      <i className="fa-solid fa-map-marker-alt"></i>
                    </div>
                    <div className="add-text">
                      <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
                    </div>
                  </div>
                  <div className="single-add mb-20">
                    <div className="add-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="add-text">
                      <span>Contact@Company.Com</span>
                    </div>
                  </div>
                  <div className="single-add mb-20">
                    <div className="add-icon">
                      <i className="fa-solid fa-mobile-alt"></i>
                    </div>
                    <div className="add-text">
                      <span>(+02) 1800 5656 3010</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 custom-width-20">
              <div className="footer-widget-four mb-30 ml-40">
                <h5>Categories</h5>
                <ul className="links-four">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Facing Mask
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Oxygen
                      Device
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Lightweight
                      Chair
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Essential
                      Scrub
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Other
                      Accesories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 custom-width-20">
              <div className="footer-widget-four mb-30 ml-50">
                <h5>Quick Links</h5>
                <ul className="links-four">
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> Shortcode
                      Page
                    </a>
                  </li>
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> Refund
                      Policy
                    </a>
                  </li>
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> Term and
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> Privacy
                      Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 custom-width-20">
              <div className="footer-widget-four mb-30 ml-50">
                <h5>Information</h5>
                <ul className="links-four">
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> My Account
                    </a>
                  </li>
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> Store
                      Location
                    </a>
                  </li>
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="shop.html">
                      <i className="fa-solid fa-chevron-right"></i> FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 custom-width-20">
              <div className="footer-widget mb-30">
                <h5>Newsletter</h5>
                <div className="subscription">
                  <p>
                    Subscribe to our newsletter & 10% off your first purchase
                  </p>
                  <form action="#" className="mb-20">
                    <input
                      type="email"
                      placeholder="Enter Email ID"
                      className="bg-white"
                    />
                    <button type="submit">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-four">
        <div className="container">
          <div className="copy-border-four">
            <div className="row align-items-center">
              <div className="col-md-7 col-12">
                <div className="copy-four-text">
                  <span>
                    Copyright 2025 Spedit Theme. All Rights Reserved. Powered By
                    Basictheme.
                  </span>
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="copyright-payment text-right">
                  <img
                    src="img/footer/payment-four.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
