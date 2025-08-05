import React from "react";

const Headernew = () => {
  return (
    <>
      <header className="header-h-four">
        {/* menu-area */}
        <div className="header-menu-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-4 col-md-4 col-4">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo/logo.png" className="img-fluid" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                <div className="main-menu main-menu-4 text-center">
                  <nav id="mobile-menu-four">
                    <ul>
                      <li className="has-dropdown">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="about">About</a>
                      </li>
                      <li className="mega-menu">
                        <a href="shop.html">Shop</a>
                      </li>

                      <li>
                        <a href="#">Pages</a>
                        <ul className="submenu">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="login.html">login</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="cart.html">Shoping Cart</a>
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
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-7 col-6">
                <div className="header-left-icon header-left-icon4 d-flex align-items-center f-right">
                  <a className="search-btn nav-search search-trigger" href="#">
                    <i className="fa-solid fa-search" />
                  </a>
                  <a href="login.html">
                    <i className="fa-solid fa-user" />
                  </a>
                  <a href="wishlist.html">
                    <i className="fa-solid fa-heart" />
                  </a>
                  <a href="cart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </div>
              </div>
              <div className="col-2 col-md-1 d-block d-lg-none">
                <div className="hamburger-menu text-right">
                  <a href="javascript:void(0);">
                    <i className="fa-solid fa-bars" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
      {/* slide-bar start */}
      <aside className="slide-bar">
        <div className="close-mobile-menu">
          <a href="javascript:void(0);">
            <i className="fa-solid fa-times" />
          </a>
        </div>
        {/* side-mobile-menu start */}
        <nav className="side-mobile-menu">
          <ul id="mobile-menu-active">
            <li>
              <a href="index.html">Home</a>
              <ul className="submenu submenu-three">
                <li>
                  <a href="index.html">Home Style 1</a>
                </li>
                <li>
                  <a href="index-2.html">Home Style 2</a>
                </li>
                <li>
                  <a href="index-3.html">Home Style 3</a>
                </li>
                <li>
                  <a href="index-4.html">Home Style 4</a>
                </li>
                <li>
                  <a href="index-5.html">Home Style 5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li className="has-dropdown">
              <a href="shop.html">Shop</a>
              <ul className="submenu">
                <li className="has-dropdown">
                  <a href="#">Category View</a>
                  <ul className="submenu">
                    <li>
                      <a href="shop-2-col.html">Shop 2 Column</a>
                    </li>
                    <li>
                      <a href="shop-2-col-right-sidebar.html">
                        Shop 2 Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="shop-4-col.html">Shop 4 Column Full</a>
                    </li>
                    <li>
                      <a href="shop-list-view.html">Shop List View</a>
                    </li>
                    <li>
                      <a href="shop-no-sidebar.html">Shop No Sidebar</a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a href="#">Category View</a>
                  <ul className="submenu">
                    <li>
                      <a href="shop.html">Sidebar Left</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Sidebar Right</a>
                    </li>
                    <li>
                      <a href="shop-4-col.html">Style 01</a>
                    </li>
                    <li>
                      <a href="shop-2-col-right-sidebar.html">Style 02</a>
                    </li>
                    <li>
                      <a href="shop-2-col.html">Style 03</a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a href="#">Products Types</a>
                  <ul className="submenu">
                    <li>
                      <a href="product-details.html">Simple Product</a>
                    </li>
                    <li>
                      <a href="product-details.html">Variable Product</a>
                    </li>
                    <li>
                      <a href="product-details-grouped.html">Product Grouped</a>
                    </li>
                    <li>
                      <a href="product-details-right.html">Thumb Right Side</a>
                    </li>
                    <li>
                      <a href="product-details-2.html">Thumb Bottom Side</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="blog.html">News</a>
              <ul className="submenu">
                <li>
                  <a href="blog.html">Blog Standart</a>
                </li>
                <li>
                  <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                </li>
                <li>
                  <a href="blog-no-sidebar.html">Blog No Sidebar</a>
                </li>
                <li>
                  <a href="blog-2-col.html">Blog 2 Column</a>
                </li>
                <li>
                  <a href="blog-2-col-mas.html">Blog 2 Col Masonry</a>
                </li>
                <li>
                  <a href="blog-3-col.html">Blog 3 Column</a>
                </li>
                <li>
                  <a href="blog-3-col-mas.html">Blog 3 Col Masonry</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
                <li>
                  <a href="blog-details-audio.html">Blog Details Audio</a>
                </li>
                <li>
                  <a href="blog-details-video.html">Blog Details Video</a>
                </li>
                <li>
                  <a href="blog-details-gallery.html">Blog Details Gallery</a>
                </li>
                <li>
                  <a href="blog-details-left-sidebar.html">
                    Details Left Sidebar
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="#">Pages</a>
              <ul className="submenu">
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="login.html">login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
                <li>
                  <a href="cart.html">Shoping Cart</a>
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
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        {/* side-mobile-menu end */}
      </aside>
      <div className="body-overlay" />
      {/* slide-bar end */}
      {/* Fullscreen search */}
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fa-solid fa-times search-close" id="search-close" />
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search Entire Store..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headernew;
