import React from "react";

const CountDown = () => {
  return (
    <section
      className="countdown-area pt-125 pb-120"
      data-background="img/all-bg/countdown-four-bg.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4 offset-xl-8 col-lg-5 offset-lg-7 col-md-8 offset-md-4 custom-width-40">
            <div className="countdown-wrapper hero-caption-four">
              <div className="sli-offer mb-15">
                <span>-28%</span>
                <span>Hot</span>
              </div>
              <h2>Covid-19 Prevention & Product Supplies</h2>
              <p>
                Ut ultricies imperdiet sodales. Aliquam fringilla aliquam exs it
                amet elementum. Proin bibendum feugiat simplifies.
              </p>
              <div className="product-countdown mb-40">
                <div className="time-count-deal">
                  <div
                    className="countdown-list"
                    data-countdown="2020/12/01"
                  ></div>
                </div>
              </div>
              <a href="#" className="common-link">
                Deal of the day <i className="fas fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
