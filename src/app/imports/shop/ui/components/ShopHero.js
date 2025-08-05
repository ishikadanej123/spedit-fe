import React from "react";

const ShopHero = () => {
  return (
    <section className="shop-sidebar pt-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="bar-area">
              <div className="side-cat mb-45">
                <h6 className="cat-title pb-20">Categories</h6>
                <ul>
                  <li>
                    <a href="#">Accessories (9)</a>
                  </li>
                  <li>
                    <a href="#">Bags (8)</a>
                  </li>
                  <li>
                    <a href="#">Clothing (15)</a>
                  </li>
                  <li>
                    <a href="#">Gallery (12)</a>
                  </li>
                  <li>
                    <a href="#">Indoor Plants (12)</a>
                  </li>
                  <li>
                    <a href="#">Sweaters (2)</a>
                  </li>
                </ul>
              </div>
              <div className="slider-range mb-40">
                <div className="cat-title mb-30">
                  <h6>Filter By Price</h6>
                </div>
                <div id="slider-range"></div>
                <p>
                  <label name="amount">Price :</label>
                  <input type="text" id="amount" readOnly />
                </p>
              </div>
              <div className="side-cat color fix mb-40">
                <h6 className="cat-title pb-20">Color</h6>
                <ul>
                  <li>
                    <a href="#">Blue (2)</a>
                  </li>
                  <li>
                    <a href="#">Green (2)</a>
                  </li>
                  <li>
                    <a href="#">White (53)</a>
                  </li>
                  <li>
                    <a href="#">Yellow (53)</a>
                  </li>
                  <li>
                    <a href="#">Pink (20)</a>
                  </li>
                  <li>
                    <a href="#">Red (20)</a>
                  </li>
                  <li>
                    <a href="#">Brown (16)</a>
                  </li>
                </ul>
              </div>
              <div className="side-cat size mb-40 fix">
                <h6 className="cat-title pb-20">Size</h6>
                <ul>
                  <li>
                    <a href="#">Small (2)</a>
                  </li>
                  <li>
                    <a href="#">Extra Small (2)</a>
                  </li>
                  <li>
                    <a href="#">Extra Large (16)</a>
                  </li>
                  <li>
                    <a href="#">Huge (53)</a>
                  </li>
                  <li>
                    <a href="#">Large (53)</a>
                  </li>
                  <li>
                    <a href="#">Medium (20)</a>
                  </li>
                </ul>
              </div>
              <div className="side-tag mb-50">
                <h6 className="cat-title pb-20">Popular Tag</h6>
                <ul>
                  <li>
                    <a href="#">Small</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Grey</a>
                  </li>
                  <li>
                    <a href="#">Yellows</a>
                  </li>
                  <li>
                    <a href="#">Magenta</a>
                  </li>
                  <li>
                    <a href="#">Clothing</a>
                  </li>
                  <li>
                    <a href="#">Small</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Grey</a>
                  </li>
                </ul>
              </div>
              <div className="side-product mb-50">
                <h6 className="cat-title pb-20">Recent Product</h6>
                <div className="side-pro-wrapper mb-20">
                  <div className="side-pro-img">
                    <a href="#">
                      <img
                        src="img/product/side-product-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="side-pro-text">
                    <h6>
                      <a href="#">Loose Oversized</a>
                    </h6>
                    <span className="price">
                      $17.50 <del>$19.50</del>
                    </span>
                  </div>
                </div>
                <div className="side-pro-wrapper mb-20">
                  <div className="side-pro-img">
                    <a href="#">
                      <img
                        src="img/product/side-product-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="side-pro-text">
                    <h6>
                      <a href="#">Loose Oversized</a>
                    </h6>
                    <span className="price">$13.50</span>
                  </div>
                </div>
                <div className="side-pro-wrapper mb-20">
                  <div className="side-pro-img">
                    <a href="#">
                      <img
                        src="img/product/side-product-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="side-pro-text">
                    <h6>
                      <a href="#">Loose Oversized</a>
                    </h6>
                    <span className="price">
                      $22.50 <del>$27.50</del>
                    </span>
                  </div>
                </div>
                <div className="side-pro-wrapper mb-20">
                  <div className="side-pro-img">
                    <a href="#">
                      <img
                        src="img/product/side-product-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="side-pro-text">
                    <h6>
                      <a href="#">Loose Oversized</a>
                    </h6>
                    <span className="price">$17.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="shop-content-area">
              <div className="content-header mb-55">
                <div className="ch-left">
                  <ul className="nav shop-tabs" id="myTab" role="tablist">
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
                        <i className="fa-solid fa-th"></i>
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
                        <i className="fa-solid fa-list-ul"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ch-right">
                  <div className="show-text">
                    <span>Showing 1–12 of 20 results</span>
                  </div>
                  <div className="sort-wrapper">
                    <select name="select" id="select">
                      <option value="1">Short By New</option>
                      <option value="2">Short By New</option>
                      <option value="3">Short By New</option>
                      <option value="4">Short By New</option>
                      <option value="5">Short By New</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="tab-content shop-tabs-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row custom-row-10">
                    <div className="col-lg-6 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-40">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-9.jpg"
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
                              <a href="product-details.html">
                                Loose Oversized Shirt{" "}
                              </a>
                            </h6>
                            <h5 className="pro-price">$29.50</h5>
                          </div>
                          <div className="cart-icon">
                            <a href="cart.html">
                              <i className="fa-solid fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-40">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-10.jpg"
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
                              <a href="product-details.html">
                                Cotton Jersey Loose
                              </a>
                            </h6>
                            <h5 className="pro-price">$50.50 - 75.99</h5>
                          </div>
                          <div className="cart-icon">
                            <a href="cart.html">
                              <i className="fa-solid fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-40">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-11.jpg"
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
                              <a href="product-details.html">
                                Cotton Jersey Top (Variable)
                              </a>
                            </h6>
                            <h5 className="pro-price">$29.50</h5>
                          </div>
                          <div className="cart-icon">
                            <a href="cart.html">
                              <i className="fa-solid fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-40">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-12.jpg"
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
                              <a href="product-details.html">
                                Loose Oversized Shirt
                              </a>
                            </h6>
                            <h5 className="pro-price">
                              $17.50 <del>$17.50</del>
                            </h5>
                          </div>
                          <div className="cart-icon">
                            <a href="cart.html">
                              <i className="fa-solid fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-40">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-13.jpg"
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
                              <a href="product-details.html">
                                Loose Oversized Shirt{" "}
                              </a>
                            </h6>
                            <h5 className="pro-price">$29.50</h5>
                          </div>
                          <div className="cart-icon">
                            <a href="cart.html">
                              <i className="fa-solid fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-40">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-14.jpg"
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
                              <a href="product-details.html">
                                Cotton Jersey Loose
                              </a>
                            </h6>
                            <h5 className="pro-price">$50.50 - 75.99</h5>
                          </div>
                          <div className="cart-icon">
                            <a href="cart.html">
                              <i className="fa-solid fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-40">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-15.jpg"
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
                              <a href="product-details.html">
                                Cotton Jersey Top (Variable)
                              </a>
                            </h6>
                            <h5 className="pro-price">$29.50</h5>
                          </div>
                          <div className="cart-icon">
                            <a href="cart.html">
                              <i className="fa-solid fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-40">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-16.jpg"
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
                              <a href="product-details.html">
                                Loose Oversized Shirt
                              </a>
                            </h6>
                            <h5 className="pro-price">
                              $17.50 <del>$17.50</del>
                            </h5>
                          </div>
                          <div className="cart-icon">
                            <a href="cart.html">
                              <i className="fa-solid fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row mb-20">
                    <div className="col-lg-4 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-30">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-9.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-6 custom-col-10">
                      <div className="product-wrapper pro-list-content mb-40">
                        <div className="pro-text">
                          <div className="pro-title">
                            <h6>
                              <a href="product-details.html">
                                Loose Oversized Shirt{" "}
                              </a>
                            </h6>
                            <h5 className="pro-price">$29.50</h5>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <div className="product-action">
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
                      </div>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-lg-4 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-30">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-9.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-6 custom-col-10">
                      <div className="product-wrapper pro-list-content mb-40">
                        <div className="pro-text">
                          <div className="pro-title">
                            <h6>
                              <a href="product-details.html">
                                Loose Oversized Shirt{" "}
                              </a>
                            </h6>
                            <h5 className="pro-price">$29.50</h5>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <div className="product-action">
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
                      </div>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-lg-4 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-30">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-9.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-6 custom-col-10">
                      <div className="product-wrapper pro-list-content mb-40">
                        <div className="pro-text">
                          <div className="pro-title">
                            <h6>
                              <a href="product-details.html">
                                Loose Oversized Shirt{" "}
                              </a>
                            </h6>
                            <h5 className="pro-price">$29.50</h5>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <div className="product-action">
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
                      </div>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-lg-4 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-30">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-9.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-6 custom-col-10">
                      <div className="product-wrapper pro-list-content mb-40">
                        <div className="pro-text">
                          <div className="pro-title">
                            <h6>
                              <a href="product-details.html">
                                Loose Oversized Shirt{" "}
                              </a>
                            </h6>
                            <h5 className="pro-price">$29.50</h5>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <div className="product-action">
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
                      </div>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-lg-4 col-sm-6 custom-col-10">
                      <div className="product-wrapper mb-30">
                        <div className="pro-img mb-20">
                          <a href="product-details.html">
                            <img
                              src="img/product/product-9.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-6 custom-col-10">
                      <div className="product-wrapper pro-list-content mb-40">
                        <div className="pro-text">
                          <div className="pro-title">
                            <h6>
                              <a href="product-details.html">
                                Loose Oversized Shirt{" "}
                              </a>
                            </h6>
                            <h5 className="pro-price">$29.50</h5>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <div className="product-action">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-area mt-40 mb-70">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link prev" href="#" tabIndex="-1">
                      <i className="fa-solid fa-angle-left"></i> Prev
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link next" href="#">
                      Next <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
