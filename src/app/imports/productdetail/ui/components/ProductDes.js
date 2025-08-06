import React from "react";

const ProductDes = () => {
  return (
    <section className="pro-desc-area">
      <div className="container">
        <div className="pro-tab-border">
          <div className="row">
            <div className="col-lg-3">
              <nav>
                <div className="nav pro-desc-tab" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Description
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Additional Information
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Reviews (4)
                  </a>
                </div>
              </nav>
            </div>
            <div className="col-lg-9">
              <div
                className="tab-content pro-desc-tab-content"
                id="nav-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="desc-img-wrapper">
                    <div className="desc-img mb-70">
                      <img
                        src="/img/product/pro-details-desc1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <h4>
                        Slim Trapered <br /> Rip Skirts
                      </h4>
                    </div>
                    <div className="pro-desc-single">
                      <div className="row no-gutters">
                        <div className="col-lg-7 col-width-20">
                          <div className="pro-desc-text pt-70">
                            <h4>Consectetur Adipisicing 2020</h4>
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa deserunt mollit anim id
                              est laborum. Sed ut perspiciatis unde omnis iste
                              natus error sit voluptatem accusantium doloremque
                              laudantium, totam aperiam,
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-5 col-width-20">
                          <div className="pro-desc-img">
                            <img
                              src="/img/product/pro-details-desc2.jpg"
                              className="img-fluid"
                              alt="Designer Handbag"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pro-desc-single pro-desc-single2">
                      <div className="row no-gutters">
                        <div className="col-lg-5">
                          <div className="pro-desc-img no-margin">
                            <img
                              src="/img/product/pro-details-desc2.jpg"
                              className="img-fluid"
                              alt="Designer Handbag"
                            />
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="pro-desc-text pro-desc-text2">
                            <h4>Nostrud Exercitation</h4>
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa deserunt mollit anim id
                              est laborum. Sed ut perspiciatis unde omnis iste
                              natus error sit voluptatem accusantium doloremque
                              laudantium, totam aperiam,
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="additional-information">
                    <ul>
                      <li className="title">Additional information</li>
                      <li>Weight</li>
                      <li>1.4 oz</li>
                      <li>Dimensions</li>
                      <li>62 × 56 × 12 in</li>
                      <li>Size</li>
                      <li>XL, XXL, LG, SM, MD</li>
                      <li>Fabric</li>
                      <li>Cotton, Silk & Synthetic</li>
                      <li>Warranty</li>
                      <li>3 Months</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa deserunt
                    mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDes;
