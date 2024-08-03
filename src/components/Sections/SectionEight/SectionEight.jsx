import React from "react";
import "./SectionEight.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import secImage from "./SectionEightImg.avif";

function SectionEight() {
  return (
    <div>
      <div className="SectionEight">
        <div className="sec1">
          <div className="col2">
            <h4>The Athenaeum</h4>
            <h1>The warm-up </h1>
            <p>
              In The Athenaeum, our digital reading room: a guide to ensuring a
              healthy complexion through the warmer months.
            </p>
            <a href="" className="btn">
              <p>Read more</p>
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

export default SectionEight;
