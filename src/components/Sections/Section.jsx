import React from "react";
import "./Section.css";
import SectionFirst from "./SectionFirst/SectionFirst";
// import SectionSecond from "./SectionSecond/SectionSecond";
import SectionThird from "./SectionThird/SectionThird";
import SectionFour from "./SectionFour/SectionFour";
import SectionFive from "./SectionFive/SectionFive";
import SectionSix from "./SectionSix/SectionSix";
import SectionSeven from "./SectionSeven/SectionSeven";
import SectionEight from "./SectionEight/SectionEight";
import SectionNine from "./SectionNine/SectionNine";
import SectionTen from "./SectionTen/SectionTen";
import SectionEleven from "./SectionEleven/SectionEleven";
import SectionTwelve from "./SectionTwelve/SectionTwelve";

function Section() {
  return (
    <div className="mainSection">
      <SectionFirst />
      {/* <SectionSecond /> */}
      <SectionThird />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
      <SectionTwelve />
    </div>
  );
}

export default Section;
