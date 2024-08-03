import React from "react";
import Slider from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Logo from "./logoBlack.png";
import "./Sec";
import WhiteLogo from "./whiteLogo.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "40%",
        right: "15px",
        zIndex: "2",
        height: "32px",
        cursor: "pointer",
        padding: "2px",
        borderRadius: "50%",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ fontSize: "2rem" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "40%",
        left: "5px",
        zIndex: "2",
        cursor: "pointer",
        height: "32px",
        padding: "2px",
        borderRadius: "50%",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowBackIcon style={{ fontSize: "2rem" }} />
    </div>
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="slide1">
          <div className="col1">
            <img src={WhiteLogo} alt="" />
          </div>
          <div className="col2">
            <h4>Limited-edition</h4>
            <h1>A colourful fragrant pairing</h1>
            <p>
              Receive a complimentary sample of Karst Eau de Parfum and a
              hand-dyed cotton bag with a purchase of Eleos Aromatique Hand
              Balm, while available.
            </p>
            <a href="" className="btn">
              <p>Discover Eleos</p>
              <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="slide2">
          <div className="sec1">
            <div className="col1">
              <img src="../../../../public/logopng.png" alt="" />
            </div>
            <div className="col2">
              <h4>Post-Poo Drops</h4>
              <h1>A colourful fragrant pairing</h1>
              <p>
                Here to make the malodorous, melodious. Dispense this favoured
                formulation into the toilet bowl after flushing to effectively
                mask disagreeable odours.
              </p>
              <a href="" className="btn">
                <p>Discover Eleos</p>
                <ArrowForwardIcon />
              </a>
            </div>
          </div>
          <div className="sec2">
            <div className="col3">
              <video width="600px" height="550px" controls>
                <source src="" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="slide3">
          <div className="sec1">
            <div className="col1">
              <img src="../../../../public/logopng.png" alt="" />
            </div>
            <div className="col2">
              <h4>Personal Care</h4>
              <h1>A refreshing assembly</h1>
              <p>
                Discover a selection of efficacious Personal Care formulations
                to ensure impeccable hygiene from dawn till dusk.
              </p>
              <a href="" className="btn">
                <p>Discover Eleos</p>
                <ArrowForwardIcon />
              </a>
            </div>
          </div>
          <div className="sec2">
            <div className="col3">
              <img src="../../../../public/slide3img.avif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
