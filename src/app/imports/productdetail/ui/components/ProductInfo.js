"use client";
import React from "react";

const ProductInfo = () => {
  return (
    <section className="product-details-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="pro-details-tab">
              <ul className="nav custom-tab" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <img
                      src="/img/product/pro-details-tab-1.jpg"
                      className="img-fluid"
                      alt="Designer Handbag"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <img
                      src="/img/product/pro-details-tab-2.jpg"
                      className="img-fluid"
                      alt="Designer Handbag"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    <img
                      src="/img/product/pro-details-tab-3.jpg"
                      className="img-fluid"
                      alt="Designer Handbag"
                    />
                  </a>
                </li>
              </ul>
              <div className="tab-content custom-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <img
                    src="/img/product/pro-details-1.jpg"
                    className="img-fluid"
                    alt="Designer Handbag"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <img
                    src="/img/product/pro-details-2.jpg"
                    className="img-fluid"
                    alt="Designer Handbag"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <img
                    src="/img/product/pro-details-3.jpg"
                    className="img-fluid"
                    alt="Designer Handbag"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="pro-details-content mt-15">
              <h4>Designer Handbag</h4>
              <div className="details-rating mb-10">
                <a href="#">
                  <i className="fas fa-star"></i>
                </a>
                <a href="#">
                  <i className="fas fa-star"></i>
                </a>
                <a href="#">
                  <i className="fas fa-star"></i>
                </a>
                <a href="#">
                  <i className="fas fa-star"></i>
                </a>
                <a href="#">
                  <i className="fas fa-star"></i>
                </a>
                <span>(23 Customer Review)</span>
              </div>
              <span className="details-pro-price mb-40">
                $ 270.00 - $300.00
              </span>
              <p>
                La croix blog sriracha, distillery ugh small batch retro
                literally coloring book disrupt gochujang affogato. Edison bulb.
                The next generation of our icon library + toolkit is coming with
                more icons, more styles, more services..
              </p>
              <div className="size-wrapper mb-35">
                <div className="size-text">
                  <span>Select Size :</span>
                </div>
                <div className="sizes">
                  <a href="#">xs</a>
                  <a href="#">M</a>
                  <a href="#">S</a>
                  <a href="#">XL</a>
                  <a href="#">XXL</a>
                </div>
              </div>
              <div className="color-wrapper mb-50">
                <div className="color-text">
                  <span>Select Color :</span>
                </div>
                <div className="colors">
                  <a href="#" className="one"></a>
                  <a href="#" className="two"></a>
                  <a href="#" className="three"></a>
                  <a href="#" className="four"></a>
                  <a href="#" className="five"></a>
                </div>
              </div>
              <div className="pro-quan-area mb-55">
                <div className="product-quantity">
                  <div className="cart-plus-minus">
                    <input type="text" value="1" onChange={() => {}} />
                  </div>
                </div>
                <div className="pro-cart-btn ml-20">
                  <a href="#">Add to cart</a>
                </div>
                <div className="pro-wish ml-45">
                  <a href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-share-alt"></i>
                  </a>
                </div>
              </div>
              <div className="stock-update">
                <div className="stock-list">
                  <ul>
                    <li>
                      <span>Stock :</span>{" "}
                      <span className="s-text red">In Stock</span>
                    </li>
                    <li>
                      <span>SKU :</span> <span className="s-text">027</span>{" "}
                    </li>
                    <li>
                      <span>Categgory :</span>{" "}
                      <span className="s-text"> Handbags</span>
                    </li>
                    <li>
                      <span>Tag :</span>{" "}
                      <span className="s-text">classNameic, Purse</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
