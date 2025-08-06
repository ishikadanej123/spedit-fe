"use client";
import React, { useState } from "react";
import Headernew from "../Header/Headernew";
import Footer from "../Footer/Footer";

const LoginPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Headernew />
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From Here</h3>
                <form action="#">
                  <label name="name">
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Username or Email address..."
                  />
                  <label name="pass">
                    Password <span>**</span>
                  </label>
                  <input
                    id="pass"
                    type="password"
                    placeholder="Enter password..."
                  />
                  <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                      <input
                        id="remember"
                        type="checkbox"
                        style={{ backgroundColor: checked ? "#fff" : "#fff" }}
                      />
                      <label name="remember">Remember me!</label>
                    </span>
                    <span className="forgot-login f-right">
                      <a href="#">Lost your password?</a>
                    </span>
                  </div>
                  <button className="bt-btn theme-btn-2 w-100">
                    Login Now
                  </button>
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <button className="bt-btn bt-btn-black w-100">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LoginPage;
