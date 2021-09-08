import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start  ">
              <h1 className="display-2"> <span  >The Domain Of Work</span><br/> </h1><h2>Creativity bleeds from the pen of inspiration.</h2>
              <p className="main-hero-para">
              <br/>
              Ready to see the difference we can make for you?<br/>
               Thousands of companies and millions of learners have advanced their technical skills and products with The Domain Of Work. Make your team next. 
               We empower hundreds of enterprise companies to make effective data-driven decisions and better connect with their customers.
               
              </p>
              <h3><span className="colorchange">Get early access for you</span></h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter your email"
                />
                <div className="input-group-button" btn-style w-100 type="submit"><a href="/contact">Enroll Now</a></div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images ">
              <img
                src="./img/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              {/* <img
                src="./img/y.jpg"
                alt="heroimg4"
                className="img-fluid  main-hero-img2"
              /> */}
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;