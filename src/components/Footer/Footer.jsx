import React from "react";
import "./Footer.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Subscribe to Aesop communications</h3>
        <hr />

        <input type="email" placeholder="Email address" />
        <label>
          <input type="checkbox" />
          <p>
            Subscribe to receive communications from Aesop. By subscribing, you
            confirm you have read and understood our
            <a href="#" style={{ textDecoration: "underline" }}>
              {" "}
              privacy policy.
            </a>
          </p>
        </label>
      </div>
      <div className="footer-section">
        <h3>Orders and support</h3>
        <hr />
        <ul>
          <li>
            <a href="#">
              Contact us{" "}
              <ArrowOutwardIcon style={{ fontSize: "15px", margin: "0 5px" }} />
            </a>
          </li>
          <li>
            <a href="#">
              FAQs
              <ArrowOutwardIcon style={{ fontSize: "15px", margin: "0 5px" }} />
            </a>
          </li>
          <li>
            <a href="#">
              Shipping{" "}
              <ArrowOutwardIcon style={{ fontSize: "15px", margin: "0 5px" }} />
            </a>
          </li>
          <li>
            <a href="#">
              Returns{" "}
              <ArrowOutwardIcon style={{ fontSize: "15px", margin: "0 5px" }} />
            </a>
          </li>
          <li>
            <a href="#">Order history</a>
          </li>
          <li>
            <a href="#">Check gift card balance</a>
          </li>
          <li>
            <a href="#">Terms and conditions</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Services</h3>
        <hr />

        <ul>
          <li>
            <a href="#">Live assistance</a>
          </li>
          <li>
            <a href="#">Corporate gifts</a>
          </li>
          <li>
            <a href="#">Facial Appointments</a>
          </li>
          <li>
            <a href="#">Click and Collect</a>
          </li>
          <li>
            <a href="#">Video consultation</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Location preferences</h3>
        <hr />

        <p>Shipping:</p>
        <p>
          <a href="#" style={{ textDecoration: "underline" }}>
            Hong Kong, SAR
          </a>
        </p>
        <p>Language:</p>
        <p>
          <a href="#" style={{ textDecoration: "underline" }}>
            English
          </a>
        </p>

        <p>
          <a href="#">繁體中文</a>
        </p>
      </div>
      <div className="footer-section">
        <h3>Sustainability</h3>
        <hr />

        <p>
          All Aesop products are vegan, and we do not test our formulations or
          ingredients on animals. We are Leaping Bunny approved and a Certified
          B Corporation. <a href="#">Learn more</a>
        </p>
      </div>
      <div className="footer-section">
        <h3>About</h3>
        <hr />

        <ul>
          <li>
            <a href="#">Our story</a>
          </li>
          <li>
            <a href="#">Foundation</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Social media</h3>
        <hr />

        <ul>
          <li>
            <a href="#">
              Instagram{" "}
              <ArrowOutwardIcon style={{ fontSize: "15px", margin: "0 5px" }} />
            </a>
          </li>
          <li>
            <a href="#">
              Twitter{" "}
              <ArrowOutwardIcon style={{ fontSize: "15px", margin: "0 5px" }} />
            </a>
          </li>
          <li>
            <a href="#">
              LinkedIn{" "}
              <ArrowOutwardIcon style={{ fontSize: "15px", margin: "0 5px" }} />
            </a>
          </li>
          <li>
            <a href="#">
              WeChat{" "}
              <ArrowOutwardIcon style={{ fontSize: "15px", margin: "0 5px" }} />
            </a>
          </li>
          <li>
            <a href="#">
              Weibo{" "}
              <ArrowOutwardIcon style={{ fontSize: "15px", margin: "0 5px" }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <hr />
        <p style={{ textAlign: "start" }}>© Aesop</p>
      </div>
    </footer>
  );
};

export default Footer;
