"use client";
import React from "react";

const BestSellingProducts = () => {
  return (
    <section className="product-area pt-95">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-four mb-15">
              <h4>Best Selling Items</h4>
              <a href="#" className="common-link">
                Deal of the day{" "}
                <i className="fa-solid fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 custom-width-20">
            <div className="product-wrapper mb-40">
              <div className="pro-img mb-20">
                <a href="product-details.html">
                  <img
                    src="img/product/product-40.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="product-action text-center">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Shoppingb Cart"
                  >
                    <i className="fa-solid fa-cart-arrow-down"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Compare"
                  >
                    <i className="fa-solid fa-exchange"></i>
                  </a>
                </div>
              </div>
              <div className="pro-text">
                <div className="pro-title">
                  <h6>
                    <a href="product-details.html">Loose Oversized Shirt </a>
                  </h6>
                  <div className="common-price-hover">
                    <h5 className="pro-price">
                      $29.50 <del>$35.50</del>
                    </h5>
                  </div>
                </div>
                <div className="cart-icon">
                  <a href="cart.html">
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 custom-width-20">
            <div className="product-wrapper mb-40">
              <div className="pro-img mb-20">
                <a href="product-details.html">
                  <img
                    src="img/product/product-41.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="product-action text-center">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Shoppingb Cart"
                  >
                    <i className="fa-solid fa-cart-arrow-down"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Compare"
                  >
                    <i className="fa-solid fa-exchange"></i>
                  </a>
                </div>
              </div>
              <div className="pro-text">
                <div className="pro-title">
                  <h6>
                    <a href="product-details.html">Loose Oversized Shirt </a>
                  </h6>
                  <div className="common-price-hover">
                    <h5 className="pro-price">$29.50 - $55.00</h5>
                  </div>
                </div>
                <div className="cart-icon">
                  <a href="cart.html">
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 custom-width-20">
            <div className="product-wrapper mb-40">
              <div className="pro-img mb-20">
                <a href="product-details.html">
                  <img
                    src="img/product/product-42.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="product-action text-center">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Shoppingb Cart"
                  >
                    <i className="fa-solid fa-cart-arrow-down"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Compare"
                  >
                    <i className="fa-solid fa-exchange"></i>
                  </a>
                </div>
              </div>
              <div className="pro-text">
                <div className="pro-title">
                  <h6>
                    <a href="product-details.html">Loose Oversized Shirt </a>
                  </h6>
                  <div className="common-price-hover">
                    <h5 className="pro-price">$29.50</h5>
                  </div>
                </div>
                <div className="cart-icon">
                  <a href="cart.html">
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 custom-width-40 medical-pro-width">
            <div className="medical-banner medical-pro-banner mb-30">
              <a href="shop.html">
                <img
                  src="img/banner/banner-img-11.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="medical-banner-text">
                <h5>Cara Portable Compressor Air</h5>
                <span>Easy And Free Returns!</span>
                <span className="m-price f-300">
                  $ 145<sup>.00</sup>
                  <del>
                    $ 165<sup>.00</sup>
                  </del>
                </span>
                <a href="shop.html" className="common-link">
                  View more<i className="fa-solid fa-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
