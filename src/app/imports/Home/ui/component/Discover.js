"use client";
import React from "react";

const Discover = () => {
  return (
    <section
      className="discover-four pt-110 pb-115"
      data-background="img/discover/discover-four-bg.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-8 col-12 custom-width-40">
            <div className="dis-four-text">
              <div className="section-title">
                <h4 className="f-700">
                  Grade A Safety Masks For Sale. Hurry Up!
                </h4>
                <p>
                  Ut ultricies imperdiet sodales. Aliquam fringilla aliquam exs
                  it amet elementum. Proin bibendum feugiat simplifies.
                </p>
              </div>
              <ul className="mb-25">
                <li>
                  <img src="img/discover/dis-four-1.png" alt="" />
                  Express Delivery
                </li>
                <li className="ml-45">
                  <img src="img/discover/dis-four-2.png" alt="" />
                  Premium Packaging
                </li>
                <li>
                  <img src="img/discover/dis-four-3.png" alt="" />
                  Safe Payment
                </li>
                <li className="ml-65">
                  <img src="img/discover/dis-four-4.png" alt="" />
                  Friendly Services
                </li>
              </ul>
              <a href="#" className="common-link">
                Discover More <i className="fas fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
