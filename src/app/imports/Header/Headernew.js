"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Headernew = () => {
  const router = useRouter();

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
                      <li
                        className="has-dropdown"
                        onClick={() => router.push("/")}
                      >
                        <span>Home</span>
                      </li>
                      <li onClick={() => router.push("/about")}>
                        <span>About</span>
                      </li>
                      <li
                        className="mega-menu"
                        onClick={() => router.push("/shop")}
                      >
                        <span>Shop</span>
                      </li>

                      <li>
                        <span onClick={() => router.push("#")}>Pages</span>
                        <ul className="submenu">
                          <li>
                            <span onClick={() => router.push("/about")}>
                              About Us
                            </span>
                          </li>
                          <li>
                            <span onClick={() => router.push("/contact")}>
                              Contact Us
                            </span>
                          </li>
                          <li>
                            <span onClick={() => router.push("/login")}>
                              Login
                            </span>
                          </li>
                          <li>
                            <span onClick={() => router.push("/register")}>
                              Register
                            </span>
                          </li>
                          <li>
                            <span onClick={() => router.push("/cart")}>
                              Shopping Cart
                            </span>
                          </li>
                          <li>
                            <span onClick={() => router.push("/checkout")}>
                              Checkout
                            </span>
                          </li>
                          <li>
                            <span onClick={() => router.push("/wishlist")}>
                              Wishlist
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span onClick={() => router.push("/contact")}>
                          Contact
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-7 col-6">
                <div className="header-left-icon header-left-icon4 d-flex align-items-center f-right">
                  <span
                    className="search-btn nav-search search-trigger"
                    onClick={() => router.push("#")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa-solid fa-search" />
                  </span>
                  <span
                    onClick={() => router.push("/login")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa-solid fa-user" />
                  </span>
                  <span
                    onClick={() => router.push("/wishlist")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa-solid fa-heart" />
                  </span>
                  <span
                    onClick={() => router.push("/cart")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa-solid fa-cart-arrow-down" />
                  </span>
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
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li className="has-dropdown">
              <a href="shop.html">Shop</a>
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
