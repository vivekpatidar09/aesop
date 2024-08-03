import React from "react";
import "./SectionFive.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import secImage from "./SectionFiveImg.avif";

function SectionFive() {
  return (
    <div>
      <div className="SectionFive">
        <div className="sec1">
          <div className="col2">
            <h4>Limited-edition Eleos sleeve</h4>
            <h1>Elevating the experience of Eleos</h1>
            <p>
              Receive a complimentary, limited-edition sleeve inspired by Eleos
              Aromatique Hand Balm with any hand care purchase on
              Aesop.com—including our Resurrection and Reverence ranges.
            </p>
            <a href="" className="btn">
              <p>Claim your celebratory gift</p>
              <ArrowForwardIcon />
            </a>
          </div>
        </div>
        <div className="sec2">
          <div className="col3">
            <img src={secImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
