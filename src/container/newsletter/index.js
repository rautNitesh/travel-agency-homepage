import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="app__wrapper newsletter">
      <div className="newsletter-container">
        <h2 className="heading-text">
          Subscribe to get best traveling <br />
          packages and updates
        </h2>
        <p className="content-text">
          We love useful stuff, and we love quality writing, that's why we send
          out an editorial email newsletter{" "}
        </p>

        <div className="newsletter-form">
          <form>
            <div className="newsletter-form-wrapper">
              <input
                type="email"
                placeholder="Email Address"
                className="newsletter-input"
              />
              <input
                type="submit"
                value="Subscribe"
                className="newsletter-submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
