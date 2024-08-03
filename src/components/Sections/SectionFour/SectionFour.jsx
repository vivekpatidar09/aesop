import React from "react";
import "./SectionFour.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Img from "./sec4.webp";

function SectionFour() {
  return (
    <div>
      <div className="SectionFour">
        <div className="sec1">
          <div className="col1">
            <img src={Img} alt="" />
          </div>
          <div className="col2">
            <h1>Eminently suited to all</h1>
            <p>
              An Aesop Gift Card is the ideal gift for the fussy, the faraway
              and anyone in between—conveniently delivered with the click of a
              mouse to conceal last-minute selections.
            </p>
            <a href="" className="btn">
              <p>Purchase now</p>
              <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
