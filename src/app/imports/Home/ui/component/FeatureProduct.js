import React from "react";

const FeatureProduct = () => {
  return (
    <section className="banner-area banner-four">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 custom-width-50">
            <div className="medical-banner mb-30">
              <a href="shop.html">
                <img
                  src="img/banner/banner-img-9.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="medical-banner-text">
                <h5>N95 Face Mask Multilayer Protect</h5>
                <span>Easy And Free Returns!</span>
                <span className="m-price">
                  $ 39<sup>.50</sup>
                </span>
                <a href="shop.html" className="common-link">
                  View more<i className="fas fa-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 custom-width-50">
            <div className="medical-banner mb-30">
              <a href="shop.html">
                <img
                  src="img/banner/banner-img-10.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="medical-banner-text">
                <h5>Botanical Head Temprature Track</h5>
                <span>Easy And Free Returns!</span>
                <span className="m-price">
                  $ 69<sup>.99</sup>
                </span>
                <a href="shop.html" className="common-link">
                  shop now<i className="fas fa-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
