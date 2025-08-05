import React from "react";

const HeroAbout = () => {
  return (
    <div>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="about-left-side pos-rel mb-30">
                <div className="about-front-img pos-rel">
                  <img src="img/all-bg/about-img.jpg" alt="" />
                  <a
                    className="popup-video about-video-btn white-video-btn"
                    href="https://www.youtube.com/watch?v=I3u3lFA9GX4"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-30 mb-30">
                <div className="section-title mb-20">
                  <span>About Us</span>
                  <h4>
                    Short Story About <br /> Retro Team.
                  </h4>
                </div>
                <div className="about-text mb-50">
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    reprehenderit in voluptate cupidatat non proident, sunt in
                    culpa qui officia.
                  </p>
                </div>
                <div className="our-destination">
                  <div className="single-item mb-30">
                    <div className="mv-icon f-left">
                      <i className="fa-solid fa-edit"></i>
                    </div>
                    <div className="mv-title fix">
                      <h3>Our Mission</h3>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit reprehenderit in
                        voluptate.
                      </p>
                    </div>
                  </div>
                  <div className="single-item">
                    <div className="mv-icon f-left">
                      <i className="fa-solid fa-gem"></i>
                    </div>
                    <div className="mv-title fix">
                      <h3>Our Vission</h3>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit reprehenderit in
                        voluptate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroAbout;
