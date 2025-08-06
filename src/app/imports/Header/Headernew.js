"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Headernew = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMenuOpen(true);
    document.body.classList.add("on-side");
  };

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("on-side");
  };

  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen((prev) => !prev);
  };

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
                  <span
                    type="button"
                    onClick={handleMobileMenuOpen}
                    className="menu-trigger-button"
                  >
                    <i className="fa-solid fa-bars" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
      {/* slide-bar start */}
      <aside className={`slide-bar ${isMenuOpen ? "show" : ""}`}>
        <div className="close-mobile-menu">
          <span
            type="button"
            onClick={handleMobileMenuClose}
            className="menu-close-button"
          >
            <i className="fa-solid fa-times" />
          </span>
        </div>
        {/* side-mobile-menu start */}
        <nav className="side-mobile-menu">
          <ul id="mobile-menu-active">
            <li>
              <span onClick={() => router.push("/")}>Home</span>
            </li>
            <li>
              <span onClick={() => router.push("/about")}>About</span>
            </li>
            <li>
              <span onClick={() => router.push("/shop")}>Shop</span>
            </li>

            <li
              className={`has-dropdown ${isMobileDropdownOpen ? "show" : ""}`}
            >
              <span
                onClick={toggleMobileDropdown}
                aria-expanded={isMobileDropdownOpen}
                className="dropdown-toggle"
                style={{ cursor: "pointer" }}
              >
                Pages
              </span>
              <ul
                className={`submenu transition-submenu ${
                  isMobileDropdownOpen ? "open" : ""
                }`}
              >
                <li>
                  <span onClick={() => router.push("/about")}>About Us</span>
                </li>
                <li>
                  <span onClick={() => router.push("/contact")}>
                    Contact Us
                  </span>
                </li>
                <li>
                  <span onClick={() => router.push("/login")}>Login</span>
                </li>
                <li>
                  <span onClick={() => router.push("/register")}>Register</span>
                </li>
                <li>
                  <span onClick={() => router.push("/cart")}>
                    Shopping Cart
                  </span>
                </li>
                <li>
                  <span onClick={() => router.push("/checkout")}>Checkout</span>
                </li>
                <li>
                  <span onClick={() => router.push("/wishlist")}>Wishlist</span>
                </li>
              </ul>
            </li>

            <li>
              <span onClick={() => router.push("/contact")}>Contact</span>
            </li>
          </ul>
        </nav>
        {/* side-mobile-menu end */}
      </aside>

      {isMenuOpen && (
        <div
          className="body-overlay active"
          onClick={handleMobileMenuClose}
          style={{ cursor: "pointer" }}
        />
      )}

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
