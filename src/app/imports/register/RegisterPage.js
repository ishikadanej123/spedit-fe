import React from "react";
import Headernew from "../Header/Headernew";
import Footer from "../Footer/Footer";

const RegisterPage = () => {
  return (
    <div>
      <Headernew />
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Signup From Here</h3>
                <form action="#">
                  <label name="name">
                    Username <span>**</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Username or Email address..."
                  />
                  <label name="email-id">
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="email-id"
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
                  <div className="mt-10"></div>
                  <button className="bt-btn bt-btn-black w-100">
                    Register Now
                  </button>
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <button className="bt-btn w-100">login Now</button>
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

export default RegisterPage;
