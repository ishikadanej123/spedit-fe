import React from "react";

const FeturesArea = () => {
  return (
    <section className="features-area gray-bg features-area-border p-relative pb-70 pt-100 box-105">
      <div className="container features__wrapper">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="section-title text-center mb-40">
              <span>Feathures</span>
              <h4>Why Shop From Us.</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="features__item d-flex white-bg transition-3 border-radius-8 box-shadow mb-30">
              <div className="features__icon">
                <i className="fa-solid fa-shipping-fast"></i>
              </div>
              <div className="features__content">
                <h3>FREE SHIPPING</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                  dole there eiusm tempor magna aliqua denim.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="features__item d-flex white-bg transition-3 border-radius-8 box-shadow mb-30">
              <div className="features__icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="features__content">
                <h3>24/7 SUPPORT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                  dole there eiusm tempor magna aliqua denim.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="features__item d-flex white-bg transition-3 border-radius-8 box-shadow mb-30">
              <div className="features__icon">
                <i className="fa-solid fa-undo-alt"></i>
              </div>
              <div className="features__content">
                <h3>EASY RETURN</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                  dole there eiusm tempor magna aliqua denim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeturesArea;
