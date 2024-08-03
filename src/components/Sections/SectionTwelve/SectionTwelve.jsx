import React from "react";
import "./SectionTwelve.css";

const data = [
  {
    head: "Certified B Corp",
    para: " We meet the highest verified standards of social and environmental performance, transparency and accountability.",
  },
  {
    head: "Leaping Bunny approved",
    para: "Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.",
  },
  {
    head: "PETA recognition",
    para: "We appear on PETA's internationally recognised vegan and cruelty-free lists.",
  },
];

function SectionTwelve() {
  return (
    <div className="SectionTwelve">
      <div className="cards">
        {data.map((x) => {
          return (
            <div className="card">
              <h4>{x.head}</h4>
              <p>{x.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionTwelve;
