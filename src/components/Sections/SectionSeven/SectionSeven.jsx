import React from "react";
import "./SectionSeven.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import secImage from "./SectionSevenImg.avif";

function SectionSeven() {
  return (
    <div>
      <div className="SectionSeven">
        <div className="sec2">
          <div className="col3">
            <img src={secImage} alt="" />
          </div>
        </div>
        <div className="sec1">
          <div className="col2">
            <h1>Virtual guidance from home's comfort</h1>
            <p>
              For advice on our range of formulations, we welcome you to book a
              complimentary live consultation. Following your appointment, you
              will receive a bespoke product sample when you place an order.
            </p>
            <a href="" className="btn">
              <p>Discover live consultations</p>
              <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSeven;
